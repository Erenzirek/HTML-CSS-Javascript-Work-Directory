const elements = document.querySelectorAll('li');
const add = document.querySelector('button');
const ul  = document.querySelector('ul');

elements.forEach(element => {
    element.addEventListener('click', e => {
        console.log(e.target);
        e.target.remove();
    })
})


add.addEventListener('click',()=>
{  
    const li= document.createElement('li');
    li.texContent = 'eren';
    ul.append(li);
})