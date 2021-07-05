//require router to display and send files with path...
const router = require('express').Router();
const path = require('path');

//create html routes...
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

//create notes routes...
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

//create html routes...
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});
module.exports = router;