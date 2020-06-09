const db = require('./model/auth_login');

const data = require('./data.json');
for(let item of data.table) {
    console.log(item['Date_Column']);
    const Date_Column =item['Date_Column'];
    const Rater_Column =item['Rater_Column'];
    const Correct_Answers_3_Label =item['Correct_Answers_3_Label'];
    const Correct_Answer_5_Label =item['Correct_Answer_5_Label'];
    const Rater_Answer_3_Label =item['Rater_Answer_3_Label'];
    const Rater_Answer_5_Label =item['Rater_Answer_5_Label'];
    const TASK_ID = item['TASK_ID'];
    const Label_Agreement_3= item['Label_Agreement_3'];
    const Label_Agreement_5= item['Label_Agreement_5'];
    db.execute('INSERT INTO rater_data(Date_Column,Rater_Column,' +
        'Correct_Answers_3_Label,Correct_Answer_5_Label,' +
        'Rater_Answer_3_Label,Rater_Answer_5_Label,TASK_ID,' +
        'Label_Agreement_3,Label_Agreement_5) VALUE(?,?,?,?,?,?,?,?,?)',
        [Date_Column,Rater_Column,Correct_Answers_3_Label,Correct_Answer_5_Label,Rater_Answer_3_Label,Rater_Answer_5_Label
            ,TASK_ID,Label_Agreement_3,Label_Agreement_5]).then(result=> {
        console.log(result)
    }).catch(err=> {
        console.log(err);
    })
}