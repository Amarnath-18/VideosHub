/* eslint-disable no-undef */
import express from 'express'
import axios from 'axios';
import cors from 'cors'
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/api/suggestions', async (req, res) => {
  const query = req.query.q;
  
  try {
    const response = await axios.get(
      `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    res.status(500).json({ error: 'Failed to fetch suggestions' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});