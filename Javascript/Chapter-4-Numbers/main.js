let gun = 13;
let ay = 8; // 8 sayısını 08 olarak değil, sadece 8 olarak tanımlayın
let yil = 1999; // Türkçe karakterleri kullanmadan "yil" olarak tanımlayın

console.log(gun, ay, yil);
console.log("Eren " + gun + "/" + ay + "/" + yil + " tarihinde doğmuştur");

gun = 29;
console.log(gun);

const car = 45;
console.log("car = " + car);

let ad = "Eren";
let soyad = "Zirekbilek"; // Soyadı doğru yazınız (büyük-küçük harf duyarlılığına dikkat edin)
let result = ad + " " + soyad; // Boşluk ekleyerek ad ve soyadı ayırın

console.log(result);
console.log(result[0]); // İlk karakteri almak için doğru yöntem
console.log(result.length); // String uzunluğunu ölçmek için length özelliğini kullanın
console.log(ad);
console.log(ad.toUpperCase()); // String'i büyük harflerle yazdırmak için toUpperCase() metodunu kullanın

let nameSurname = "ErenZirekbilek";
let son = nameSurname.lastIndexOf('i'); // 'lastIndexOf' fonksiyonunu doğru kullanın
console.log(son); // 'i' harfinin son geçtiği indeksi yazdırın

let slice = nameSurname.slice(1,4);
console.log(slice);

let replace = nameSurname.replace('n','Z');
console.log(replace);
;