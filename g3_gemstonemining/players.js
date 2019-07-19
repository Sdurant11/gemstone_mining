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
    this.updatePlayer();
  }

  addGem(gem) {
    

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
    this.updatePlayer();
  }




  //Sam added die fuction to 'players.js' from the 'gameboard.js'
  die() {
    this.playerStats.pointCount = 0;
    $("#popUpSleepy2").removeClass("hidden");

  }

  updatePlayer(){
    $("#score_sleepy").text(this.playerStats.pointCount);
    $("#sleepyTopaz").text(this.playerStats.topaz);
    $("#sleepyEmerald").text(this.playerStats.emerald);
    $("#sleepyRuby").text(this.playerStats.ruby);
    $("#sleepyDiamond").text(this.playerStats.diamond);
    $("#sleepyObsidian").text(this.playerStats.obsidian);
  }
}
