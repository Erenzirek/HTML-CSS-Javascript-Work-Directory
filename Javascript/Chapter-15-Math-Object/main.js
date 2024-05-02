console.log(Math); // Math nesnesini konsola yazdırır
console.log(Math.PI); // Pi sayısını (π) konsola yazdırır

let value = 4.75;

console.log(Math.round(value)); // 5 (yakına yuvarlar)
console.log(Math.floor(value)); // 4 (aşağıya yuvarlar)
console.log(Math.ceil(value)); // 5 (yukarıya yuvarlar)
console.log(Math.trunc(value)); // 4 (tam kısmı alır, virgülden sonrasını atar)

const randomNum = Math.random(); // 0 ile 1 arasında rastgele bir sayı üretir

console.log(randomNum); // Rastgele sayıyı konsola yazdırır
console.log(Math.round(randomNum*100));