const SayaTubeVideo = require("./sayaTubeVideo");
const SayaTubeUser = require("./sayaTubeUser");

function main() {
  const username = "Samud";
  const user = new SayaTubeUser(username);

  const judulFilm = [
    "Review Film Jarwo oleh Samudra",
    "Review Film Tom n Jerry oleh Samudra",
    "Review Film Upin Ipin oleh Samudra",
    "Review Film Anime oleh Samudra",
    "Review Film Naruto Masuk Akatsuki oleh Samudra",
    "Review Film Boruto Uchiha oleh Samudra",
    "Review Film Interstellar oleh Samudra",
    "Review Film Godfather oleh Samudra",
    "Review Film Marvel Rivals oleh Samudra",
    "Review Film Mobil Legends oleh Samudra",
    
  ];

  for (let judul of judulFilm) {
    const video = new SayaTubeVideo(judul);
    video.increasePlayCount(Math.floor(Math.random() * 100000));
    user.addVideo(video);
  }

  console.log("=== Detail Video ===");
  user.uploadedVideos.forEach((video) => video.printVideoDetails());

  console.log("\n=== Statistik User ===");
  user.printAllVideoPlaycount();
  console.log(`Total Play Count: ${user.getTotalVideoPlayCount()}`);
}

main();