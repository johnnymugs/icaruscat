var drawSprite = function drawSprite(ctx, name, frame, x, y, width, height){
  var sprite = sprites[name].frames[frame];
  var source = document.getElementById(sprites[name].source);
  var sprite_width = width || sprite.width;
  var sprite_height = height || sprite.height;
  ctx.drawImage(source, sprite.x, sprite.y, sprite.width, sprite.height,
    x, y, sprite_width, sprite_height);
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
     68: { /*d*/ x: 28, y: 11, width: width, height: height },
     69: { /*e*/ x: 37, y: 11, width: width, height: height },
     70: { /*f*/ x: 45, y: 11, width: width, height: height },
     71: { /*g*/ x: 55, y: 11, width: width, height: height },
     72: { /*h*/ x: 64, y: 11, width: width, height: height },
     73: { /*i*/ x: 73, y: 11, width: width - 5, height: height },
     74: { /*j*/ x: 77, y: 11, width: width, height: height },
     75: { /*k*/ x: 86, y: 11, width: width, height: height },
     76: { /*l*/ x: 95, y: 11, width: width - 5, height: height },
     77: { /*m*/ x: 100, y: 11, width: width, height: height },
     78: { /*n*/ x: 109, y: 11, width: width, height: height },
     79: { /*o*/ x: 118, y: 11, width: width, height: height },
     80: { /*p*/ x: 127, y: 11, width: width, height: height },
     81: { /*q*/ x: 136, y: 11, width: width, height: height },
     82: { /*r*/ x: 145, y: 11, width: width, height: height },
     83: { /*s*/ x: 153, y: 11, width: width, height: height },
     84: { /*t*/ x: 162, y: 11, width: width, height: height },
     85: { /*u*/ x: 170, y: 11, width: width, height: height },
     86: { /*v*/ x: 179, y: 11, width: width, height: height },
     87: { /*w*/ x: 188, y: 11, width: width, height: height },
     88: { /*x*/ x: 197, y: 11, width: width, height: height },
     89: { /*y*/ x: 206, y: 11, width: width, height: height },
     90: { /*z*/ x: 215, y: 11, width: width, height: height },
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
    65: { /*a*/ x: 2, y: 1, width: width, height: height },
    66: { /*b*/ x: 10, y: 1, width: width, height: height },
    67: { /*c*/ x: 19, y: 1, width: width, height: height },
    68: { /*d*/ x: 28, y: 1, width: width, height: height },
    69: { /*e*/ x: 37, y: 1, width: width, height: height },
    70: { /*f*/ x: 45, y: 1, width: width, height: height },
    71: { /*g*/ x: 55, y: 1, width: width, height: height },
    72: { /*h*/ x: 64, y: 1, width: width, height: height },
    73: { /*i*/ x: 73, y: 1, width: width, height: height },
    74: { /*j*/ x: 79, y: 1, width: width, height: height },
    75: { /*k*/ x: 88, y: 1, width: width, height: height },
    76: { /*l*/ x: 97, y: 1, width: width, height: height },
    77: { /*m*/ x: 106, y: 1, width: width, height: height },
    78: { /*n*/ x: 115, y: 1, width: width, height: height },
    79: { /*o*/ x: 124, y: 1, width: width, height: height },
    80: { /*p*/ x: 133, y: 1, width: width, height: height },
    81: { /*q*/ x: 142, y: 1, width: width, height: height },
    82: { /*r*/ x: 151, y: 1, width: width, height: height },
    83: { /*s*/ x: 160, y: 1, width: width, height: height },
    84: { /*t*/ x: 169, y: 1, width: width, height: height },
    85: { /*u*/ x: 177, y: 1, width: width, height: height },
    86: { /*v*/ x: 186, y: 1, width: width, height: height },
    87: { /*w*/ x: 195, y: 1, width: width, height: height },
    88: { /*x*/ x: 204, y: 1, width: width, height: height },
    89: { /*y*/ x: 213, y: 1, width: width, height: height },
    90: { /*z*/ x: 222, y: 1, width: width, height: height },
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

