class Game {


  constructor() {

    this.killPlayer = this.killPlayer.bind(this);
    this.gemArray = [];
    this.players = [];
    this.activePlayers = [];
    this.lastActivePlayer = null;
    

    this.mine= {
      'diamond': {count: 2, value: 8},
      'ruby': { count: 4, value: 4 },
      'emerald': { count: 7, value: 6 },
      'topaz': { count: 8, value: 2 },
      'obsidian': { count: 8, value: 0 }
    }

    this.fillGemBag();
    this.updateGemCount();



    this.currentPlayer = 0;

    this.domElements = {
      mine: $('.mine_button'),
      exit: $('.exit')
    }
    this.mineGem = this.mineGem.bind(this);
    this.leaveMine = this.leaveMine.bind(this);
  }

  fillGemBag() {

    this.gemArray = [];
    for (var gem in this.mine) {
      var gemCount = this.mine[gem].count;
      for (var currentCount = 0; currentCount < gemCount; currentCount++) {
        this.gemArray.push(gem);
      }
    }

  }

  addEventListeners() {
    this.domElements.mine.on('click', this.mineGem);
    this.domElements.exit.on('click', this.leaveMine);
  }


   addPlayer (name){
    var player = new Player(this.mine, name, this.killPlayer);
    this.players.push(player);
    this.activePlayers.push(player);
    var playerDom = player.render();
     this.lastActivePlayer = player;
     $("#playerContainer").append(playerDom);
   }

  mineGem() {

    var gemIndex = Math.floor(Math.random() * this.gemArray.length);
    var newGem = this.gemArray[gemIndex];
    this.gemArray.splice([gemIndex], 1);
    this.activePlayers[this.currentPlayer].addGem(newGem);
    this.activePlayers[this.currentPlayer].moveGemtoCart(newGem);

    this.mine[newGem].count--;
    this.updateGemCount();

    this.gotoNewPlayer();

  }
  apocalypse(){
    alert('everyone is dead');
  }
  killPlayer( player ){
    var playerIndex = this.activePlayers.indexOf(player);
    this.activePlayers.splice( playerIndex, 1);
    this.currentPlayer--;
    if(this.activePlayers.length===0){
      this.apocalypse();
    }
  }
  gotoNewPlayer(){
    this.currentPlayer++;
    if (this.currentPlayer === this.activePlayers.length){
      this.currentPlayer = 0;
    }
    this.lastActivePlayer.markInactive();
    this.activePlayers[ this.currentPlayer ].markActive();
    this.lastActivePlayer = this.activePlayers[this.currentPlayer];
  }

  leaveMine() {
    $('#popUpSleepy1').removeClass('hidden');
    console.log('this works');
  }

  updateGemCount() {
    for (var gem in this.mine){
      $('.mine .' + gem).text(this.mine[gem].count)
    }
  }














}
