// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // Setting the Enemy initial location and speed
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // Updates the Enemy location
    this.x += dt*this.speed;
    // Handles collision
    console.log(this.x+" "+this.y);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own Player class
// This class requires an update(), render() and
// a handleInput() method.
// The Player class
var Player = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    //Setting the Player initial location and number of lives
    this.x = x;
    this.y = y;
    this.lives = 3;
    // The image/sprite for our players, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
};

// Update the players's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function() {
    // console.log("UPDATE Player log");
    // Updates the Player location
    console.log(this.x+" "+this.y);
};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    if(this.x >= document.querySelector('canvas').width-100 || this.y >= document.querySelector('canvas').height-200){
        console.log("Out of bounds > canvas");
        this.x = 300;
        this.y = 380;
        alert("Caiuuuu!");
        return false;
    }
    else if(this.x < 0 || this.y < 0){
        console.log("Out of bounds < 0");
        this.x = 300;
        this.y = 380;
        alert("Caiuuuuuuuu");
        return false;
    }
    else{
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        return true;
    }
};

// Receives user input, allowedKeys (the key which was pressed) and move the player according to that input
Player.prototype.handleInput = function(input) {
    //Left key should move the player to the left,right key to the right,
    //up should move the player up and down should move the player down.
    //Recall that the player cannot move off screen (so you will need to check for that and handle appropriately).
    //If the player reaches the water the game should be reset by moving the player back to the initial location (you can write a separate reset Player method to handle that).
    if (input === 'left') {
        this.x -= 100;
    }
    if (input === 'up') {
        this.y -= 80;
    }
    if (input === 'right') {
        this.x += 100;
    }
    if (input === 'down') {
        this.y += 80;
    }
};

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// Game Session in order to control game stats,levels and score
var GameSession = function() {
    // Variables applied to each of our instances go here,
    // Setting the Enemy initial location and speed
    this.score = 0;
    this.level = 1;
};

// Start and reset the game session
// Instantiate Enemy and Player objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
// Parameter: dt, a time delta between ticks
GameSession.prototype.starts = function() {
    //  Starts the game session
    // var allEnemies = [new Enemy(1,60,1),new Enemy(1,145,2),new Enemy(1,225,2),new Enemy(1,310,2)];
    var allEnemies = [new Enemy(0,60,5),new Enemy(0,140,1),new Enemy(0,220,1),new Enemy(0,300,100)];
    var player = new Player(300,380);
    //width range  270 -300- 345
    //height range 350 -380- 425
    // L R = x = 100
    // U D = y = 80
    let returnArray = [allEnemies,player];
    return returnArray;

};

// Instantiate Game Session object
var gameSession = new GameSession();
var startsReturn = gameSession.starts();
var allEnemies = startsReturn[0];
var player = startsReturn[1];



