// Exercise #9: Classroom Scores

let studentsScore = {
  James: 40,
  Ann: 80,
  Joe: 52,
  Ball: 67,
  Mick: 89,
  Ole: 10,
};

// Start coding here
// 1. หาค่าเฉลี่ยของคะแนนของนักเรียนในห้อง
let totalScore = 0;
let numberOfStudents = 0;

for (let student in studentsScore) {
  totalScore += studentsScore[student];
  numberOfStudents++;
}

let averageScore = totalScore / numberOfStudents;
console.log("Average score is " + averageScore);

// 2. หาชื่อของคนที่ได้คะแนนมากที่สุด
let highestScore = -Infinity;
let highestScoreName = "";

for (let student in studentsScore) {
  if (studentsScore[student] > highestScore) {
    highestScore = studentsScore[student];
    highestScoreName = student;
  }
}

console.log(highestScoreName + " has the highest score, which is " + highestScore + " points.");

// 3. หาชื่อของคนที่ได้คะแนนน้อยที่สุด
let lowestScore = Infinity;
let lowestScoreName = "";

for (let student in studentsScore) {
  if (studentsScore[student] < lowestScore) {
    lowestScore = studentsScore[student];
    lowestScoreName = student;
  }
}

console.log(lowestScoreName + " has lowest score, which is " + lowestScore + " points.");