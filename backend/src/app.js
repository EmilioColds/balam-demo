require('dotenv').config();
const express = require('express');
const cors = require('cors');
const ratesRoutes = require('./routes/ratesRoutes');
const transactionsRoutes = require('./routes/transactionsRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/rates', ratesRoutes);
app.use('/api/transactions', transactionsRoutes);

app.use((req, res, next) => {
    res.status(404).send('Página no encontrada');
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;