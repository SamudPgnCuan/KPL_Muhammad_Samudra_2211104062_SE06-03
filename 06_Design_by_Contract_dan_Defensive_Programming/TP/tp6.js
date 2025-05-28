class SayaTubeVideo {
    constructor(title) {
        if (!title || typeof title !== 'string' || title.length > 100) {
            throw new Error("Judul harus berupa string yang tidak kosong dan maksimum 100 karakter.");
        }
        
        this.id = Math.floor(10000 + Math.random() * 90000); // menghasilkan ID acak 5 digit
        this.title = title;
        this.playCount = 0;
    }

    IncreasePlayCount(count) {
        if (typeof count !== 'number' || count < 0 || count > 10000000) {
            throw new Error("Jumlah harus berupa angka positif dan kurang dari 10.000.000.");
        }
        
        let newPlayCount = this.playCount + count;
        if (newPlayCount > Number.MAX_SAFE_INTEGER) {
            throw new Error("Terjadi overflow pada jumlah play count!");
        }
        
        this.playCount = newPlayCount;
    }

    PrintVideoDetails() {
        console.log(`ID Video: ${this.id}`);
        console.log(`Judul: ${this.title}`);
        console.log(`Jumlah Play: ${this.playCount}`);
    }
}

// panggil method utama
try {
    let video = new SayaTubeVideo("Tutorial Design By Contract – [Samudra]");
    video.IncreasePlayCount(5000);
    video.PrintVideoDetails();
} catch (error) {
    console.error(error.message);
}

// pengujian prekondisi dan penanganan exception
try {
    let testVideo = new SayaTubeVideo("Pengujian Overflow Video");
    for (let i = 0; i < 1000; i++) { // loop untuk memaksa overflow
        try {
            testVideo.IncreasePlayCount(10000000);
        } catch (error) {
            console.error(`Error pada iterasi ${i}: ${error.message}`);
            break;
        }
    }
    testVideo.PrintVideoDetails();
} catch (error) {
    console.error(error.message);
}