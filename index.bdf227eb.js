!function(){var t={form:document.querySelector("#task-form"),list:document.querySelector("#task-list")},n="notes-data";function e(){return JSON.parse(localStorage.getItem(n))||[]}var a,o={addNote:function(t){var a=e();a.push(t),localStorage.setItem(n,JSON.stringify(a))},getNote:e};function i(t){var n={id:Date.now()};return new FormData(t.currentTarget).forEach((function(t,e){n[e]=t})),n}t.form.addEventListener("submit",(function(n){var e,a,s,c,r;n.preventDefault(),o.addNote(i(n)),e=i(n),a=e.id,s=e.taskText,c=e.taskName,r='\n    <li class="task-list-item">\n    <button class="task-list-item-btn" id="'.concat(a,'">Удалить</button>\n    <h3>').concat(c,"</h3>\n    <p>").concat(s,"</p>\n    </li>\n    "),t.list.insertAdjacentHTML("beforeend",r)})),a=o.getNote().map((function(t){return'\n        <li class="task-list-item">\n        <button class="task-list-item-btn" id="'.concat(t.id,'">Удалить</button>\n        <h3>').concat(t.taskName,"</h3>\n        <p>").concat(t.taskText,"</p>\n        </li>\n        ")})).join(""),t.list.insertAdjacentHTML("beforeend",a)}();
//# sourceMappingURL=index.bdf227eb.js.map