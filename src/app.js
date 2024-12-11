const express = require('express');
const app = express();
const port = 3000;

// Unused variable
let unusedVariable = 'This variable is never used';

// Improper console.log usage
console.log('Server is starting...');

// Missing error handling for route
app.get('/', (req, res) => {
    let user = undefined;
    console.log(user.name); // This will throw an error if user is undefined
    res.send('Welcome to TaskFlow!');
});

// Handling task routes
app.get('/tasks', (req, res) => {
    res.json({ message: 'List of tasks' });
});

app.listen(port, () => {
    console.log(`TaskFlow server is running on http://localhost:${port}`);
});
