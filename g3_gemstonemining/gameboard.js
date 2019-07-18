class Game{


    constructor(){
  
      this.gemArray = ['diamond', 'topaz', 'emerald'];
      this.player1;
      // this.playerIndex = 0
      // this.player = $('.sleepy');
      // this.currentPlayer = this.players[this.playerIndex];
      this.mine = $('.mine_button');
      this.exit = $('.exit');
      this.mineGem = this.mineGem.bind(this);
      this.leaveMine = this.leaveMine.bind(this);
  
  
    }
  
    addEventListeners(){
      this.mine.on('click', this.mineGem);
      this.exit.on('click', this.leaveMine);
  
  
  
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
      var newGem = this.gemArray[gemIndex];
      this.gemArray.splice([gemIndex], 1);
      console.log(this.gemArray);
  
      this.player1.addGem( newGem );
  
  
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
      $('#popUpSleepy1').removeClass('hidden');
      console.log('this works');
  
    }
    die() {
      //updates current points/gem count to 0, pops up modal saying player died
  
    }
  
  
  
  
  
  
  }