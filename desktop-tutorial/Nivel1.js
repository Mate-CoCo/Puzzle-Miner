class Nivel1 extends Phaser.Scene {
    constructor() {
      super("Nivel1");
     }

    create() {
    this.add.image(500, 300, "cave").setScale(1.25);
    wall = this.physics.add.staticGroup();
    wallh = this.physics.add.staticGroup();
    wallv = this.physics.add.staticGroup();

    wallh.create(70, 140, "wallh");
    wallh.create(210, 140, "wallh");
    wallh.create(350, 140, "wallh");
    wallh.create(490, 140, "wallh");
    wallh.create(630, 140, "wallh");
    wallh.create(770, 140, "wallh");
    wallh.create(1003, 25, "wallh");
    wallh.create(70, 25, "wallh");
    wallh.create(210, 25, "wallh");
    wallh.create(350, 25, "wallh");
    wallh.create(490, 25, "wallh");
    wallh.create(630, 25, "wallh");
    wallh.create(770, 25, "wallh");
    wallh.create(910, 25, "wallh");
    wall.create(920, 140, "walls");
    wall.create(966, 140, "walls");
    wall.create(1003, 140, "walls");
    wallh.create(210, 340, "wallh");
    wallh.create(350, 340, "wallh");
    wallh.create(490, 340, "wallh");
    wallh.create(630, 340, "wallh");
    wallh.create(770, 340, "wallh");
    wallh.create(910, 340, "wallh");
    wallh.create(1050, 340, "wallh");
    wall.create(70, 340, "walls");
    wall.create(35, 340, "walls");
    wall.create(10, 340, "walls");
    wall.create(163, 298, "walls");
    wall.create(163, 188, "walls");
    wallv.create(65, 240, "wallv").setScale(1.2);
    wallv.create(25, 240, "wallv").setScale(1.2);
    wallh.create(210, 540, "wallh");
    wallh.create(350, 540, "wallh");
    wallh.create(490, 540, "wallh");
    wallh.create(630, 540, "wallh");
    wallh.create(770, 540, "wallh");
    wallh.create(910, 540, "wallh");
    wallh.create(1050, 540, "wallh");

    player = this.physics.add.sprite(70, 80, "dude");

    KeyUp = this.input.keyboard.addKey("up");
    KeyDown = this.input.keyboard.addKey("down");
    KeyLeft = this.input.keyboard.addKey("left");
    KeyRight = this.input.keyboard.addKey("right");
    player.setCollideWorldBounds(true);
    this.physics.add.collider(player, wall);
    this.physics.add.collider(player, wallh);
    this.physics.add.collider(player, wallv);

    this.anims.create({
      key: "<",
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 1 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: "turn",
      frames: [ { key: "dude", frame: 2 } ],
      frameRate: 20
    });

    this.anims.create({
      key: ">",
      frames: this.anims.generateFrameNumbers("dude", { start: 8, end: 9}),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: "w",
      frames: this.anims.generateFrameNumbers("dude", { start: 6, end: 7}),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: "s",
      frames: this.anims.generateFrameNumbers("dude", { start: 3, end: 4}),
      frameRate: 10,
      repeat: -1
    });


    
    }

    uptade (){

      if (KeyLeft.isDown)
      {
        player.setVelocityX(-160);

        player.anims.play("<", true);
      }
      else if (KeyRight.isDown)
      {
        player.setVelocityX(160);

        player.anims.play(">", true);
      }
      else
      {
        player.setVelocityX(0);

        player.anims.play("turn");
      }
      if (KeyUp.isDown)
      {
        player.setVelocityY(160);

        player.anims.play("w", true);
      }
      else if (KeyDown.isDown)
      {
        player.setVelocityY(-160);

        player.anims.play("s", true);
      }
      else
      {
        player.setVelocityY(0);

        player.anims.play("turn");
      } 


    } 
    
      
    
}
