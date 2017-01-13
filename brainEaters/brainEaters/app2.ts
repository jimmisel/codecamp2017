//a.The Quiz evaluate() must call evaluate() on each of the Question objects.
//b.The Question evaluate() must return true or false depending on whether the submitted question is correct.

let count = 0;
let numRight = 0;
let question = document.getElementById('Question');
let answers = document.getElementById('answers');
let done = document.getElementById('submit');
class Quiz {
    nextQuestion() {
        console.log(count);
        question.innerHTML = nextQ[count - 1].question
        answers.innerHTML = "";
        nextQ[count - 1].anwsers.forEach((value) => {
            answers.innerHTML += `<input type="radio" name="answers" onClick="isChecked('${value}')" value="${value}" > ${value} <br />`;
        });
    }
    evaluate() {
        nextQ.forEach((check) => {
            check.answeredRight = check.evaluate();
            if (check.answeredRight === true) {
                numRight++
            }
        });
        question.innerHTML = `Quiz completed! <br />you have gotten ${numRight} out of ${count} right`;
        answers.innerHTML = ``;
        done.innerHTML = ``;
    }
};
let quiz = new Quiz();
class Question {
    question: string;
    anwsers;
    correct: string;
    answerGiven: string;
    answeredRight: boolean;
    evaluate() {
        if (this.answerGiven === this.correct) {
            return true;
        } else {
            return false;
        }
    };
}
let ques1 = new Question();
ques1.question = "How long is the Great Wall of China?";
ques1.anwsers = new Array("1000 miles", "3000 miles", "4000 miles", "8000 miles", "10000 miles");
ques1.correct = "4000 miles";
let ques2 = new Question();
ques2.question = "In what year did princess diana die?";
ques2.anwsers = new Array("1997", "1998", "1999", "2000", "2001");
ques2.correct = "1997";
let ques3 = new Question();
ques3.question = "Which animal is on the golden Flemish flag?";
ques3.anwsers = new Array("Fish", "Bird", "Cow", "Dog", "Lion");
ques3.correct = "Lion";
let ques4 = new Question();
ques4.question = "How many stars has the American flag got?";
ques4.anwsers = new Array("49", "50", "51", "52", "53");
ques4.correct = "50";
let ques5 = new Question();
ques5.question = "What colour to do you get when you mix red and white?";
ques5.anwsers = new Array("Yello", "Green", "Orange", "Pink", "Black");
ques5.correct = "Pink";
let nextQ = [ques1, ques2, ques3, ques4, ques5]

function isChecked(checked) {
    nextQ[count - 1].answerGiven = checked;
}
let countUp = function () {
    count++
    quiz.nextQuestion();
    if (nextQ.length == count) {
        let done = document.getElementById('submit');
        done.innerHTML = `<button onClick="quiz.evaluate()">Submit</button>`;
    }
}
countUp();

