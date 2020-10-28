import fs from 'fs';
import path from 'path';

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

export = databaseInfo;