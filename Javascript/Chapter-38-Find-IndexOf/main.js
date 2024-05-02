const values = [54, 55, 44, 124, 548, 488];

const index = values.findIndex(element => {
    if(element==488){
        return(element);
    }
})

console.log(index);

const students = [
    {name: 'Ali', point: 457},
    {name: 'Veli', point: 557},
    {name: 'Ayşe', point: 847},
    {name: 'Fatma', point: 877},
    {name: 'Ahmet', point: 717},
    {name: 'Mehmet', point: 559},
    {name: 'Zeynep', point: 724},
];

const indexName = students.findIndex(element => {
    if(element.name == 'Ali'){
        return(element);
    }
});

console.log(indexName)

