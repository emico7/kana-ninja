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

function Letter(letter, audioFile) {
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

var letter1 = new Letter("あ", "1_a");
var letter2 = new Letter("い", "2_i");
var letter3 = new Letter("う", "3_u");
var letter4 = new Letter("え", "4_e");
var letter5 = new Letter("お", "5_o");
var letters = [letter1, letter2, letter3, letter4, letter5];

var currentPrep = new Prep(1, letters);

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
    for (var i = 0; i < letters.length; i++) {
        var $newLetterButton = buildLetterButtonTemplate(currentPrep.letters[i], i);
        $letterContainer.append($newLetterButton);
    }
}

$(document).ready(function() {
    createLetterButtons();

    var $currentLetter = $('.letter-button');
    //
    //Cliking an icon trigger the sound to play
    //

    $currentLetter.click(function() {

        var letterIndex = $(this).data("index");
        var clickedLetter = currentPrep.letters[letterIndex];
        clickedLetter.audioFile.play();
    });
});
