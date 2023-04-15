import localStorageAPI from "./localStorageAPI";
import refs from "./refs";

export function renderNotes() {
    const markup = localStorageAPI.getNote().map(item => {
        return `
        <li class="task-list-item">
        <button class="task-list-item-btn" id="${item.id}">Удалить</button>
        <h3>${item.taskName}</h3>
        <p>${item.taskText}</p>
        </li>
        `
    }).join('');

    refs.list.insertAdjacentHTML("beforeend", markup);
}