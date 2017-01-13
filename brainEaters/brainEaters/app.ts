//a.The Quiz evaluate() must call evaluate() on each of the Question objects.
//b.The Question evaluate() must return true or false depending on whether the submitted question is correct.
//let count = 0;
//let answersGiven = [];
//let numRight = 0;
//let question = document.getElementById('Question');
//let answers = document.getElementById('answers');
//let done = document.getElementById('submit');
//class Quiz {
//    nextQuestion() {
//        question.innerHTML = ques.questions[count - 1].Q;
//        answers.innerHTML = "";
//        ques.questions[count - 1].A.forEach((value) => {
//            answers.innerHTML += `<input type="radio" name="answers" onClick="isChecked('${value}', '${count}')" value="${value}" > ${value} <br />`;
//        });
//    }
//    evaluate() {
        
//        for (let i = 0; i < answersGiven.length; i++) {
//            if (answersGiven[i].checked === ques.questions[i].C) {
//                numRight++;
//            }
//        }
//        ques.evaluate();
//    }
//};
//let quiz = new Quiz();
//class Question {
//    questions = [{
//        "Q": "What color is the French wine Beaujolais?",
//        "A": ["Red","White","Pink","Purple"],
//        "C": "Red"
//    }, {
//        "Q": "From which cactus is tequila made?",
//        "A": ["Prickly pear", "Agave", "Peyote", "Saguaro"],
//        "C": "Agave"
//    }, {
//        "Q": "What is called a meal in open air?",
//        "A": ["sitting outside", "sitting next to a window", "Picnic", "in a building with huge open doors"],
//        "C": "Picnic"
//    }, {
//        "Q": "What is the most famous Mexican beer?",
//        "A": ["Bush", "Coors", "Miller", "Corona"],
//        "C": "Corona"
//    }, {
//        "Q": "What is Japanese sake made from?",
//        "A": ["Rice", "Grapes", "Fermented Fish", "Cabbage"],
//        "C": "5"
//    }];

//    evaluate() {
//        question.innerHTML = `Quiz completed! <br />you have gotten ${numRight} out of ${count} right`;
//        answers.innerHTML = ``;
//        done.innerHTML = ``;
//    };
//}
//let ques = new Question();
//function isChecked(checked, questionNum) {
//    let ans = { questionNum, checked };

//    if (answersGiven.length === (count - 1) || answersGiven.length < count) {
//        answersGiven.push(ans);
//    } else {
//        answersGiven.splice(count - 1, 1);
//        answersGiven.push(ans);
//    }
//}
//let countUp = function () {
//    count++
//    quiz.nextQuestion();
//    if (ques.questions.length == count) {
//        let done = document.getElementById('submit');
//        done.innerHTML = `<button onClick="quiz.evaluate()">Submit</button>`;
//    }
//}
//countUp();