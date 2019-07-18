

class Game{


  constructor(players){
    this.gemArray = ['diamond', 'topaz', 'emerald'];

    this.players = players;
    this.playerIndex = 0
    // this.player = $('.sleepy');
    this.currentPlayer = this.players[this.playerIndex];
    this.mine = $('.mine');
    this.leave = $('.leave');
    this.h1 = $('h1');
    this.mineGem = this.mineGem.bind(this);
    this.leaveMine = this.leaveMine.bind(this);
    console.log(this.mineGem);
    console.log(this.leaveMine);

  }

  addEventListeners(){
    this.mine.on('click', this.mineGem);
    this.leave.on('click', this.leaveMine);
    this.h1.on('click', this.mineGem);


  }

  // makeDecision(decisionID) {
  //   // if statement deciding whether to mine or leave
  //   if (decisionID === $('.mine')) {
  //     this.mineGem();
  //   }


    // safe - if player selects "mine" goes into calls function to mine for a gem

    //gamble -if player selects "leaves" goes into function of leaving game and updating gem count and points


  mineGem() {

    //looks into array fo gems, randomly select ones, pops it out, pushes it to player gem count
    //if statement for all the good gems, increments points and gemCount
    // if 2 blcak gems
    //   this.die()
    //does if statement to see if player currently has 1 obsidian, if so then calls dieFunction, if does not, increment obsidianCount++
    //math.randon function to get gems index
    var gemIndex = Math.floor(Math.random() * this.gemArray.length);
    var newGem = this.gemArray.splice([gemIndex], 1 );

    this.currentPlayer.addGem( newGem );

    
    // if (newGem === 'diamond'){
    //   Player.playerStats.pointCount += 8;
    //   Player.playerStats.diamond ++;
    // } else if ( newGem === 'emerald'){
    //   Player.playerStats.pointCount += 6;
    //   Player.playerStats.emerald++;
    // } else if (newGem === 'ruby') {
    //   Player.playerStats.pointCount += 4;
    //   Player.playerStats.ruby++;
    // } else if (newGem === 'topaz') {
    //   Player.playerStats.pointCount += 2;
    //   Player.playerStats.topaz++;
    // }

  }
  leaveMine() {
    //pass a modal alerting you leaving in mickey mouse voice

  }
  die() {
    //updates current points/gem count to 0, pops up modal saying player died

  }






}
