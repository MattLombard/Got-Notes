const path = require('path'); // require path module
const router = require('express').Router(); // require express router

// GET route for notes
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html')); // send notes.html
});

// GET route for index
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html')); // send index.html
});

module.exports = router;
