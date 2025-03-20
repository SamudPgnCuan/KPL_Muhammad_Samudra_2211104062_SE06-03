class KodeBuah {
    constructor() {
        this.tabelKodeBuah = [
            { namaBuah: "Apel", kodeBuah: "A00" },
            { namaBuah: "Aprikot", kodeBuah: "B00" },
            { namaBuah: "Alpukat", kodeBuah: "C00" },
            { namaBuah: "Pisang", kodeBuah: "D00" },
            { namaBuah: "Paprika", kodeBuah: "E00" },
            { namaBuah: "Blackberry", kodeBuah: "F00" },
            { namaBuah: "Ceri", kodeBuah: "H00" },
            { namaBuah: "Kelapa", kodeBuah: "I00" },
            { namaBuah: "Jagung", kodeBuah: "J00" },
            { namaBuah: "Kurma", kodeBuah: "K00" },
            { namaBuah: "Durian", kodeBuah: "L00" },
            { namaBuah: "Anggur", kodeBuah: "M00" },
            { namaBuah: "Melon", kodeBuah: "N00" },
            { namaBuah: "Semangka", kodeBuah: "O00" },
        ];
    }

    getKodeBuah(namaBuah) {
        const result = this.tabelKodeBuah.find(
            (item) => item.namaBuah === namaBuah
        );
        if (result) {
            return result.kodeBuah;
        } else {
            return "Kode buah tidak ditemukan!";
        }
    }
}

// Main
const kodeBuah = new KodeBuah();

// Contoh pemanggilan method getKodeBuah
console.log("Kode Buah Apel: " + kodeBuah.getKodeBuah("Apel"));
console.log("Kode Buah Aprikot: " + kodeBuah.getKodeBuah("Aprikot"));
console.log("Kode Buah Alpukat: " + kodeBuah.getKodeBuah("Alpukat"));
console.log("Kode Buah Pisang: " + kodeBuah.getKodeBuah("Pisang"));
console.log("Kode Buah Paprika: " + kodeBuah.getKodeBuah("Paprika"));
console.log("Kode Buah Blackberry: " + kodeBuah.getKodeBuah("Blackberry"));
console.log("Kode Buah Ceri: " + kodeBuah.getKodeBuah("Ceri"));
console.log("Kode Buah Kelapa: " + kodeBuah.getKodeBuah("Kelapa"));
console.log("Kode Buah Jagung: " + kodeBuah.getKodeBuah("Jagung"));
console.log("Kode Buah Kurma: " + kodeBuah.getKodeBuah("Kurma"));
console.log("Kode Buah Durian: " + kodeBuah.getKodeBuah("Durian"));
console.log("Kode Buah Anggur: " + kodeBuah.getKodeBuah("Anggur"));
console.log("Kode Buah Melon: " + kodeBuah.getKodeBuah("Melon"));
console.log("Kode Buah Semangka: " + kodeBuah.getKodeBuah("Semangka"));

console.log("Kode Buah Wagyu: " + kodeBuah.getKodeBuah("Wagyu"));