const axios = require('axios');
const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet());

app.get('/health', (req, res) => {
    res.status(200).send("Hello World!");
    axios.post('http://localhost:3001/axios-test');
});

app.post('/axios-test', (req, res) => {
    console.log("You have succesfully made an axios call!");
});

module.exports = app;