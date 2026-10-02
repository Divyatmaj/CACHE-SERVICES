const fs = require('fs/promises');
const path = require('path');

const PATH_TO_DB = path.join(__dirname, '..', 'db.json');

async function readData() {
    let data = await fs.readFile(PATH_TO_DB, 'utf-8');
    return JSON.parse(data);
}

// Adding an artificial delay to simulate real life delays
async function delayReadData() {
    await new Promise((resolve) => {
        setTimeout(resolve, 1500);
    });
    return await readData();
}

module.exports = { readData, delayReadData };
