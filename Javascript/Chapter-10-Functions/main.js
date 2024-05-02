const myFunction = (x,y) => {
    console.log('Hello World');
    return(x+y);
}

const result = myFunction(5,5);

console.log(result);


const fatura = (products, vergi) => {
    let sum = 0;
    for (let index = 0; index < products.length; index++) {
        sum += (products[index] + products[index] * vergi);
    }
    return sum;
};

// Fonksiyonu çağırma örneği
let products = [10, 25, 24, 85, 21];
const vergi = 0.18;
let toplamFatura = fatura(products, vergi);
console.log("Toplam Fatura:", toplamFatura);
