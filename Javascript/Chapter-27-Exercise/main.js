const click = document.querySelector('button');
const content = document.querySelector('.content');
const close = document.querySelector('.popup-close')



click.addEventListener('click', ()=>{
    content.style.display = 'block';
})

close.addEventListener('click', ()=>{
    content.style.display = 'none';
})

content.addEventListener('click', e => {
    if(e.target.className === 'content'){
    content.style.display = 'none';
    }
})