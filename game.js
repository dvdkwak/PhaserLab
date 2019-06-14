// In here your game is innitiated
const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    fps: 15,
    backgroundColor: '#ff5c3f',
    canvasStyle: 'display: block;',
    title: 'DaveKit Phaser',
    version: '1.0.0',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [
        Boot
    ]
}

const game = new Phaser.Game(config);
