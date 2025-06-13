// Class menggunakan PascalCase, method dan variabel camelCase
class Penjumlahan {
    // Method dengan camelCase
    jumlahTigaAngka(a, b, c) {
        const hasil = a + b + c;
        return hasil;
    }
}

// NIM: 2211104062
// Tiga input angka: 22, 11, 10
// NIM berakhiran 9; tipe data float

// Gunakan const dan penamaan sesuai standar
const angka1 = parseFloat(22.0);
const angka2 = parseFloat(11.0);
const angka3 = parseFloat(10.0);

// Buat instance dari class
const penjumlahan = new Penjumlahan();
const hasil = penjumlahan.jumlahTigaAngka(angka1, angka2, angka3);

// Output hasil
console.log(`Hasil penjumlahan: ${hasil}`);
