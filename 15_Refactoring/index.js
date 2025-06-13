const readline = require("readline");
const { registerUser, loginUser } = require("./userManager");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function tampilkanMenu() {
    console.log("\nPilih menu:");
    console.log("1. Registrasi");
    console.log("2. Login");
    console.log("3. Keluar");

    rl.question("Masukkan pilihan: ", function (menu) {
        if (menu === "1") {
            rl.question("Masukkan username: ", function (username) {
                rl.question("Masukkan password: ", function (password) {
                    registerUser(username, password);
                    // Kembali ke menu
                    tampilkanMenu();
                });
            });
        } else if (menu === "2") {
            rl.question("Masukkan username: ", function (username) {
                rl.question("Masukkan password: ", function (password) {
                    loginUser(username, password);
                    // Kembali ke menu
                    tampilkanMenu();
                });
            });
        } else if (menu === "3") {
            console.log("Program selesai. Terima kasih!");
            rl.close();
        } else {
            console.log("Menu tidak tersedia.");
            // Kembali ke menu
            tampilkanMenu();
        }
    });
}

// Jalankan program
tampilkanMenu();
