
let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

function playSound(colorName) {
    let colorSound = new Audio("sounds/" + colorName+ ".mp3")
    colorSound.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(() => {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}


$(".btn").click( function() {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour)
    checkAnswer(userClickedPattern.length-1);
});

//   console.log(userClickedPattern);

function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        // console.log("Success");
        if(userClickedPattern.length === gamePattern.length) { //check if they completed the sequence
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        let wrongSound = new Audio("sounds/wrong.mp3")
        wrongSound.play();
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").html("<h1>Game Over, Press <button id='start-over-btn'><i class='fa-solid fa-play fa-4x'></i></button> to Restart<h1>")
        // startOver();
        $("#start-over-btn").click(function() {
            level = 0;
            gamePattern = [];
            nextSequence();
        });
        // console.log("Wrong");
    }
}


function nextSequence() { 
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    level++;
    $("#level-title").text("Level " + level);
    userClickedPattern = [];
}


//start the game
$("#start-btn").click(function() {
        $("#level-title").text("Level " + level);
        nextSequence();
    });

