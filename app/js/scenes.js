class Boot extends Phaser.Scene{constructor(){super()}preload(){this.load.image("logo","src/assets/taijitu.png"),this.load.image("red","src/assets/blue.png")}create(){var t=this.add.particles("red").createEmitter({speed:100,scale:{start:3,end:0},blendMode:"ADD"});this.logo=this.physics.add.image(400,100,"logo"),this.logo.setVelocity(100,200),this.logo.setBounce(1,1),this.logo.setCollideWorldBounds(!0),t.startFollow(this.logo),this.text=this.add.text(10,10,"Welcome to DaveKit!",{fontFamily:'"Arial Black"',fontSize:"32px"})}update(){this.logo.angle+=2}}