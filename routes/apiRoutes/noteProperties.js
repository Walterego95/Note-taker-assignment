const fs = require("fs");
const path = require("path");

// function to create new notes...
function createNewNotes(body, notesContent) {
  let notes = body;
  let allNotes = notesContent;
  allNotes.push(notes);
  // update and write to db.json
  fs.writeFileSync(
    path.join(__dirname, '../../db/db.json'),
    JSON.stringify(notesContent, null, 2)
  );
  // return finished code to post route for response...
  return notesContent;
};

// validate new note objects...
function validateNotes(notes) {
  if (!notes.title) {
    return false;
  }
  if (!notes.text) {
    return false;
  }
  if (!notes.id) {
    return false;
  }
  return true;
};

//delete notes by id...
function deleteNotes(id, notesContent) {
  let newNoteContent = notesContent;
  let deletedNotes = id;
  // clear deleted notes from array...
  newNoteContent = newNoteContent.filter(theNote => {
    return theNote.id != deletedNotes;
  })

  // rewrite new note...
  fs.writeFileSync(path.join(__dirname, "../../db/db.json"),
    JSON.stringify(newNoteContent, null, 2));
  return newNoteContent;
}




module.exports = {
  createNewNotes,
  validateNotes,
  deleteNotes,
};