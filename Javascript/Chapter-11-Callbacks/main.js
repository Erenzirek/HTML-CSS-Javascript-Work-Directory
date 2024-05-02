
// const a = (itemCallback) => {
//     let num = 46;
//     itemCallback(num);
// };
// a(function(itemCallback){
//     console.log(itemCallback);
// })


// let students = ['can','eren','elif'];

// students.forEach(function(kisi,index)
// {
//     console.log(kisi,index);
// }
// )`

let students = ['eren','can','zeynep'];

const result = (kisi,index) => {
    console.log(`${kisi},${index}`)
}

students.forEach(result);