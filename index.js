
buttonColours = ["red", "blue", "green", "yellow"];
gamePattern = [];
userClickedPattern = [];

function playSound(colorName) {
    let audio = new Audio("sounds/" + colorName+ ".mp3")
    audio.play();
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
});

//   console.log(userClickedPattern);


function nextSequence() { 
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    
}

$("#start-btn").click( function() {
        nextSequence();
    });







// nextSequence();
