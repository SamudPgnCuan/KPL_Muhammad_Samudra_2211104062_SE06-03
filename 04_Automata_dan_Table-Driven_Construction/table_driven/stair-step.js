function getGradeByScore(studentScore) {  
    const grades = ["A", "AB", "B", "BC", "C", "D", "E"];               //notes cs im kinda dumb
    const rangeLimits = [80.0, 70.0, 65.0, 60.0, 50.0, 40.0, 0.0];      //gradeLevel = [0, 1, 2, 3, 4, 5, 6]; grades.length=7;
    const maxGradeLevel = grades.length - 1;                            //rangeLimits[0] = 80.0; rangeLimits[6] = 0.0; 
    let studentGrade = "E";                                             //ngecek mulai dari apakah grade lebih dari 80, bukan dari apakah lebih dari 40
    let gradeLevel = 0;  

    while (studentGrade === "E" && gradeLevel < maxGradeLevel) {  
        if (studentScore > rangeLimits[gradeLevel]) {  
            studentGrade = grades[gradeLevel];  
        }  
        gradeLevel++;  
    }  

    //return grades.length;  
    return studentGrade;
}  

// Example usage:  

console.log(getGradeByScore(85)); // Output: A  
console.log(getGradeByScore(72)); // Output: AB  
console.log(getGradeByScore(66)); // Output: B  
console.log(getGradeByScore(55)); // Output: C  
console.log(getGradeByScore(45)); // Output: D  
console.log(getGradeByScore(30)); // Output: E

