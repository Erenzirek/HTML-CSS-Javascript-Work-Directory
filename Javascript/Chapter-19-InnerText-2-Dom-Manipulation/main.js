// const pvalue = document.querySelectorAll('p');
// pvalue.forEach(element => {
//    console.log(element.innerText);
//    element.innerText += 'New Area'; 
// });

const content = document.querySelector('.contents');
console.log(content.innerHTML);

// content.innerHTML='<h2>Vue JS, React JS, Angular JS </h2>';
content.innerHTML+='<h2>Vue JS, React JS, Angular JS </h2>';

const students = ['eren','mehmet','burak'];
students.forEach(a=>{
    content.innerHTML += `<h2>${a}</h2>`;
})