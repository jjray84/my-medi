// Dependencies
const express = require('express');
const path = require('path');

// Sets up the express app
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.static(path.join(__dirname, 'public')));

// Starts the server and will display message in Integrated Terminal
app.listen(PORT, () => {
    console.log('Now listening');
});
