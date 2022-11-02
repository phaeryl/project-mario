
coinCountdown = setInterval(function () {
    coin.style.left = generateRandomNumber(800) + "px";
    coin.style.top = generateRandomNumber(500) + "px";
}, 5000)

coinCollision = setInterval(function () {
    if (collisionDetection(mario, coin)) {
        positionElement(coin, generateRandomNumber(maxWidth), generateRandomNumber(maxHeight))
        score += 1;
        seconds +=3
        timer.innerHTML = "Temps restant: " + seconds;
        scoreElement.innerHTML= "Score: " + score;
        playSound("coin.wav")
        clearInterval(coinCountdown);
    }

}, 100);