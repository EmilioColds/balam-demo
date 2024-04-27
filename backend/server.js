//require('dotenv').config();
//const path = require('path');
//const express = require('express');
//const axios = require('axios');
//const cors = require('cors');

//const app = express();
//const PORT = process.env.PORT || 3003;

//app.use(cors());
//app.use(express.json());

//app.use(express.static(path.join(__dirname, '..', 'frontend')));

//app.get('/', (req, res) => {
//  res.sendFile(path.join(__dirname, '..', 'frontend', 'views', 'index.html'));
//});

//app.listen(PORT, () => {
//  console.log(`Server is running on http://localhost:${PORT}`);
//});

require('dotenv').config();
const app = require('./src/app'); // Importa la configuración de Express desde app.js

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});