const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'data');
const filePath = path.join(dirPath, 'shoppingList.json');

// Create directory if it doesn't exist
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// Create file if it doesn't exist
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
}

// Function to read the shopping list
function readShoppingList() {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

// Function to write to the shopping list
function writeShoppingList(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

module.exports = { readShoppingList, writeShoppingList };
