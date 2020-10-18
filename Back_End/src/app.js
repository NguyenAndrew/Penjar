const axios = require('axios');
const path = require('path');
const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet());

app.get('/health', (req, res) => {
    res.status(200).send("Healthy!");
    axios.post(`${host}/axios-test`);
});

app.post('/axios-test', (req, res) => {
    console.log("You have succesfully made an axios call!");
});

if (process.env.NODE_ENV === 'cloud') {
    console.log("Server is running on the cloud");

    const frontEndBuildFolder = "front_end/build";

    console.log(path.join(__dirname, '../..', frontEndBuildFolder));

    app.use(express.static(path.join(__dirname, '../..', frontEndBuildFolder)));

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../..', frontEndBuildFolder, "index.html"));
    });
} else {
    console.log("Server is not running on the cloud");
}

const nodeEnvToHostMap = {
    'local': 'http://localhost:3001',
    'cloud': 'http://localhost:8000'
}
const host = nodeEnvToHostMap[process.env.NODE_ENV];

module.exports = app;