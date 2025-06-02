const fs = require('fs');

class Mahasiswa {
  constructor(namaDepan, namaBelakang, nim, fakultas) {
    this.namaDepan = namaDepan;
    this.namaBelakang = namaBelakang;
    this.nim = nim;
    this.fakultas = fakultas;
  }

  static readJSON(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Gagal membaca file:', err);
        return;
      }

      try {
        const jsonData = JSON.parse(data);
        const mahasiswa = new Mahasiswa(
          jsonData.nama.depan,
          jsonData.nama.belakang,
          jsonData.nim,
          jsonData.fakultas
        );

        console.log(`Nama ${mahasiswa.namaDepan} ${mahasiswa.namaBelakang} dengan nim ${mahasiswa.nim} dari fakultas ${mahasiswa.fakultas}`);
      } catch (parseError) {
        console.error('Gagal mem-parsing JSON:', parseError);
      }
    });
  }
}


Mahasiswa.readJSON('tp7_1_2211104062.json');

// ./07_Grammar-Based_Input_Processing_Parsing/TP/tp7_1_2211104062.json