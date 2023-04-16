const path = require('path'); // import path module
const fs = require('fs'); // import fs module
const uuid = require('../helpers/uuid'); // import uuid helper
const router = require('express').Router(); // import express router

const dbPath = path.join(__dirname, '../db/db.json'); // set path to db.json

// GET route to get all notes
router.get('/notes', (req, res) => {
  // GET route to get all notes
  fs.readFile(dbPath, (err, data) => {
    // read db.json
    if (err) throw err; // throw error if error
    {
      res.json(JSON.parse(data)); // send response
    }
  });
});
router.post('/notes', (req, res) => {
  // POST route to add a new note
  const { title, text } = req.body; // destructure title and text from request body
  const newNote = { title, text, id: uuid() }; // create new note object
  fs.readFile(dbPath, (err, data) => {
    // read db.json
    if (err) throw err;

    const notes = JSON.parse(data); // parse data
    notes.push(newNote); // push new note to notes array

    fs.writeFile(dbPath, JSON.stringify(notes), (err) => {
      // write new note to db.json
      if (err) throw err; // throw error if error
      const response = res.json({ status: 'success', body: newNote }); // create response
      res.json(response); // send response
    });
  });
});

module.exports = router; // export router
