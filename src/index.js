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


function preload ()
{
    this.load.image("tiles", "../assets/assets.png");
    this.load.tilemapTiledJSON("map", "../assets/level1.json");
    // this.load.spritesheet('player', '../assets/player.png', { frameWidth: 32, frameHeight: 64 })
    // player = this.physics.add.sprite(100, 450, 'player')

}

function create ()
{
    const map = this.make.tilemap({ key: "map" });
    const tileset = map.addTilesetImage("assets", "tiles");

    const lowerLayer = map.createStaticLayer("LowerGround", tileset, 0, 0);
    const groundLayer = map.createStaticLayer("Ground", tileset, 0, 0);
    const grassLayer = map.createStaticLayer("Grass", tileset, 0, 0);
    const worldLayer = map.createStaticLayer("World", tileset, 0, 0);
    const highLayer = map.createStaticLayer("High", tileset, 0, 0);


}


function update() {

}
