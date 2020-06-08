const fs = require('fs');
const randomNum = require('./control/getRandomValue');

const DataSize = 10000;
const Data_Column  = "10/1/05 - 10/30/05";
const Rater_Column =  ['A','B','C','D','E'];
const Correct_Answers_3_Label = ["Low","Average", "High"];
const Correct_Answer_5_Label = ["Bad","Okay", "Intermediate", "Great","Exceptional"];
const Rater_Answer_3_Label = ["Low", "Average", "High"];
const Rater_Answer_5_Label =["Bad", "Okay","Intermediate", "Great","Exceptional"];
const Task_ID = "1-10000";

const data = {};
  for (let i= 1; i<=DataSize; i++) {
    data["Task_ID_"+i]= {
        TASK_ID : i,
        Data_Column : `10/${randomNum.getRandomIntInclusive(1,30)}/05`,
        Rater_Column : Rater_Column[Math.floor(Math.random() * Rater_Column.length)],
        Correct_Answers_3_Label : Correct_Answers_3_Label[Math.floor(Math.random() * Correct_Answers_3_Label.length)],
        Correct_Answer_5_Label : Correct_Answer_5_Label[Math.floor(Math.random() * Correct_Answer_5_Label.length)],
        Rater_Answer_3_Label : Rater_Answer_3_Label[Math.floor(Math.random() * Rater_Answer_3_Label.length)],
        Rater_Answer_5_Label : Rater_Answer_5_Label[Math.floor(Math.random() * Rater_Answer_5_Label.length)],}
}

  for (let task in data) {
      data[task].Label_Agreement_3 = (data[task].Correct_Answers_3_Label === data[task].Rater_Answer_3_Label);
      data[task].Label_Agreement_5 = (data[task].Correct_Answer_5_Label === data[task].Rater_Answer_5_Label);
  }

console.log(data);
fs.writeFileSync('data', JSON.stringify(data))

