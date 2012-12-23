var drawSprite = function drawSprite(ctx, name, frame, x, y, width, height){
  var sprite = sprites[name].frames[frame];
  var source = document.getElementById(sprites[name].source);
  var sprite_width = width || sprite.width;
  var sprite_height = height || sprite.height;
  ctx.drawImage(source, sprite.x, sprite.y, sprite.width, sprite.height,
    x, y, sprite_width, sprite_height)
};

var width = 8; // defaults for font sprites
var height = 8;

var sprites = {};
sprites['regChars'] = {
  source: 'fontSheet',
  frames : {
     65: { /*a*/ x: 1, y: 11, width: width, height: height },
     66: { /*b*/ x: 10, y: 11, width: width, height: height },
     67: { /*c*/ x: 19, y: 11, width: width, height: height },
     68: { /*d*/ },
     69: { /*e*/ },
     70: { /*f*/ },
     71: { /*g*/ },
     72: { /*h*/ },
     73: { /*i*/ },
     74: { /*j*/ },
     75: { /*k*/ },
     76: { /*l*/ },
     77: { /*m*/ },
     78: { /*n*/ },
     79: { /*o*/ },
     80: { /*p*/ },
     81: { /*q*/ },
     82: { /*r*/ },
     83: { /*s*/ },
     84: { /*t*/ },
     85: { /*u*/ },
     86: { /*v*/ },
     87: { /*w*/ },
     88: { /*x*/ },
     89: { /*y*/ },
     90: { /*z*/ },
     48: { /*0*/ },
     49: { /*1*/ },
     50: { /*2*/ },
     51: { /*3*/ },
     52: { /*4*/ },
     53: { /*5*/ },
     54: { /*6*/ },
     55: { /*7*/ },
     56: { /*8*/ },
     57: { /*9*/ },
     96: { /*`*/ },
     45: { /*-*/ },
     187: { /*=*/ },
     219: { /*[*/ },
     221: { /*]*/ },
     220: { /*\*/ },
     59: { /*;*/ },
     222: { /*'*/ },
     188: { /*,*/ },
     190: { /*.*/ },
     191: { /*/*/ }
   }
 };

sprites['shiftChars'] = {
  source: 'fontSheet',
  frames: {
    65: { /* A */ },
    66: { /* B */ },
    67: { /* C */ },
    68: { /* D */ },
    69: { /* E */ },
    70: { /* F */ },
    71: { /* G */ },
    72: { /* H */ },
    73: { /* I */ },
    74: { /* J */ },
    75: { /* K */ },
    76: { /* L */ },
    77: { /* M */ },
    78: { /* N */ },
    79: { /* O */ },
    80: { /* P */ },
    81: { /* Q */ },
    82: { /* R */ },
    83: { /* S */ },
    84: { /* T */ },
    85: { /* U */ },
    86: { /* V */ },
    87: { /* W */ },
    88: { /* X */ },
    89: { /* Y */ },
    90: { /* Z */ },
    49: { /* ! */ },
    50: { /* @ */ },
    51: { /* # */ },
    52: { /* $ */ },
    53: { /* % */ },
    54: { /* ^ */ },
    55: { /* & */ },
    56: { /* * */ },
    57: { /* ( */ },
    48: { /* ) */ },
    96: { /* ~ */ },
    45: { /* _ */ },
    187: { /* + */ },
    219: { /* { */ },
    221: { /* } */ },
    220: { /* | */ },
    59: { /* : */ },
    222: { /* " */ },
    188: { /* < */ },
    190: { /* > */ },
    191: { /* ? */ }
  }
};

sprites['explosion'] = {
  source: 'explosionSprite',
  frames : {
    0: { x: 4, y: 236, width: 80, height: 80 },
    1: { x: 88, y: 236, width: 80, height: 80 },
    2: { x: 171, y: 236, width: 80, height: 80 },
    3: { x: 249, y: 236, width: 80, height: 80 },
    4: { x: 330, y: 236, width: 80, height: 80 },
    5: { x: 414, y: 236, width: 80, height: 80 },
    6: { x: 495, y: 236, width: 80, height: 80 },
    7: { x: 87, y: 319, width: 75, height: 83 },
    8: { x: 166, y: 319, width: 75, height: 83 },
    9: { x: 245, y: 319, width: 75, height: 83 },
    10: { x: 324, y: 319, width: 75, height: 83 },
    11: { x: 403, y: 319, width: 75, height: 83 },
    12: { x: 481, y: 319, width: 75, height: 83 },
    13: { x: 4, y: 409, width: 65, height: 75 },
    14: { x: 82, y: 409, width: 65, height: 75 },
    15: { x: 157, y: 409, width: 65, height: 75 },
    16: { x: 228, y: 409, width: 65, height: 75 },
    17: { x: 299, y: 409, width: 65, height: 75 },
    18: { x: 370, y: 409, width: 65, height: 75 },
    19: { x: 437, y: 409, width: 65, height: 75 },
    20: { x: 498, y: 409, width: 65, height: 75 },
    21: { x: 4, y: 498, width: 56, height: 72 },
    22: { x: 64, y: 498, width: 56, height: 72 },
    23: { x: 124, y: 498, width: 56, height: 72 },
    24: { x: 182, y: 498, width: 56, height: 72 },
    25: { x: 235, y: 498, width: 56, height: 72 },
    26: { x: 288, y: 498, width: 56, height: 72 }
  }
};

