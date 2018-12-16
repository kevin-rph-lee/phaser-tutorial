import 'phaser';

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        update: update,
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);
var logo

function preload ()
{
    this.load.image('logo', 'assets/logo.png');
}

function create ()
{
    logo = this.add.image(400, 150, 'logo');

    this.tweens.add({
        targets: logo,
        y: 450,
        duration: 2000,
        ease: 'Power2',
        yoyo: true,
        loop: -1
    });

}


function update() {
    logo.rotation += 0.01
}
