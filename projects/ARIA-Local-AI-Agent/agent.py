import warnings
warnings.filterwarnings("ignore")

from langchain_ollama import ChatOllama
from langchain_community.tools import DuckDuckGoSearchRun, WikipediaQueryRun
from langchain_community.utilities import WikipediaAPIWrapper
from langchain_core.tools import Tool
from langchain_core.messages import SystemMessage, HumanMessage, AIMessage
from langgraph.prebuilt import create_react_agent
from datetime import datetime

llm = ChatOllama(model="qwen2.5:32b")

search = DuckDuckGoSearchRun()
wikipedia = WikipediaQueryRun(api_wrapper=WikipediaAPIWrapper())

def calculator(expression: str) -> str:
    try:
        result = eval(expression)
        return str(result)
    except Exception as e:
        return f"Error: {str(e)}"

tools = [
    search,
    wikipedia,
    Tool(
        name="Calculator",
        func=calculator,
        description="Use this to solve math calculations. Input must be a math expression like 2+2 or 100*25"
    )
]

system_prompt = """You are ARIA (Advanced Research Intelligence Assistant). 
You are a professional research assistant who helps users find accurate and up to date information.
When answering questions you always:
1. Use DuckDuckGo for current news and recent events
2. Use Wikipedia for background knowledge, history, and detailed topic explanations
3. Use the Calculator when any numbers or math is involved
4. Summarize findings in a clear and structured way
5. Remember the conversation history and refer back to it when relevant
6. End every response with a confidence level: Low, Medium or High based on your sources
You are running locally on the user's own machine, privately and securely."""

conversation_history = []
session_log = []
session_start = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")

agent = create_react_agent(llm, tools, prompt=SystemMessage(content=system_prompt))

print("=" * 50)
print("ARIA - Advanced Research Intelligence Assistant")
print("Running locally | Private | Free")
print("=" * 50)
print("Type your question or type 'exit' to quit.")
print("-" * 50)

while True:
    user_input = input("You: ")

    if user_input.lower() == "exit":
        print("ARIA: Goodbye! Have a great day.")
        log_filename = f"ARIA_log_{session_start}.txt"
        with open(log_filename, "w", encoding="utf-8") as f:
            f.write(f"ARIA Session Log\n")
            f.write(f"Date: {session_start}\n")
            f.write("=" * 50 + "\n\n")
            for entry in session_log:
                f.write(entry + "\n")
        print(f"Session saved to {log_filename}")
        break

    if user_input.lower() == "memory":
        print("\n--- ARIA Memory This Session ---")
        for msg in conversation_history:
            role = "You" if isinstance(msg, HumanMessage) else "ARIA"
            print(f"{role}: {msg.content}\n")
        print("--------------------------------\n")
        continue

    conversation_history.append(HumanMessage(content=user_input))
    session_log.append(f"You: {user_input}")

    print("\n--- ARIA is thinking ---")
    for step in agent.stream({"messages": conversation_history}, stream_mode="updates"):
        for key, value in step.items():
            if key == "tools":
                for msg in value.get("messages", []):
                    print(f"Tool used: {msg.name}")
                    print(f"Input: {msg.content[:200]}")
                    print("...")
            elif key == "agent":
                messages = value.get("messages", [])
                for msg in messages:
                    if hasattr(msg, "tool_calls") and msg.tool_calls:
                        for tc in msg.tool_calls:
                            print(f"Deciding to use: {tc['name']}")

    response = agent.invoke({"messages": conversation_history})
    aria_reply = response['messages'][-1].content
    conversation_history.append(AIMessage(content=aria_reply))
    session_log.append(f"ARIA: {aria_reply}\n")

    print(f"\nARIA: {aria_reply}\n")
    print("-" * 50)