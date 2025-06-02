const fs = require('fs');

class CourseReader {
  static readJson(filePath) {
    try {
      const data = fs.readFileSync(filePath, 'utf-8');
      const jsonData = JSON.parse(data);
      
      const courses = jsonData.courses;
      console.log("Daftar mata kuliah yang diambil:");
      courses.forEach((course, index) => {
        console.log(`MK ${index + 1} ${course.code} - ${course.name}`);
      });
    } catch (err) {
      console.error("Gagal membaca atau memproses file JSON:", err.message);
    }
  }
}

CourseReader.readJson('./07_Grammar-Based_Input_Processing_Parsing/TP/tp7_2_2211104062.json');

// ./07_Grammar-Based_Input_Processing_Parsing/TP/tp7_2_2211104062.json