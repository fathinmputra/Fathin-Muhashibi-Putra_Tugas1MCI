/*
No. 2
File Kedua :
File kedua tampilkan hasil perhitungan berikut menggunakan modul dari file pertama : 4000 / 2 + 25 - 2
*/

const { pertambahan, pengurangan, perkalian, pembagian } = require('./fungsiAritmatika.js');

// 4000 / 2 + 25 - 2
// (4000 / 2) + (25 - 2)
const hasil = pertambahan(pembagian(4000, 2), pengurangan(25, 2));
console.log(hasil); //2023
