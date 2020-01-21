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




function Quiz(myQuestions); {
    this.score = 0
    this.questions = questions;
    this.questionIndex = 0;
}


