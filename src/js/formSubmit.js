import localStorageAPI from "./localStorageAPI";
import { createNote } from "./createNote";
import { renderNewNode } from "./renderNewNode";

export function formSubmit(e) {
    e.preventDefault();
    localStorageAPI.addNote(createNote(e));
    renderNewNode(createNote(e));
}