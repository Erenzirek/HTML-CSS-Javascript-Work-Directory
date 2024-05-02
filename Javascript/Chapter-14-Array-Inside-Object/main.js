let myObject = {
    name:'eren',
    id: 'zirekbilek',
    country: 'türkey',
    tutorials: [
        {tutName: 'Math', point: 45},
        {tutName: 'Physics', point: 54},
        {tutName: 'Calculus', point: 57},
    ],
  printLessons()
  {
    console.log(this.tutorials);
    this.tutorials.forEach(element => {
        console.log(element.tutName,element.point);
    });
  }  
}



console.log("is everything okey ? ");

console.log(myObject.printLessons());
