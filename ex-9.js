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