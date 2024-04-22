class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.spaceKey1 = null;
        this.spaceKey2 = null;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.

        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.armA = this.add.sprite(this.bodyX + 100, this.bodyY + 40, "monsterParts", "arm_redC.png");
        my.sprite.armB = this.add.sprite(this.bodyX - 90, this.bodyY + 40, "monsterParts", "arm_redB.png");
        
        my.sprite.feetA = this.add.sprite(this.bodyX + 55, this.bodyY + 130, "monsterParts", "leg_yellowD.png");
        my.sprite.feetB = this.add.sprite(this.bodyX + 15, this.bodyY + 130, "monsterParts", "leg_greenC.png");
        my.sprite.feetC = this.add.sprite(this.bodyX - 50, this.bodyY + 135, "monsterParts", "leg_whiteA.png");

        my.sprite.eye1 = this.add.sprite(this.bodyX + 20, this.bodyY - 30, "monsterParts", "eye_dead.png");
        my.sprite.eye2 = this.add.sprite(this.bodyX - 20, this.bodyY - 30, "monsterParts", "eye_dead.png");
        my.sprite.mouth1 = this.add.sprite(this.bodyX, this.bodyY + 45, "monsterParts", "mouthH.png");
        my.sprite.mouth2 = this.add.sprite(this.bodyX, this.bodyY + 45, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.accA = this.add.sprite(this.bodyX + 30, this.bodyY - 80, "monsterParts", "detail_blue_horn_large.png");
        my.sprite.accB = this.add.sprite(this.bodyX - 10, this.bodyY - 80, "monsterParts", "detail_blue_horn_large.png");

        my.sprite.armB.flipX = true;
        my.sprite.feetC.flipX = true;

        my.sprite.mouth2.visible = false;

        let smileKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        smileKey.on('down', (key, event) => {
            my.sprite.mouth1.visible = true;
            my.sprite.mouth2.visible = false;
        });

        let fangKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        fangKey.on('down', (key, event) => {
            my.sprite.mouth2.visible = true;
            my.sprite.mouth1.visible = false;
        });

        this.spaceKey1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.spaceKey2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);


        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        

        if (this.spaceKey1.isDown){
            my.sprite.body.setVelocityX(-50);
            my.sprite.armA.setVelocityX(-5);
            my.sprite.armB.setVelocityX(-5);
            my.sprite.feetA.setVelocityX(-5);
            my.sprite.feetB.setVelocityX(-5);
            my.sprite.feetC.setVelocityX(-5);
            my.sprite.eye1.setVelocityX(-5);
            my.sprite.eye2.setVelocityX(-5);
            my.sprite.mouth1.setVelocityX(-5);
            my.sprite.mouth2.setVelocityX(-5);
            my.sprite.accA.setVelocityX(-5);
            my.sprite.accB.setVelocityX(-5);
        }
        else if (this.spaceKey2.isDown){
            my.sprite.body.setVelocityX(50);
            my.sprite.armA.setVelocityX(5);
            my.sprite.armB.setVelocityX(5);
            my.sprite.feetA.setVelocityX(5);
            my.sprite.feetB.setVelocityX(5);
            my.sprite.feetC.setVelocityX(5);
            my.sprite.eye1.setVelocityX(5);
            my.sprite.eye2.setVelocityX(5);
            my.sprite.mouth1.setVelocityX(5);
            my.sprite.mouth2.setVelocityX(5);
            my.sprite.accA.setVelocityX(5);
            my.sprite.accB.setVelocityX(5);
        }
    }

}