// Dependencies
const express = require('express');

//asks app to use express.js and creat4es the variable that runs on the server
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware 
app.use(express.static('public'));

// middleware parseing functions
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//route
require('./routes/apiRoutes')(app);

// handles get request
require('./routes/htmlRoutes')(app);

// listeners
app.listen(PORT, () => {
    console.log('Applistedning at hyyp://localhost:${PORT}')
});
