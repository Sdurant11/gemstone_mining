class Game {


  constructor() {
    //Sam updated gemarray and added text for stats
    this.gemArray = ['diamond', 'diamond', 'ruby', 'ruby', 'ruby', 'ruby', 'emerald', 'emerald', 'emerald', 'emerald', 'emerald', 'emerald', 'emerald', 'topaz', 'topaz', 'topaz', 'topaz', 'topaz', 'topaz', 'topaz', 'topaz', 'obsidian', 'obsidian', 'obsidian', 'obsidian', 'obsidian', 'obsidian', 'obsidian', 'obsidian'];
    this.diamondNum = 2;
    this.rubyNum = 4;
    this.emeraldNum = 7;
    this.topazNum = 8;
    this.obsidianNum = 8;

    this.updateGemCount();



    this.player1;
    // this.playerIndex = 0
    // this.player = $('.sleepy');
    // this.currentPlayer = this.players[this.playerIndex];
    this.mine = $('.mine_button');
    this.exit = $('.exit');
    this.mineGem = this.mineGem.bind(this);
    this.leaveMine = this.leaveMine.bind(this);
  }

  addEventListeners() {
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
    

    this.player1.addGem(newGem);

    //Sam added if statement to check gem and update dom
    if (newGem === 'topaz') {
      this.topazNum--;
    } else if (newGem === 'emerald') {
      this.emeraldNum--;
    } else if (newGem === 'diamond') {
      this.diamondNum--;
    } else if (newGem === 'ruby') {
      this.rubyNum--;
    } else if (newGem === 'obsidian') {
      this.obsidianNum--;
    }
    this.updateGemCount();

  }

  leaveMine() {
    $('#popUpSleepy1').removeClass('hidden');
    console.log('this works');
  }

  updateGemCount() {
    $('#mineDiamond').text(this.diamondNum);
    $('#mineRuby').text(this.rubyNum);
    $('#mineEmerald').text(this.emeraldNum);
    $('#mineTopaz').text(this.topazNum);
    $('#mineObsidian').text(this.obsidianNum);
  }



}
