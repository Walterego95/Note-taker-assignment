const fs = require('fs');
const path = require('path');
const { findById, createNewNote, validateNote } = require('./notesfx');
const router = require('express').Router();
//unique id to objects...
var getUid = require('get-uid');

//data to manipulate...
const  notesArray  = require('../../db/db.json');

//get all notes...
router.get('/data', (req, res) => {
  let allNotes = fs.readFileSync(path.join(__dirname, "../../db/db.json"));
  allNotes = JSON.parse(allNotes)
  res.json(allNotes)
});

//get note by id...
router.delete('/data/:id', (req, res) => {
  let id = req.params.id;
  let newArray = fs.readFileSync(path.join(__dirname, "../../db/db.json"));
  newArray = JSON.parse(newArray);
  console.log(newArray);
  let result = findById(id, newArray);
  res.json(result);
});

//make new note...
router.post('/data', (req, res) => {
  
  req.body.id = getUid();
  
  //error 400...
  if (!validateNote(req.body)) {
    res.status(400).send('The note is not properly formatted.');
  } else {
    
    //add note to json file and notesArray...
    const note = createNewNote(req.body, notesArray);

    res.json(note);
  }
});

module.exports = router;

