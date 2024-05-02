
const content = document.querySelectorAll('p');

content.forEach(element => {
    if(element.textContent.includes('error'))
    {
        element.classList.add('error');
    }
    if(element.textContent.includes('success'))
    {
        element.classList.add('success');
    }

});