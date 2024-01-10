const express = require('express');
const app = express();
const port = 3000;


// handle SIGINT signal
process.on('SIGINT', function () {
    console.log("\nReceived SIGINT, gracefully shutting down running express server.");
    // some other closing procedures go here
    process.exit(0);
});


// root endpoint
app.get('/', (req, res) => {
    res.send('Hello, Lydia');
});


// start server
app.listen(port, () => {
    console.log(`Express server is running on http://localhost:${port}`);
});