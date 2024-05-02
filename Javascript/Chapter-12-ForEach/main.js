const printer = document.querySelector('.main');

let myStudents = ['can','eren','burak','elif','tuba'];

let html = ``;

myStudents.forEach(students =>{
    html +=`<li>${students}</li>`
})

console.log(html);

printer.innerHTML=html;