class Penjumlahan {
    JumlahTigaAngka(a, b, c) {
      let hasil = a + b + c;
      return hasil;
    }
  }
  
  // NIM: 2211104062
  // Tiga input angka: 22, 11, 10
  // NIM berakhiran 9; tipe data float
  
  const angka1 = parseFloat(22.0);
  const angka2 = parseFloat(11.0);
  const angka3 = parseFloat(10.0);
  
  const penjumlahan = new Penjumlahan();
  const hasil = penjumlahan.JumlahTigaAngka(angka1, angka2, angka3);
  
  console.log(`Hasil penjumlahan: ${hasil}`);

  