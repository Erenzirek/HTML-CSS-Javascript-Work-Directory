const students = ['Zeynep', 'Ali', 'Veli', 'Ayşe', 'Mehmet', 'Fatma'];
const values = [54, 55, 44, 124, 548, 488];

const find = values.find((element, index) => {
    if (element > 57) {
        return (element);
    }
});


console.log(find);
