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
