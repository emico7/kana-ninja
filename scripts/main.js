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

var letters = [];
var letter1 = new letter("あ", "1_a");
var letter2 = new letter("い", "2_i");
var letter3 = new letter("う", "3_u");
var letter4 = new letter("え", "4_e");
var letter5 = new letter("お", "5_o");

$('letter').html(letter);

var currentQuestion = new Question("assets/images/house.jpg", ['い', 'え'], [letter1, letter2, letter3, letter4, letter5])

$(document).ready(function() {
    console.log("loaded");
    // randomly sort the letters
    // for each letter in the question letters array
    // build an html template
    // and insert it into the page
});

var $letter = $('.letter');

$letter.click(function() {
    // read the audio data property
    var audioFileName = $(this).data("audio");

    // create a buzz sound with the audio file
    var sound = new buzz.sound("assets/audio/" + audioFileName, {
        formats: [ 'm4a' ],
        preload: true
    });

    // play the sound

    sound.play();

    console.log(this);

    userAnswer = userAnswer.push($(this).text());
    console.log(userAnswer);
});

//Set a correct answer
var correctAnswer = ['い', 'え'];

//Create user's answer
var userAnswer = [];

//React acording to a given answer
//store answer
