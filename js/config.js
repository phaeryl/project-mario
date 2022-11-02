let isPlaying = true;
let maxWidth = document.documentElement.clientWidth; // Screen's width
let maxHeight = document.documentElement.clientHeight; //Screen's height
console.log(maxHeight)

//Declare elements
let mario = document.getElementById("character"); // Get HTML element by its ID
let coin = document.getElementById("coin");
let obstacle = document.getElementById("obstacle"); 

//Score
let scoreElement = document.getElementById("score");
let score = 0;
positionElement(coin, generateRandomNumber(maxWidth), generateRandomNumber(maxHeight))
// Function positionElement that uses 3 parameters : HTML element, Horizontal position (X), Vertical position (Y)


//Obstacle
let xPositionObstacle = generateRandomNumber(maxWidth) // Value used for horizontal position
let yPositionObstacle = generateRandomNumber(maxHeight) // Value used for vertical position

obstacle.style.left = xPositionObstacle + "px"; // Position obstacle (goomba) 
obstacle.style.top = yPositionObstacle + "px";

//Coins & Timer
let timer = document.getElementById('timer'); // HTML Element for timer
let seconds = 30  // Timer value
timer.innerHTML = "Temps restant: " + seconds; // Update timer with new value

//Movement
let xPositionMario = 0 // Value used for horizontal position
let yPositionMario = 0 // Value used for vertical position
mario.style.left = xPositionMario + "px"; // Change element's position by xPositionMario pixels
mario.style.top = yPositionMario + "px";

