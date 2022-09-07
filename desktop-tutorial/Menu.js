class Menu extends Phaser.Scene {
    constructor() {
      super('Menu');
     }

create() { 
     this.add.image(500,300,"cave").setScale(1.25);
     this.add.image(500,300,"pantalla");
    play = this.add.image(502, 205, "jugar");
    play.setInteractive()
    play.on("pointerdown", () => this.scene.start("Nivel1"));



}
}