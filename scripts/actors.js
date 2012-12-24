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
