class Player {

  constructor(mineData, name, deathCallback) {
    this.functionToCallWhenIDie = deathCallback;
    this.name = name;
    this.points = 0;
    this.mineData = mineData;
    this.mineCart = {};
    this.emptyMineCart();
    this.dead = false;

    this.leftMine = false;

    this.miningSound = document.getElementById("miningSound");


    this.domElements = {
      container: null,
      name: null,
      score: null,
      mineCart: null
    }
  }

  emptyMineCart() {
    for (var gem in this.mineData) {
      this.mineCart[gem] = 0;
    }
  }

  addGem(gem) {
    this.mineCart[gem]++;
    this.points += this.mineData[gem].value;

    if (this.mineCart.obsidian === 2) {
      this.die();
    }
    this.updatePlayer();
  }


  die() {
    this.dead = true;
    this.grungeUpPlayer();
    this.points = 0;
    this.functionToCallWhenIDie(this);
  }

  leave() {
    this.leftMine = true;
    this.playerLeftFilter();
  }

  playerLeftFilter() {
    this.domElements.container.addClass('left');
  }

  grungeUpPlayer() {
    this.domElements.container.addClass('kaboom');
  }
  updatePlayer() {
    this.domElements.score.text(this.points);
    for (var gem in this.mineCart) {
      this.domElements.mineCart.find('.' + gem).text(this.mineCart[gem]);
    }
  }

  markActive() {
    this.domElements.container.addClass('currentPlayer');
  }

  markInactive() {
    this.domElements.container.removeClass('currentPlayer');
  }

  render() {
    var domClone = $("#templates > .player").clone();
    this.domElements = {
      container: domClone,
      name: domClone.find('.player_name > h2'),
      score: domClone.find('.score_text'),
      mineCart: domClone.find('.gem_div')
    }
    this.domElements.name.text(this.name);
    this.updatePlayer();
    return this.domElements.container;
  }

  moveGemtoCart(gem) {
    var newGemPosition = $('.mine .' + gem).offset();
    var animationGem = $('<div>');
    animationGem.addClass('gem ' + gem);
    animationGem.css({ 'top': newGemPosition.top + 'px', 'left': newGemPosition.left + 'px', 'position': 'absolute' });
    $('body').append(animationGem);
    var playerGemPosition = this.domElements.mineCart.find('.' + gem).offset();
    animationGem.animate({
      top: playerGemPosition.top + 'px',
      left: playerGemPosition.left + 'px'

    }, 1000, function () {
      $(animationGem).remove();

    });

    this.stopAudio();
    this.playAudio();
  }

  playAudio() {
    this.miningSound.play();
  }

  stopAudio() {
    this.miningSound.pause();
    this.miningSound.currentTime = 0;
  }
}
