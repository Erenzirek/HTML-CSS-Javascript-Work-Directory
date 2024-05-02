localStorage.setItem('name','Can');
localStorage.setItem('age', 29);

let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
console.log(name);
console.log(age);

localStorage.clear(name,age);
name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(name,age);
