

class Player {

  constructor(game){

    this.game = game;
    this.playerStats ={
      obsidian: 0,
      pointCount: 0,
      ruby: 0,
      diamond: 0,
      emerald: 0,
      topaz: 0,
    };

  }

  addGem(gem){
    if (newGem === 'diamond') {
      this.playerStats.pointCount += 8;
      this.playerStats.diamond++;
    } else if (newGem === 'emerald') {
      this.playerStats.pointCount += 6;
      this.playerStats.emerald++;
    } else if (newGem === 'ruby') {
      this.playerStats.pointCount += 4;
      this.playerStats.ruby++;
    } else if (newGem === 'topaz') {
      this.playerStats.pointCount += 2;
      this.playerStats.topaz++;
    }
  }
}
