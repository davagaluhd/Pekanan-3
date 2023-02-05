const prompt = require('prompt-sync')({sigint: true});

const nilai = prompt('Masukan nilai: ');
var hasil;

if (nilai%2==0) {
    hasil = Math.sqrt(nilai);
    console.log("Hasil akar pangkat 2 dari", + nilai, "adalah =", + hasil);
}
else if (nilai < 0){
    console.log("Tidak bisa input bilangan negatif");
} else{
    console.log("Tidak bisa input bilangan ganjil");
}