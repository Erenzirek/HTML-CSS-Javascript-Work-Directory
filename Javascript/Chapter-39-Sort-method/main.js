// const values = [54, 55, 44, 124, 548, 488];
// const students = ['Zeynep', 'Ali', 'Veli', 'Ayşe', 'Mehmet', 'Fatma'];

// //const sorting = students.sort();
// const reversed = students.reverse();
// //console.log(sorting);
// console.log(reversed);

const students = [
    {name: 'Ali', point: 457},
    {name: 'Veli', point: 557},
    {name: 'Ayşe', point: 847},
    {name: 'Fatma', point: 877},
    {name: 'Ahmet', point: 717},
    {name: 'Mehmet', point: 559}, 
    {name: 'Zeynep', point: 724},
];

students.sort((a,b) =>{
    if(a.point>b.point){
        return -1;
    }
    else if(a.point<b.point){  
        return 1;
    }
    else
    {
        return 0;
    }
});

console.log(students);