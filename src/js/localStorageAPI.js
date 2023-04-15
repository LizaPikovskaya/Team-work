const LOCAL_STORAGE_KEY = 'notes-data'

function addNote(note) {
const notes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
notes.push(note)
localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
}

export default { addNote };