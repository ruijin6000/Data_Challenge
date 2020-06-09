const fs = require('fs');
const randomNum = require('./control/getRandomValue');

/** Data Model Description **/
const DataSize = 10000;
const Data_Column  = "10/1/05 - 10/30/05";
const Rater_Column =  ['A','B','C','D','E'];
const Correct_Answers_3_Label = ["Low","Average", "High"];
const Correct_Answer_5_Label = ["Bad","Okay", "Intermediate", "Great","Exceptional"];
const Rater_Answer_3_Label = ["Low", "Average", "High"];
const Rater_Answer_5_Label =["Bad", "Okay","Intermediate", "Great","Exceptional"];
const Task_ID = "1-10000";

/** Step1 Initialization Random Data **/
 const data = { table: []};
  for (let i= 1; i<=DataSize; i++) {
    data.table.push ({
        Date_Column : `10/${randomNum.getRandomIntInclusive(1,30)}/05`,
        Rater_Column : Rater_Column[Math.floor(Math.random() * Rater_Column.length)],
        Correct_Answers_3_Label : Correct_Answers_3_Label[Math.floor(Math.random() * Correct_Answers_3_Label.length)],
        Correct_Answer_5_Label : Correct_Answer_5_Label[Math.floor(Math.random() * Correct_Answer_5_Label.length)],
        Rater_Answer_3_Label : Rater_Answer_3_Label[Math.floor(Math.random() * Rater_Answer_3_Label.length)],
        Rater_Answer_5_Label : Rater_Answer_5_Label[Math.floor(Math.random() * Rater_Answer_5_Label.length)],
        TASK_ID : i
        });
};

/** Step2 Add extra two columns for agreement **/
  for (let task of data.table) {
      task.Label_Agreement_3 = (task.Correct_Answers_3_Label === task.Rater_Answer_3_Label);
      task.Label_Agreement_5 = (task.Correct_Answer_5_Label === task.Rater_Answer_5_Label);
  }


fs.writeFileSync('data.json', JSON.stringify(data))








