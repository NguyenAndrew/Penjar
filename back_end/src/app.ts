import axios from 'axios';
import path from 'path';
import express, { Request, Response } from 'express';
import fs from 'fs';
import helmet from 'helmet';

const app = express();

app.use(helmet());

if (process.env.NODE_ENV === undefined) {
    throw new Error("Node Env must be defined");
}
if (process.env.NODE_ENV !== 'local' && process.env.NODE_ENV !== 'cloud') {
    throw new Error("Node Env must be either 'local' or 'cloud'");
}
const nodeEnv: 'local' | 'cloud' = process.env.NODE_ENV;

const host = (() => {
    const nodeEnvToHostMap = {
        'local': 'http://localhost:3001',
        'cloud': 'http://localhost:8000'
    }

    return nodeEnvToHostMap[nodeEnv];
})();

const databaseInfo: { [key: string]: string }  = (() => {
    if (fs.existsSync(path.join(__dirname, 'database.json'))) {
        console.log('database.json has been found. Grabbing information from json');
        return JSON.parse(fs.readFileSync(path.join(__dirname, 'database.json'), 'utf8'));
    } else {
        console.log('No database.json found. Grabbing database information from env variables');
        // Insert database information here
        return {};
    }
})();
if (databaseInfo === undefined) {
    throw new Error('databaseInfo should not be undefined');
}

app.get('/health', (req: Request, res: Response) => {
    res.status(200).send("Healthy!");
    axios.post(`${host}/axios-test`);
});

app.post('/axios-test', (req: Request, res: Response) => {
    console.log("You have succesfully made an axios call!");
    res.status(200).send("axios-test completed succesfully!")
});

if (process.env.NODE_ENV === 'cloud') {
    console.log("Server is running on the cloud");

    const frontEndBuildFolder = "front_end/build";

    console.log(path.join(__dirname, '../..', frontEndBuildFolder));

    app.use(express.static(path.join(__dirname, '../..', frontEndBuildFolder)));

    app.get('/', (_req: Request, res: Response) => {
        res.sendFile(path.join(__dirname, '../..', frontEndBuildFolder, "index.html"));
    });
} else {
    console.log("Server is not running on the cloud");
}

export = app;