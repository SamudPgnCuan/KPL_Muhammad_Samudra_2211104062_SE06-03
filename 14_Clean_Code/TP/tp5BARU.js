// Mengikuti konvensi penamaan PascalCase untuk class dan camelCase untuk method & variabel
class HaloGeneric {
    // Method menggunakan camelCase
    sapaUser(user) {
        console.log(`Halo user ${user}`);
    }
}

// Pembuatan instance
const halo = new HaloGeneric();
halo.sapaUser("Samud");

// Class generic untuk menyimpan data
class DataGeneric {
    // Constructor dengan parameter sesuai nama atribut
    constructor(data) {
        this.data = data;
    }

    // Method menggunakan camelCase
    printData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}

// Deklarasi variabel menggunakan camelCase dan const jika tidak diubah
const nim = "2211104062";
const dataGeneric = new DataGeneric(nim);
dataGeneric.printData();
