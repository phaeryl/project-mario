
obstacleCountdown = setInterval(function () {
    if(isPlaying)
{
    let randomNumber = generateRandomNumber(4)
    if(randomNumber == 0 && obstacle.x > 0)
    {
        xPositionObstacle -=50
        obstacle.style.left = xPositionObstacle + "px";
    }

    if(randomNumber == 1 && obstacle.x < maxWidth)
    {
        xPositionObstacle +=50
        obstacle.style.left = xPositionObstacle + "px";
    }

    if(randomNumber == 2 && obstacle.y > 0)
    {
        yPositionObstacle -=50
        obstacle.style.top = yPositionObstacle + "px";
    }

    if(randomNumber == 3 && obstacle.y < maxHeight)
    {

        yPositionObstacle +=50  
        obstacle.style.top = yPositionObstacle + "px";
    }
}
    
}, 250)
obstacleCollision = setInterval(function () {
    if (collisionDetection(mario, obstacle)) {
        gameOver();
        clearInterval(obstacleCollision);

    }

}, 100);

