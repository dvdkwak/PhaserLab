class Boot extends Phaser.Scene
{

    // constructor to call super constructor
    constructor()
    {
        // calling the super to inniciate this class as a scene
        super();
    } // end of constructor


    // function to load all assets
    preload()
    {
        // loading the taijitu and the particle images
        this.load.image('logo', 'src/assets/taijitu.png');
        this.load.image('red', 'src/assets/blue.png');
    } // end of preload


    // create to create all game objects and stuff
    create ()
    {
        // creating a particle variable
        var particles = this.add.particles('red');
        // creating an emitter to get the fire like effect
        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 3, end: 0 },
            blendMode: 'ADD'
        });
        // adding a logo object (image object)
        this.logo = this.physics.add.image(400, 100, 'logo');
        this.logo.setVelocity(100, 200);
        this.logo.setBounce(1, 1);
        this.logo.setCollideWorldBounds(true);
        emitter.startFollow(this.logo);
        // text to put in the top left corner
        this.text = this.add.text(10, 10, 'Welcome to DaveKit!', {
            fontFamily: '"Arial Black"',
            fontSize: "32px"
        });
    } // end of create


    // update function to something each frame
    update()
    {
        // adding 2 degrees every frame to the angle of the taijitu logo
        this.logo.angle += 2;
    } // end of update

} // end of scene
