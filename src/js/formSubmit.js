import localStorageAPI from "./localStorageAPI";
import { createNote } from "./createNote";

export function formSubmit(e) {
    e.preventDefault();
localStorageAPI.addNote(createNote(e));
}
