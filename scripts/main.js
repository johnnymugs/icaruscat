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
      for (var i in actors){
        var el = actors[i];
        drawSprite(ctx, 'explosion', el.currentFrame, el.x - 40, el.y - 40);
        if (el.currentFrame === 26){
        }else{
          el.currentFrame++;
          nextAry.push(el);
        }
      }
      actors = nextAry;

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
