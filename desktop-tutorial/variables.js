var config = {
    type: Phaser.WEBGL,
    width: 1000,
    height: 600,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0},
            debug: false
        }
    },
    scene:[preloader,Menu,Nivel1]
};
var game = new Phaser.Game(config);

var player;
var wall;
var wallv;
var wallh;
var play;
var logo;
var cursors;
var KeyUp;
var KeyDown;
var KeyLeft;
var KeyRight;
var box;