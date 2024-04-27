require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const ratesRoutes = require('./routes/ratesRoutes');
const transactionsRoutes = require('./routes/transactionsRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', '..', 'frontend')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'views', 'index.html'));
  });

app.use('/api/rates', ratesRoutes);
app.use('/api/transactions', transactionsRoutes);

app.use((req, res, next) => {
    res.status(404).send('Página no encontrada');
});

module.exports = app;