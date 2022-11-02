function playSound(file) {
    let sound = new Audio('assets/' + file)
    if (sound.paused) {
        sound.play();
    } else {
        sound.pause();
    }
    sound.play();
}



function positionElement(element, x, y)
{
    element.style.left = x + "px"
    element.style.top = y + "px"

}


function generateRandomNumber(multiplier) {
    let randomNumber = Math.floor(Math.random() * multiplier)
    return randomNumber;
}

function gameOver() {
    playSound("mario_death.wav");
    let gameOver = document.getElementById('gameover');
    clearInterval(countdown);
    clearInterval(coinCountdown);
    gameOver.style.display = "block";
    isPlaying = false;
}

function collisionDetection(element1, element2) {
    if (element1.x + element1.width >= element2.x &&
        element1.x <= element2.x + element2.width &&
        element1.y + element1.height >= element2.y &&
        element1.y <= element2.y + element2.height) {
        return true;
    } else {
        return false;
    }

}
