// utils/fileHandler.js
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/todos.json');

function readData() {
  try {
    const data = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('❌ Error reading data:', err.message);
    return [];
  }
}

function writeData(data) {
  try {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('❌ Error writing data:', err.message);
  }
}

module.exports = { readData, writeData };
