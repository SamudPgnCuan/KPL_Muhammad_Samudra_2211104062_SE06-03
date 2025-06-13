// userManager.js
const fs = require("fs");
const crypto = require("crypto");

const file = "users.json";

// Utility: hash password
function hashPassword(password) {
    return crypto.createHash("sha256").update(password).digest("hex");
}

// Validasi input
function isValidUsername(username) {
    return /^[a-zA-Z]{3,20}$/.test(username); // hanya huruf, 3-20 karakter
}

function isValidPassword(password, username) {
    const minLength = 8;
    const specialChar = /[!@#$%^&*]/;
    return (
        password.length >= minLength &&
        specialChar.test(password) &&
        !password.includes(username)
    );
}

function readUsers() {
    if (!fs.existsSync(file)) return [];
    const content = fs.readFileSync(file, "utf-8");
    return JSON.parse(content);
}

function writeUsers(users) {
    fs.writeFileSync(file, JSON.stringify(users, null, 2));
}

// Fungsi registrasi
function registerUser(username, password) {
    if (!isValidUsername(username)) {
        console.log("Username harus huruf ASCII (3-20 karakter).");
        return;
    }
    if (!isValidPassword(password, username)) {
        console.log("Password harus minimal 8 karakter, ada simbol, dan tidak mengandung username.");
        return;
    }

    const users = readUsers();
    if (users.find(u => u.username === username)) {
        console.log("Username sudah terdaftar.");
        return;
    }

    const hashed = hashPassword(password);
    users.push({ username, password: hashed });
    writeUsers(users);
    console.log("Registrasi berhasil.");
}

// Fungsi login
function loginUser(username, password) {
    const users = readUsers();
    const hashed = hashPassword(password);
    const user = users.find(u => u.username === username && u.password === hashed);
    if (user) {
        console.log("Login berhasil.");
    } else {
        console.log("Login gagal. Username atau password salah.");
    }
}

module.exports = { registerUser, loginUser };
