// Enemies our player must avoid
var Enemy = function () {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // Setting the Enemy initial location and speed
    let positionXArray = [0, 100, 200, 400, 500, 600, 700];
    let posistionYArray = [60, 140, 220, 300]
    positionXArray = _shuffle(positionXArray);
    positionYArray = _shuffle(posistionYArray);
    this.x = positionXArray[0];
    this.y = positionYArray[0];
    this.speed = Math.floor((Math.random() * 100) - 50);
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    if (this.speed < 0) {
        this.sprite = 'images/enemy-bug-reverse.png'
    }
    else {
        this.sprite = 'images/enemy-bug.png';
    }
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // Updates the Enemy location
    this.x += dt * this.speed;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own Player class
// This class requires an update(), render() and
// a handleInput() method.
// The Player class
var Player = function () {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    //Setting the Player initial location and number of lives
    let positionXArray = [0, 100, 200, 300, 400, 500];
    positionXArray = _shuffle(positionXArray);
    this.x = positionXArray[0];
    this.y = 380;

    // The image/sprite for our players, this uses
    // a helper we've provided to easily load images
    let randomSprite = Math.floor((Math.random() * 5) + 1);
    switch (randomSprite) {
        case 1:
            this.sprite = 'images/char-boy.png';
            break;
        case 2:
            this.sprite = 'images/char-cat-girl.png';
            break;
        case 3:
            this.sprite = 'images/char-horn-girl.png';
            break;
        case 4:
            this.sprite = 'images/char-pink-girl.png';
            break;
        case 5:
            this.sprite = 'images/char-princess-girl.png';
            break;
        default:
            this.sprite = 'images/char-boy.png';
            break;
    }
};

// Update the players's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function () {
    // Updates the Player location
    if (this.x >= document.querySelector('canvas').width - 100) {
        return 1;
    }
    else if (this.y > 380){
        return 2;
    }
    else if(this.x < 0){
        return 3;
    }
    else if (this.y === item.y) {
        if (this.x != item.x){
            return 4;
        }
        else{
            return 5;
        }
    }
    else {
        return 6;
    }
};

// Draw the Player on the screen, required method for game
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Receives user input, allowedKeys (the key which was pressed) and move the player according to that input
Player.prototype.handleInput = function (input) {
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
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// The Item class
// This class requires an update() and render()
var Item = function () {
    // Variables applied to each of our instances go here,
    //Setting the Item initial location
    let positionXArray = [0, 100, 200, 400, 500];
    positionXArray = _shuffle(positionXArray);

    this.x = positionXArray[0];
    this.y = -20;
    // The image/sprite for our items, this uses
    // a helper we've provided to easily load images
    let spriteArray = ['images/Gem-Blue.png',
        'images/Gem-Green.png',
        'images/Gem-Orange.png',
        'images/Star.png',
        'images/Key.png'];
    this.sprite = spriteArray[Math.floor(Math.random() * spriteArray.length)];
};

// Draw the item on the screen, required method for game
Item.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Local function to shuffle the arrays
function _shuffle(array) {
    var currentIndex = array.length, tempValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        tempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tempValue;
    }
    return array;
}

// Game Session in order to control game stats,levels and score
var GameSession = function () {
    // Variables applied to each of our instances go here,
    // Setting the Enemy initial location and speed
    this.score = 0;
    this.level = 1;
};

// Start and reset the game session
// Instantiate Enemy, Player and Item objects.
// Place all Enemy objects in an array called allEnemies
// Place the Player object in a variable called player
// Place the Item object in a variable called item
GameSession.prototype.starts = function () {
    //  Starts the game session
    var allEnemies = [new Enemy()];
    let random = Math.floor((Math.random() * 50) + 1);
    for (let x = 0; x <= random; x++) {
        allEnemies.push(new Enemy());
    }

    var player = new Player();
    var item = new Item();

    let returnArray = [allEnemies, player, item];
    return returnArray;
};

// Instantiate Game Session object
var gameSession = new GameSession();
var startsReturn = gameSession.starts();
var allEnemies = startsReturn[0];
var player = startsReturn[1];
var item = startsReturn[2];