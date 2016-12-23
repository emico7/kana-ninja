// Level 1 – specific set of words/images, go through in order
// Collect words/images, make/find recordings
// Level 2 - randomly choose from level 2 set of words
// Collect words/images, make/find recordings
// Level 3 - randomly choose from level 3 set of words
// Level 4 - randomly choose from level 4 set of words
// Level 5 - randomly choose from level 5 set of words

// $(document).ready(function() {
// });

// Game object
// score

// Level
// letters
// exercises

// Exercise object
// image
// answer
// letters

function Game(levels) {
    this.levels = levels;
}

function Level(prep, exercise, letters) {
    this.prep = prep;
    this.exercise = exercise;
    this.letters = letters;
}

function Prep(level, letters) {
    this.level = level;
    this.letters = letters;
}

function Exercise(questions) {
    this.questions = questions;
}

function Question(image, answer, letters) {
    this.image = image;
    this.answer = answer;
    this.letters = letters;
}

// var currentExercise = new Exercise("house.jpg",  )

// letter object
// letter
// audio file

function letter(letter, audioFile) {
    this.letter = letter;
    this.audioFile = new buzz.sound("assets/audio/" + audioFile, {
        formats: [ 'm4a' ],
        preload: true
    });
}

// var letters = [
//     new letter("あ", "1_a"),
//     new letter("い", "2_i"),
//     new letter("う", "3_u"),
//     new letter("え", "4_e"),
//     new letter("お", "5_o")
// ];

var letters = [];
var letter1 = new letter("あ", "1_a");
var letter2 = new letter("い", "2_i");
var letter3 = new letter("う", "3_u");
var letter4 = new letter("え", "4_e");
var letter5 = new letter("お", "5_o");

var currentQuestion = new Question("assets/images/house.jpg", [letter2.letter, letter4.letter], [letter1, letter2, letter3, letter4, letter5]);

//
//Template for letter buttons
//
var buildLetterButtonTemplate = function(letter, index) {
    var template = '<div class="letter-button" data-index="' + index + '">' + letter.letter + '</div>'

    return $(template)
};


// //Set a correct answer
// var correctAnswer = ['い', 'え'];

//React acording to a given answer
//store answer

function createLetterButtons() {
    var $letterContainer = $('.letter-container');
    var num = currentQuestion.letters.length;
    for (var i = 0; i < num; i++) {
        var $newLetterButton = buildLetterButtonTemplate(currentQuestion.letters[i], i);
        $letterContainer.append($newLetterButton);
    }
}

function setQuestionImage() {
    var $questionImage = $('.question-image');
    $questionImage.attr("src", currentQuestion.image);
}

//
//function to check equality of 2 arrays
//
function isArraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}


$(document).ready(function() {
    setQuestionImage();
    createLetterButtons();

    var $currentLetter = $('.letter-button');
    var $userAnswer = $('.user-answer');
    //
    //Cliking an icon trigger the sound to play
    //

    var userAnswerArr = [];

    $currentLetter.click(function() {

        var letterIndex = $(this).data("index");
        var clickedLetter = currentQuestion.letters[letterIndex];
        clickedLetter.audioFile.play();

        userAnswerArr.push(clickedLetter.letter)
        $userAnswer.append(clickedLetter.letter);

        // console.log(userAnswerArr === currentQuestion.answer);

    });

    $('.submit-button').click(function() {
        console.log("user: " + userAnswerArr);
        console.log("answer: " + currentQuestion.answer);

        if (isArraysEqual(currentQuestion.answer, userAnswerArr)) {
            alert("Correct!!");
        } else {
            alert("Wrong...");
        }
    });
});
