// undefined means a variable has been declared but has not yet been assigned a value :

var testVar;
console.log(testVar); //shows undefined
console.log(typeof testVar); //shows undefined

// null is an assignment value. It can be assigned to a variable as a representation of no value :

var testVar = null;
console.log(testVar); //shows null
console.log(typeof testVar); //shows object

console.log(null === undefined) // false (not the same type)
console.log(null == undefined) // true (but the "same value")
console.log(null === null) // true (both type and value are the same)