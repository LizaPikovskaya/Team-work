const LOCAL_STORAGE_KEY = 'notes-data'

function addNote(note) {
    const notes = getNote();
    notes.push(note)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
}

function getNote() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}

export default { addNote, getNote };