// clean this up #TODO
var lastFrameTime = new Date().getTime();
var playerChar = {};

game = {
  run: function run(){
    var now = new Date().getTime(), dt = now - (lastFrameTime || now);
    if (dt >= 30) {
      var ctx = document.getElementById('game').getContext("2d");
      var bg = document.getElementById('skyline');
      ctx.drawImage(bg, 0, 0, 960, 500);

      for (var i in keyHandler.queue){
        var el = keyHandler.queue[i];
        drawSprite(ctx, 'regChars', el.keyCode, el.x, el.y, 32, 32);
      }

      var nextAry = [];
      for (var i in actorStack){
        var actor = actorStack[i];
        actor.updateLogic();

        drawSprite.apply(this, [ctx].concat(actor.spriteInfo()));
        if (actor.active){ nextAry.push(actor); }
      }
      actorStack = nextAry;

      // draw player
      currStep = playerChar.currentFrame || 0;
      if (currStep < 30) {
        y = 350 + (1 * currStep);
        drawSprite(ctx, 'player', 0, 440, y);
      }else{
        y = 350 + (1 * (-(currStep - 60)));
        drawSprite(ctx, 'player', 0, 440, y);
      }
      if (currStep < 61) {
        playerChar.currentFrame = currStep + 1;
      }else{
        playerChar.currentFrame = 0;
      }

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
  game.run();
  keyHandler.loadQueue("typethewordstomakeexplosion");
  window.onkeyup = keyHandler.handlePress;
};
