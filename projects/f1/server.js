const express = require('express');
const axios   = require('axios');
const cors    = require('cors');

const app  = express();
const PORT = 3000;

app.use(cors());

// GET /schedule/:year  → proxies to Jolpica F1 API (Ergast-compatible replacement)
app.get('/schedule/:year', async (req, res) => {
  const year = req.params.year;

  try {
    const response = await axios.get(
      `https://api.jolpi.ca/ergast/f1/${year}.json?limit=30`,
      { timeout: 8000 }
    );
    res.json(response.data);
  } catch (err) {
    console.error(`[schedule/${year}] fetch failed:`, err.message);
    res.status(502).json({ error: 'Failed to fetch schedule from upstream API.' });
  }
});

// Health check
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`F1 API server running on port ${PORT}`);
});
