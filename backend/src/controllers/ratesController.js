const axios = require('axios');

exports.getQuoteById = async (req, res) => {
    const { quoteId } = req.params;
    try {
      const response = await axios.get(`https://api.balampay.com/sandbox/quotes/${quoteId}`, {
        headers: { 'Authorization': `Bearer ${process.env.API_KEY}` }
      });
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  exports.createQuote = async (req, res) => {
    try {
      const response = await axios.post('https://api.balampay.com/sandbox/quotes', req.body, {
        headers: { 'Authorization': `Bearer ${process.env.API_KEY}` }
      });
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };