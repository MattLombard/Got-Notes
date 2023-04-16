const express = require('express'); // import express
const app = express(); // create express app

const PORT = process.env.PORT || 3003; // set port to 3003 or environment variable for heroku

app.use(express.json()); // set up middleware to parse incoming JSON data
app.use(express.urlencoded({ extended: true })); // parse incoming URL encoded data
app.use(express.static('public')); // serve static files from public folder

const notesRoutes = require('./routes/notes'); // import notes routes
const indexRoutes = require('./routes/index'); // import index routes

app.use('/api', notesRoutes); // use notes routes
app.use('/', indexRoutes); // use index routes

app.listen(PORT, () => {
  // start server
  console.log(`API server now on port ${PORT}!`);
});
