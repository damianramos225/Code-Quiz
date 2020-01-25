var myQuestions = [
    {
        question: "Hyper Text Markup Language Stand For?",
        answers: {
            a: "JavaScript",
            b: "XHTML",
            c: 'CSS',
            e: 'HTML'
        },
        correctAnswer: 'HTML'
    },
    {
        question: "Which language is used for styling web pages?",
        answers: {
            a: 'HTML',
            b: 'JQuery',
            c: 'CSS',
            e: 'XML'
        },
        correctAnswer: 'CSS'
    },
    {
        question: "Which is not a JavaScript Framework?",
        answers: {
            a: 'HTML',
            b: 'Django',
            c: 'CSS',
            e: 'All'
        },
        correctAnswer: 'CSS'
    },

    {
        question: "Which is used for Connect To Database?",
        answers: {
            a: 'CSS',
            b: 'Django',
            c: 'PHP',
            e: 'All'
        },
        correctAnswer: 'PHP'
    }


];

var quizcontainer = document.getElementById('quiz')
var scorecontainer = document.getElementById('submit')
var submitbutton = document.getElementById('results')
generateQuiz(myQuestions, quizcontainer, scorecontainer, submitbutton);


// document.getElementById("start").addEventListener("click", function );

function generateQuiz(myQuestions, quizcontainer, scorecontainer, submitbutton) {

    function showQuestions(myQuestions, quizContainer) {

        var output = [];
        var answers;


        for (var i = 0; i < myQuestions.length; i++) {

            answers = [];

            for (letter in myQuestions[i].answers) {


                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + letter + ': '
                    + myQuestions[i].answers[letter]
                    + '</label>'
                );
            }


            output.push(
                '<div class="question">' + myQuestions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizcontainer.innerHTML = output.join('');
    }


    function showResults(myQuestions, quizcontainer, scorecontainer) {

        var answerContainers = quizcontainer.querySelectorAll('.answers');

        var userAnswer = '';
        var numCorrect = 0;


        for (var i = 0; i < myQuestions.length; i++) {

            userAnswer = (scorecontainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            if (userAnswer === myQuestions[i].correctAnswer) {

                numCorrect++;

                answerContainers[i].style.color = 'green';
            }
            else {

                answerContainers[i].style.color = 'red';
            }
        }

        scorecontainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
    }


    showQuestions(myQuestions, quizcontainer);


    submitbutton.onclick = function () {
        showResults(myQuestions, quizcontainer, scorecontainer);
    }

}




