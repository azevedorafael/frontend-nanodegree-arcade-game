// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // Setting the Enemy initial location and speed
    this.x = x;
    this.y = y;
    this.speed = spedd;
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
    // Handles collision with the Player


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
// The Player class
var Player = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    //Setting the Player initial location
    this.x = x;
    this.y = y;
    // The image/sprite for our players, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.pgn';
};

// Update the players's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function() {
    // Updates the Player location
    this.x = x;
    this.y = y;
    // Handles collision with the Player

};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Receives user input, allowedKeys (the key which was pressed) and move the player according to that input
Player.prototype.handleInput = function(input) {
    //Left key should move the player to the left,right key to the right,
    //up should move the player up and down should move the player down.
    //Recall that the player cannot move off screen (so you will need to check for that and handle appropriately).
    //If the player reaches the water the game should be reset by moving the player back to the initial location (you can write a separate reset Player method to handle that).
    if (input === 'left') {
        this.x -= 1;
    }
    if (input === 'up') {
        this.y += 1;
    }
    if (input === 'right') {
        this.x += 1;
    }
    if (input === 'down') {
        this.y -= 1;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(2,2,2),new Enemy(5,4,2)];
var player = new Player(1,1);


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
