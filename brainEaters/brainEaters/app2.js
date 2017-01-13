//a.The Quiz evaluate() must call evaluate() on each of the Question objects.
//b.The Question evaluate() must return true or false depending on whether the submitted question is correct.
var count = 0;
var numRight = 0;
var question = document.getElementById('Question');
var answers = document.getElementById('answers');
var done = document.getElementById('submit');
var Quiz = (function () {
    function Quiz() {
    }
    Quiz.prototype.nextQuestion = function () {
        console.log(count);
        question.innerHTML = nextQ[count - 1].question;
        answers.innerHTML = "";
        nextQ[count - 1].anwsers.forEach(function (value) {
            answers.innerHTML += "<input type=\"radio\" name=\"answers\" onClick=\"isChecked('" + value + "')\" value=\"" + value + "\" > " + value + " <br />";
        });
    };
    Quiz.prototype.evaluate = function () {
        nextQ.forEach(function (check) {
            check.answeredRight = check.evaluate();
            if (check.answeredRight === true) {
                numRight++;
            }
        });
        question.innerHTML = "Quiz completed! <br />you have gotten " + numRight + " out of " + count + " right";
        answers.innerHTML = "";
        done.innerHTML = "";
    };
    return Quiz;
}());
;
var quiz = new Quiz();
var Question = (function () {
    function Question() {
    }
    Question.prototype.evaluate = function () {
        if (this.answerGiven === this.correct) {
            return true;
        }
        else {
            return false;
        }
    };
    ;
    return Question;
}());
var ques1 = new Question();
ques1.question = "How long is the Great Wall of China?";
ques1.anwsers = new Array("1000 miles", "3000 miles", "4000 miles", "8000 miles", "10000 miles");
ques1.correct = "4000 miles";
var ques2 = new Question();
ques2.question = "In what year did princess diana die?";
ques2.anwsers = new Array("1997", "1998", "1999", "2000", "2001");
ques2.correct = "1997";
var ques3 = new Question();
ques3.question = "Which animal is on the golden Flemish flag?";
ques3.anwsers = new Array("Fish", "Bird", "Cow", "Dog", "Lion");
ques3.correct = "Lion";
var ques4 = new Question();
ques4.question = "How many stars has the American flag got?";
ques4.anwsers = new Array("49", "50", "51", "52", "53");
ques4.correct = "50";
var ques5 = new Question();
ques5.question = "What colour to do you get when you mix red and white?";
ques5.anwsers = new Array("Yello", "Green", "Orange", "Pink", "Black");
ques5.correct = "Pink";
var nextQ = [ques1, ques2, ques3, ques4, ques5];
function isChecked(checked) {
    nextQ[count - 1].answerGiven = checked;
}
var countUp = function () {
    count++;
    quiz.nextQuestion();
    if (nextQ.length == count) {
        var done_1 = document.getElementById('submit');
        done_1.innerHTML = "<button onClick=\"quiz.evaluate()\">Submit</button>";
    }
};
countUp();
//# sourceMappingURL=app2.js.map