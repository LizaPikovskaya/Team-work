var t={form:document.querySelector("#task-form"),list:document.querySelector("#task-list")};var e={addNote:function(t){const e=JSON.parse(localStorage.getItem("notes-data"))||[];e.push(t),localStorage.setItem("notes-data",JSON.stringify(e))}};function o(t){const e={id:Date.now()};return new FormData(t.currentTarget).forEach(((t,o)=>{e[o]=t})),e}t.form.addEventListener("submit",(function(t){t.preventDefault(),e.addNote(o(t))}));
//# sourceMappingURL=index.08b52b3c.js.map
