const points = [45,57,87,21,84];

const newPoints = points.map(element => {
    if(element > 45)
    {
        return element*5;
    }
    else{
        return element - 20;
    }
})

console.log(newPoints);