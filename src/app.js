const express = require('express');
const helmet = require('helmet');
const app = express();
const port = 3000;

// Unused variable
let unusedVariable = 'This variable is never used';

// Improper console.log usage
console.log('Server is starting...');

// Missing error handling for route
app.get('/', (req, res) => {
    let user;
    if (user != null) {
        console.log(user.name);
    }
    res.send('Welcome to TaskFlow!');
});

// Handling task routes
app.get('/tasks', (req, res) => {
    res.json({ message: 'List of tasks' });
});

app.disable('x-powered-by');

app.listen(port, () => {
    console.log(`TaskFlow server is running on http://localhost:${port}`);
});