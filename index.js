const fs = require('fs');
fs.writeFileSync('hello.txt','Hello from Node.js');
fs.writeFileSync('hello.txt','Hello again from Node.js');
const randomNum = require('./getRandomValue');

const DataSize = 10000;
const Data_Column  = "10/1/15 - 10/30/05";
const Rater_Column =  ['A','B','C','D','E'];
const Correct_Answers_3_Label = ["Low","Average", "High"];
const Correct_Answer_5_Label = ["Bad","Okay", "Intermediate", "Great","Exceptional"];
const Rater_Answer_3_Label = ["Low", "Average", "High"];
const Rater_Answer_5_Label =["Bad", "Okay","Intermediate", "Great","Exceptional"];
const Task_ID = "1-10000";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const randomMonth = months[Math.floor(Math.random() * months.length)];

console.log("random month =>", randomMonth);

console.log(randomNum.getRandomIntInclusive(1,30));