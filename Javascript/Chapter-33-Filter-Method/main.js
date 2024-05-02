const data = [25,12,55,78,45,48,26];

const datas = data.filter(element=>{
    return element > 50 ;
})

console.log(datas);

const isStudentPassed = [
    {student: 'Eren', passed: 'true'},
    {student: 'Kerem', passed: 'false'},
    {student: 'Burak', passed: 'true'},
    {student: 'Yusuf', passed: 'false'},
];

const isPassed = isStudentPassed.filter(element=>{
    return element.passed === 'true';
})

console.log(isPassed);