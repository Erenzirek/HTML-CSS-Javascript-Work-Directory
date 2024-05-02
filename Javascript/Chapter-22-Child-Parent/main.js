const content = document.querySelector('section');
console.log(content.children);
console.log(Array.from(content.children));

Array.from(content.children).forEach(element =>
{
    element.classList.add('section-element');
})


const title = document.querySelector('h2');
console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.nextElementSibling.parentElement.children);
