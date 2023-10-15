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
<<<<<<< HEAD
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
=======
let averageScore = 0;
let sumScore = 0;
let score =[];
let hightScore = 0;
let lowScore = 0;
for (let student in studentsScore){
  console.log("\nStudent Name: "+ student +"\nScore: "+ studentsScore[student]);
  sumScore = studentsScore[student] + sumScore; //ผลรวมคะแนน
  averageScore = (sumScore/6); //6 = จำนวนนักเรียน
  console.log("Sum student Score "+ sumScore +"\n"+"...........");
  score.push(studentsScore[student]);
};
console.log("\n\nAverage score is "+ averageScore); //Average score is 56.333333333333336\
hightScore = Math.max(score); //89
lowScore = Math.min(score); //10
console.log("Hightest Scroe: " + hightScore); //aray hightScore [10,80,52,67,89,10]
console.log("Lowest Scroe: " + lowScore); //aray lowest [10,80,52,67,89,10]
//console.log(" has the highest score, which is "+ Math.max(hightScore) + " points.");
//console.log(" has lowest score, which is " + Math.min(lowScore) + " points.");
>>>>>>> earth
