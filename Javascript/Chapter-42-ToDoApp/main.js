const addForm = document.querySelector('.add');
const list = document.querySelector('todos');

const todo = addForm.add.value.trim();
console.log(todo);
// const generateTemplate = todo => {
//     const html=`
//     <li class="box">
//         <span>${todo}</span>
//     </li>
//     `;
//     list.innerHTML+=html;
// }
// addForm.addEventListener('submit', e =>{
//     e.preventDefault();
//     const todo = addForm.add.value.trim();
//     console.log(todo);
// });