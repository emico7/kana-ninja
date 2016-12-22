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

var letters = [
    new letter("あ", "1_a"),
    new letter("い", "2_i"),
    new letter("う", "3_u"),
    new letter("え", "4_e"),
    new letter("お", "5_o")
];

var currentQuestion = new Question("assets/images/house.jpg", [letters[1], letters[3]], letters);

//
//Template for letter buttons
//
var buildLetterButtonTemplate = function(letter, index) {
    var template = '<div class="letter-button" data-index="' + index + '">' + letter.letter + '</div>'

    return $(template)
};


// //Set a correct answer
// var correctAnswer = ['い', 'え'];

//Create user's answer
var userAnswer = [];

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

$(document).ready(function() {
    console.log("Current answer: " + currentQuestion.answer);

    setQuestionImage();
    createLetterButtons();

    var $currentLetter = $('.letter-button');

    //
    //Cliking an icon trigger the sound to play
    //
    $currentLetter.click(function() {

        var letterIndex = $(this).data("index");
        var clickedLetter = currentQuestion.letters[letterIndex];
        clickedLetter.audioFile.play();

        userAnswer.push(clickedLetter.letter)
    });

    $('.submit-button').click(function() {
        if (userAnswer === currentQuestion.answer) {
            alert("Correct!!");
        } else {
            alert("Wrong...");
        }
        console.log("User answer: " + userAnswer);
    });
});
