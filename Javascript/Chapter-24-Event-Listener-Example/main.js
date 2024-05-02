const button = document.querySelectorAll('box');
console.log(button);

button.forEach(element => {
    element.addEventListener('click', e => {
        e.target.style.color='blue'
    })
});





