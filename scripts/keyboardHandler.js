keyHandler = {
  queue: [],
  keys: {
        'a' : 65,
        'b' : 66,
        'c' : 67,
        'd' : 68,
        'e' : 69,
        'f' : 70,
        'g' : 71,
        'h' : 72,
        'i' : 73,
        'j' : 74,
        'k' : 75,
        'l' : 76,
        'm' : 77,
        'n' : 78,
        'o' : 79,
        'p' : 80,
        'q' : 81,
        'r' : 82,
        's' : 83,
        't' : 84,
        'u' : 85,
        'v' : 86,
        'w' : 87,
        'x' : 88,
        'y' : 89,
        'z' : 90,
        '0' : 48,
        '1' : 49,
        '2' : 50,
        '3' : 51,
        '4' : 52,
        '5' : 53,
        '6' : 54,
        '7' : 55,
        '8' : 56,
        '9' : 57,
        'ctrl' : 17,
        'alt' : 18,
        'backspace' : 8,
        '\n' : 13,
        ' ':32,
        'esc':27,
        'tab':9,
        'left' : 37,
        'up'   : 38,
        'right': 39,
        'down' : 40,
        '`':96,
        '-':45,
        '=':187,
        '[':219,
        ']':221,
        '\\':220,
        ':':59,
        "'":222,
        ',':188,
        '.':190,
        '/':191,
        // shifted
        'A' : 65,
        'B' : 66,
        'C' : 67,
        'D' : 68,
        'E' : 69,
        'F' : 70,
        'G' : 71,
        'H' : 72,
        'I' : 73,
        'J' : 74,
        'K' : 75,
        'L' : 76,
        'M' : 77,
        'N' : 78,
        'O' : 79,
        'P' : 80,
        'Q' : 81,
        'R' : 82,
        'S' : 83,
        'T' : 84,
        'U' : 85,
        'V' : 86,
        'W' : 87,
        'X' : 88,
        'Y' : 89,
        'Z' : 90,
        '!' : 49,
        '@' : 50,
        '#' : 51,
        '$' : 52,
        '%' : 53,
        '^' : 54,
        '&' : 55,
        '*' : 56,
        '(' : 57,
        ')' : 48,
        '~':96,
        '_':45,
        '+':187,
        '{':219,
        '}':221,
        '|':220,
        ':':59,
        '"':222,
        '<':188,
        '>':190,
        '?':191
  },
  loadQueue: function loadQueue(input, line){
    line = line || 0;
    var keyCode = this.keys[input[0]];
    var queue = this.queue;
    var x = queue[queue.length - 1] ?
      queue[queue.length - 1].actor.x + 35 : 0;
    if (x > (25*35)){ x = 0; line++; }
    var actor = new actors.Letter(x, 100 - (line*60) + (Math.floor(Math.random()*11)), keyCode);
    queue.push({ keyCode: keyCode, actor: actor });
    actorStack.push(actor);

    if (input.length > 1) {
      var that = this;
      var cdr = input.substr(1,input.length-1);
      loadQueue.call(that, cdr, line);
    };
  },
  handlePress: function handlePress(event){
    var currentKey = keyHandler.queue[0];
    if(event.keyCode === currentKey.keyCode){
      var actor = keyHandler.queue.shift().actor;
      actorStack.push(new actors.Explosion(actor.x, actor.y));
      actor.active = false;

    }else{ console.warn("wrongzors!") }
  }
};
