var actorStack = [];
var actors = {};

actors.Explosion = (function() {

  function Explosion(x, y) {
    this.x = x;
    this.y = y;
    this.currentFrame = 0;
    this.active = true;
  }

  Explosion.prototype.updateLogic = function updateLogic() {
    this.currentFrame++;
    if (this.currentFrame > 16){ this.active = false; };
  };

  Explosion.prototype.spriteInfo = function getSpriteInfo() {
    return ['explosion', this.currentFrame, this.x - 40, this.y - 40];
  };

  return Explosion;

})();

actors.player = {
  x : 440,
  y : 350,
  currentFrame : 0,
  active : true,
  _direction: 0,
  updateLogic : function updateLogic() {
    if (this._direction === 0){
      this.y++;
    }else{
      this.y--;
    }

    if (this.y > 400) { this._direction = 1; }
    if (this.y < 350) { this._direction = 0; }
  },
  spriteInfo : function spriteInfo() {
    return ['player', this.currentFrame, this.x, this.y]; // generalize this next #TODO
  }
};

actors.crosshairs= {
  x : 440,
  y : 350,
  currentFrame : 0,
  active : true,
  _destX : 0,
  _destY: 0,
  updateLogic : function updateLogic() {
    var target = keyHandler.queue[0].actor;
    if (target.x > this.x) { this.x = this.x + ((target.x - this.x)/4); }
    if (target.y > this.y) { this.y = this.y + ((target.y - this.y)/4); }
    if (target.x < this.x) { this.x = this.x - ((this.x - target.x)/4); }
    if (target.y < this.y) { this.y = this.y - ((this.y - target.y)/4); }
  },
  spriteInfo : function spriteInfo() {
    return ['crosshairs', this.currentFrame, this.x, this.y];
  }
};

actors.Letter = (function() {

  // looks like this is shared among actors
  function Letter(x, y, keyCode) {
    this.x = x;
    this.y = y;
    this.currentFrame = keyCode; // ...except this... I'd kind of prefer to name this what it is
    this.active = true;
  }

  Letter.prototype.updateLogic = function updateLogic() {
    this.y++;
  };

  Letter.prototype.spriteInfo = function getSpriteInfo() {
    return ['regChars', this.currentFrame, this.x, this.y, 32, 32];
  };

  return Letter;

})();
