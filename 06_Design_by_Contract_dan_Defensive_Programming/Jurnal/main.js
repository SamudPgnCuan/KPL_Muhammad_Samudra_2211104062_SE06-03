const SayaTubeVideo = require("./sayaTubeVideo");
const SayaTubeUser = require("./sayaTubeUser");

const user = new SayaTubeUser("Samud");

for (let i = 1; i <= 10; i++) {
  const video = new SayaTubeVideo(`Review Film Ke-${i} oleh Samudra`);
  video.increasePlayCount(1);
  user.addVideo(video);
}

new SayaTubeVideo("a".repeat(201)); //judul kepanjangan

new SayaTubeUser("a".repeat(101)); //username kepanjangan

user.addVideo(null); //tidak boleh menambah vidio kosong

const failVideo = new SayaTubeVideo("Coba Play Count Besar");
    failVideo.increasePlayCount(25000001);

const overflowVideo = new SayaTubeVideo("Simulasi Overflow");
    for (let index = 0; index < 360287971; index++) {
        overflowVideo.increasePlayCount(25000000);
    }
    user.addVideo(overflowVideo);

console.log("\n=== Daftar Video Samud ===");
user.printAllVideoPlaycount();

console.log("\nTotal Semua Play Count:", user.getTotalVideoPlayCount());