const button = document.querySelector('button');
const ul = document.querySelector('ul');

ul.addEventListener('click',e => {
    // console.log(e);
    // console.log(e.target);
    if(e.target.tagName === 'LI')
    {
        console.log(e);
        e.target.remove();
    }
})
// button.addEventListener('click', () =>
// {
//     console.log('Clicked');
// })

// const elements = document.querySelectorAll('li');
// elements.forEach(element=>{
//     element.addEventListener('click', e => {
//         console.log(e);
//         console.log(e.target);
//         console.log('liste elemanina tiklandi');
//         e.target.style.color = 'blue';
//     })
// })

// const ul = document.querySelector('ul');
// ul.remove();

const elements = document.querySelectorAll('li');
elements.forEach(element=>{
  
        element.addEventListener('click', e => {
        console.log(e.target);
        // e.stopPropagation(); // aynı etikette başka bir yerin çalışmasını engeller
        e.target.remove(); // hedefteki li etiketini kaldır
    })
})

button.addEventListener('click', () =>
{
    const li= document.createElement('li');
    li.textContent='JavaScript';
    ul.append(li); // sonuna ekler
    ul.prepend(li); // başına ekler
})
