var preloader = new Phaser.Class({
     extends: Phaser.Scene,
     Initialize:
     function preloader(){
         Phaser.Scene.call(this, {key: "preloader"});
    },

 preload()
 {
     this.load.image("cave", "assets/Cave.png");
     this.load.image("pantalla", "assets/Menu.png");
     this.load.image("jugar", "assets/jugar.png");
     this.load.image("wallh", "assets/wall medium.png");
     this.load.image("walls", "assets/wall small.png");
     this.load.image("wallv", "assets/wall vertical.png");
     this.load.image("star", "assets/star.png");
     this.load.image("bomb", "assets/bomb.png");
     this.load.image("box", "assets/box.png");
     this.load.spritesheet("dude", "assets/Miner.png", 
    {frameWidth: 32, frameHeight: 48});
 },

 create()
 {
     this.add.image(500, 300, "cave").setScale(1.25)
     logo = this.add.image(500, 300, "star")
    logo.setInteractive()
    logo.on("pointerdown", () => this.scene.start("Menu") );
 }
    
})