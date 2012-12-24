// clean this up #TODO
var lastFrameTime = new Date().getTime();

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

      lastFrameTime = now;
    }
    requestAnimationFrame(run);
  }
}

// move this polyfill out somewhere

window.onload = function(){
  game.run();
  keyHandler.loadQueue("typethewordstomakeexplosion");
  actorStack.push(actors.player);
  window.onkeyup = keyHandler.handlePress;
};
