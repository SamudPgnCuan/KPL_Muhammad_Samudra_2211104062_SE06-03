class KodePos {
    constructor() {
        this.TabelKodePos = [
            { kelurahan: "Batununggal", kodePos: "40266" },
            { kelurahan: "Kujangsari", kodePos: "40287" },
            { kelurahan: "Mengger", kodePos: "40267" },
            { kelurahan: "Wates", kodePos: "40256" },
            { kelurahan: "Cijaura", kodePos: "40287" },
            { kelurahan: "Jatisari", kodePos: "40286" },
            { kelurahan: "Margasari", kodePos: "40286" },
            { kelurahan: "Sekejati", kodePos: "40286" },
            { kelurahan: "Kebonwaru", kodePos: "40272" },
            { kelurahan: "Maleer", kodePos: "40274" },
            { kelurahan: "Samoja", kodePos: "40273" }
        ];
    }

    
    getKodePos(kelurahan) {
        const result = this.TabelKodePos.find(
            (item) => item.kelurahan === kelurahan
        );
        if (result) {
            return result.kodePos;
        } else {
            return "Kode pos tidak ditemukan!";
        }
    }
}


const kodePos = new KodePos(); 

console.log("Kode Pos Batununggal: " + kodePos.getKodePos("Batununggal"));
console.log("Kode Pos Kujangsari: " + kodePos.getKodePos("Kujangsari"));
console.log("Kode Pos Mengger: " + kodePos.getKodePos("Mengger"));
console.log("Kode Pos Wates: " + kodePos.getKodePos("Wates"));
console.log("Kode Pos Cijaura: " + kodePos.getKodePos("Cijaura"));
console.log("Kode Pos Jatisari: " + kodePos.getKodePos("Jatisari"));
console.log("Kode Pos Margasari: " + kodePos.getKodePos("Margasari"));
console.log("Kode Pos Sekejati: " + kodePos.getKodePos("Sekejati"));
console.log("Kode Pos Kebonwaru: " + kodePos.getKodePos("Kebonwaru"));
console.log("Kode Pos Maleer: " + kodePos.getKodePos("Maleer"));
console.log("Kode Pos Samoja: " + kodePos.getKodePos("Samoja"));

console.log("Kode Pos Tokyo " + kodePos.getKodePos("Tokyo")); 