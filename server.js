const http = require('http');
const { readShoppingList, writeShoppingList } = require('./fileManager');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const method = req.method;
    const shoppingList = readShoppingList();

    if (parsedUrl.pathname === '/shopping-list' && method === 'GET') {
        // Get all items
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(shoppingList));
    } else if (parsedUrl.pathname === '/shopping-list' && method === 'POST') {
        // Add new item
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const newItem = JSON.parse(body);
            shoppingList.push(newItem);
            writeShoppingList(shoppingList);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(newItem));
        });
    } else if (parsedUrl.pathname.startsWith('/shopping-list/') && (method === 'PUT' || method === 'PATCH')) {
        // Update item
        const id = parseInt(parsedUrl.pathname.split('/')[2]);
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const updatedItem = JSON.parse(body);
            const index = shoppingList.findIndex(item => item.id === id);
            if (index !== -1) {
                shoppingList[index] = { ...shoppingList[index], ...updatedItem };
                writeShoppingList(shoppingList);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(shoppingList[index]));
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Item not found' }));
            }
        });
    } else if (parsedUrl.pathname.startsWith('/shopping-list/') && method === 'DELETE') {
        // Delete item
        const id = parseInt(parsedUrl.pathname.split('/')[2]);
        const newList = shoppingList.filter(item => item.id !== id);
        writeShoppingList(newList);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Item deleted' }));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
