const fs = require('fs');

class DataMahasiswa {
    constructor(filePath) {
        this.filePath = filePath;
    }

    readJson() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf-8');
            const json = JSON.parse(data);

            console.log("=== Data Mahasiswa ===");
            console.log(`Name      : ${json.firstName} ${json.lastName}`);
            console.log(`Gender    : ${json.gender}`);
            console.log(`Age       : ${json.age}`);
            console.log("Address   :");
            console.log(`   Street : ${json.address.streetAddress}`);
            console.log(`   City   : ${json.address.city}`);
            console.log(`   State  : ${json.address.state}`);
            console.log("Courses   :");

            json.courses.forEach((course, index) => {
                console.log(`   ${index + 1}. [${course.code}] ${course.name}`);
            });
        } catch (err) {
            console.error("Error reading JSON file:", err.message);
        }
    }
}

const reader = new DataMahasiswa('./07_Grammar-Based_Input_Processing_Parsing/Jurnal/jurnal7_1_2211104062.json');
reader.readJson();