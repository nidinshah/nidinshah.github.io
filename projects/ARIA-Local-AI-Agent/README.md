# ARIA - Advanced Research Intelligence Assistant

A locally hosted AI agent with real-time web search, Wikipedia knowledge, 
and math capabilities. Runs 100% free with no API costs, no cloud dependency, 
and full privacy on your own hardware.

---

## What is ARIA?

ARIA is an agentic AI research assistant that can:
- Search the internet for current news and real-time information
- Pull deep knowledge from Wikipedia automatically
- Solve math calculations on its own
- Remember your full conversation within a session
- Save every session as a log file automatically
- Show its thinking process in real time before answering

ARIA decides which tool to use on her own based on your question.
You just ask — she figures out the rest.

---

## Demo

Example question:
> "How much is Jeff Bezos net worth today? If he gave RM10 to every person 
on Earth, how much would he have left?"

ARIA automatically:
1. Searches the web for Jeff Bezos current net worth
2. Searches for the MYR to USD exchange rate
3. Uses the calculator to do the math
4. Returns a structured answer with confidence level

---

## Tech Stack

| Component | Technology |
|---|---|
| LLM | Qwen2.5 32B via Ollama |
| Agent Framework | LangChain + LangGraph |
| Web Search | DuckDuckGo Search API |
| Knowledge Base | Wikipedia API |
| Calculator | Python eval() |
| Memory | In-session conversation history |
| Interface | Python CLI |

---

## Why Local?

- Zero API costs — runs on your own GPU
- Full privacy — no data sent to the cloud
- No rate limits — use it as much as you want
- No subscription — completely free forever

---

## Hardware Used

- CPU: AMD Ryzen 7 9800X3D
- GPU: NVIDIA RTX 5080 (16GB VRAM)
- RAM: 32GB DDR5
- OS: Windows 11

---

## Installation

**1. Install Ollama**
Download from https://ollama.com/download

**2. Pull the model**

ollama pull qwen2.5:32b

**3. Install Python dependencies**

py -m pip install langchain langchain-community langchain-ollama langgraph duckduckgo-search wikipedia ddgs

**4. Run ARIA**

py agent.py

---

## How to Use

- Type any research question and press Enter
- Type `memory` to see everything ARIA remembers this session
- Type `exit` to end the session and save the conversation log

---

## What I Learned Building This

- How large language models work locally via Ollama
- What an AI agent is and how the ReAct reasoning pattern works
- How tool selection works — the agent decides which tool to use automatically
- Prompt engineering and system prompts
- LangChain and LangGraph frameworks
- Conversation memory management
- Python basics — functions, loops, lists, packages

---

## Project Status

Week 1 - Environment setup and local LLM running
Week 2 - Agent built with web search tool
Week 3 - Wikipedia, calculator, memory and verbose mode added
Week 4 - Polish, logging, README and GitHub deployment

---

Built by Shah | May 2026