# JURNAL MODUL 6
### Nama: Muhammad Samudra
### NIM: 2211104062

---

### Commit Pertama

`sayaTubeVideo.js`

```js
class SayaTubeVideo {
  constructor(title) {
    if (!title || typeof title !== "string" || title.length > 100) {
      throw new Error("Judul video harus string dan maksimal 100 karakter.");
    }

    this.id = this.#generateRandomId();
    this.title = title;
    this.playCount = 0;
  }

  #generateRandomId() {
    return Math.floor(10000 + Math.random() * 90000);
  }

  increasePlayCount(count) {
    if (typeof count !== "number" || count <= 0 || count > 10000000) {
      throw new Error(
        "Penambahan playCount harus antara 1 sampai 10.000.000."
      );
    }

    this.playCount += count;
  }

  printVideoDetails() {
    console.log(`ID: ${this.id}`);
    console.log(`Title: ${this.title}`);
    console.log(`Play Count: ${this.playCount}`);
  }
}

module.exports = SayaTubeVideo;

```

`sayaTubeVideo` berfungsi untuk menyimpan informasi video seperti id, title, dan play count. id dibuat dengan menambahkan 10000 dengan math.random()*90000 untuk mendapatkan bilangan acak sepanjang 5 digit. Di class ini views (playCount) diisi nilai 0 dan terdapat method untuk menambahkan views. Views ditambahkan di `main.js`

`sayaTubeUser.js`

```js
const SayaTubeVideo = require("./sayaTubeVideo");

class SayaTubeUser {
  constructor(username) {
    if (!username || typeof username !== "string" || username.length > 100) {
      throw new Error("Username harus string dan maksimal 100 karakter.");
    }

    this.username = username;
    this.uploadedVideos = [];
  }

  addVideo(video) {
    if (!(video instanceof SayaTubeVideo)) {
      throw new Error(
        "Hanya objek dari kelas SayaTubeVideo yang bisa ditambahkan."
      );
    }

    this.uploadedVideos.push(video);
  }

  getTotalVideoPlayCount() {
    return this.uploadedVideos.reduce(
      (total, video) => total + video.playCount,
      0
    );
  }

  printAllVideoPlaycount() {
    console.log(`User: ${this.username}`);
    this.uploadedVideos.forEach((video, index) => {
      console.log(`Video ${index + 1} judul: ${video.title}`);
    });
  }
}

module.exports = SayaTubeUser;
```

`sayaTubeUser.js` berfungsi untuk menyimpan informasi tentang user, yaitu Username dan list video yang terunggah, dan juga untuk menghitung dan menampilkan total views dari seluruh video yang diunggah.

`main.js`

```js
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
```

Di sini class-class tadi dipanggil dan objek video dibuat dengan diisi data-datanya.


### Commit Kedua



