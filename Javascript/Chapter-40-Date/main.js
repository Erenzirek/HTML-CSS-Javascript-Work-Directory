const startDate = new Date('08/15/2018 9:45:00');
const now = new Date();

const diff = now.getTime() - startDate.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
const years = Math.round(days / 365);

console.log('Video çekmeye ' + mins + ' dakika önce başladı');
console.log('Video çekmeye ' + hours + ' saat önce başladı');
console.log('Video çekmeye ' + days + ' gün önce başladı');
console.log('Video çekmeye ' + years + ' yıl önce başladı');

const timestamp = 1627727166269;
console.log(new Date(timestamp));
