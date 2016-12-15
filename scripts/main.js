// Level 1 – specific set of words/images, go through in order
// Collect words/images, make/find recordings
// Level 2 - randomly choose from level 2 set of words
// Collect words/images, make/find recordings
// Level 3 - randomly choose from level 3 set of words
// Level 4 - randomly choose from level 4 set of words
// Level 5 - randomly choose from level 5 set of words

// $(document).ready(function() {
// });
$(document).ready(function() {
    console.log("loaded");
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
    console.log(sound);
    // play the sound

    sound.play();
});
