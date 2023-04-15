export function createNote(e) {
     const obj = {
       id: Date.now(),
     };

     new FormData(e.currentTarget).forEach((value, name) => {
       obj[name] = value;
     });
     return obj
}

