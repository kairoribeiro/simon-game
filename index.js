
gamePattern = [];
buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() { 
    let randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

let randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);


console.log(gamePattern);
