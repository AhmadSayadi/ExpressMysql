const express = require('express');
const app = express();


//Routes
const Users = require('./user.routes');



// End Point
app.use('/users/', Users);

module.exports = app;