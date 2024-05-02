// const points = [45,57,87,21,84];

// const pointsNew = points.reduce((value,points) => {
//     if(points > 50){
//         value++;
//     }
//     return value;
// },0);

// console.log(pointsNew);

const students = [
    {name: 'Ali', point: 457},
    {name: 'Veli', point: 557},
    {name: 'Ayşe', point: 847},
    {name: 'Fatma', point: 877},
    {name: 'Ahmet', point: 717},
    {name: 'Mehmet', point: 559},
    {name: 'Zeynep', point: 724},
];

const total = students.reduce((value,element) => {
    if(element.name == "Ali"){
        value += element.point;
    }
    return value;
},0);

console.log(total);
