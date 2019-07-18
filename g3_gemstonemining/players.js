class Player {

  constructor(game) {

    this.game = game;
    this.playerStats = {
      obsidian: 0,
      pointCount: 0,
      ruby: 0,
      diamond: 0,
      emerald: 0,
      topaz: 0,
    };

  }

  addGem(gem) {
    console.log("this works");

    //if statement for men selected /obsidian
    if (gem === 'diamond') {
      this.playerStats.pointCount += 8;
      this.playerStats.diamond++;
    } else if (gem === 'emerald') {
      this.playerStats.pointCount += 6;
      this.playerStats.emerald++;
    } else if (gem === 'ruby') {
      this.playerStats.pointCount += 4;
      this.playerStats.ruby++;
    } else if (gem === 'topaz') {
      this.playerStats.pointCount += 2;
      this.playerStats.topaz++;
    } else if (gem === 'obsidian' && this.playerStats.obsidian === 0) {
      this.playerStats.obsidian++
    } else if (gem === 'obsidian' && this.playerStats.obsidian === 1) {
      this.playerStats.obsidian++
      this.die();
    }
  }


  //Sam added die fuction to 'players.js' from the 'gameboard.js'
  die() {
    this.playerStats.pointCount = 0;

  }


}
