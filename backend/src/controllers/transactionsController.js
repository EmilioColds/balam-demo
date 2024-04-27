const axios = require('axios');

exports.getTransferById = async (req, res) => {
    const { transferId } = req.params;
    try {
      const response = await axios.get(`https://api.balampay.com/sandbox/transfers/${transferId}`, {
        headers: { 'Authorization': `Bearer ${process.env.API_KEY}` }
      });
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  exports.createTransfer = async (req, res) => {
    try {
        const response = await axios.post('https://api.balampay.com/sandbox/transfers', req.body, {
            headers: { 'Authorization': `Bearer ${process.env.API_KEY}` }
          });
          res.json(response.data);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };