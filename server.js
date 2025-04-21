const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

// Route for original "Hello, World!" endpoint
app.get('/', (req, res) => {
  res.status(200).type('text/plain').send('Hello, World!\n');
});

// New route for "Good evening" endpoint
app.get('/evening', (req, res) => {
  res.status(200).type('text/plain').send('Good evening\n');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
