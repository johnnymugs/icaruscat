// clean this up #TODO
var lastFrameTime = new Date().getTime();

game = {
  run: function run(){
    var now = new Date().getTime(), dt = now - (lastFrameTime || now);
    if (dt >= 30) {
      var ctx = document.getElementById('game').getContext("2d");
      var bg = document.getElementById('skyline');
      ctx.drawImage(bg, 0, 0, 960, 500);

      var nextAry = [];
      for (var i in actorStack){
        var actor = actorStack[i];
        actor.updateLogic();

        drawSprite.apply(this, [ctx].concat(actor.spriteInfo()));
        if (actor.active){ nextAry.push(actor); }
      }

      actorStack = nextAry;
      lastFrameTime = now;
    }
    requestAnimationFrame(run);
  }
}

// move this polyfill out somewhere
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
window.requestAnimationFrame = requestAnimationFrame;

window.onload = function(){
  actorStack.push(actors.player);
  keyHandler.loadQueue("typethewordstomakeexplosion");
  window.onkeyup = keyHandler.handlePress;

  game.run();
};
