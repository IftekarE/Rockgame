var p1choice = [];
var p2choice = [];
var p3choice = [];

var p1score = [];
var p2score = [];
var p3score = [];

var roundwinner = [];

var reset = 1;//lines 1 through 5 are variables for the point system of the game
var rounds = 5;
var p1points = 5; 
var p2points = 5;
var p3points = 5;

var inputslc = 0;

var idhold0;
var idhold1;
var idhold2;
var idhold3;
var idhold4;
var idhold5;
var idhold6;
var idhold7;
var idhold8;
var idhold9;
var idhold10;

var meshold0;
var meshold1;
var meshold2;
var meshold3;
var meshold4;
var meshold5;
var meshold6;
var meshold7;
var meshold8;
var meshold9;
var meshold10;

var player1 = 0; //lines 7 through 13 are variables for the player1 system of the game
var numbergen = 0; 
var p1r;
var p1p;
var p1s;
var p1l;
var p1sp;

var player2 = 0; //lines 15 through 20 are variables for the player2 system of the game 
var p2r;
var p2p;
var p2s;
var p2l;
var p2sp;

var player3 = 0; //lines 22 through 32 are variables for the player3 system of the game
var P31 = 0;
var P32 = 0;
var P33 = 0;
var P34 = 0;
var P35 = 0;
var p3r;
var p3p;
var p3s;
var p3l;
var p3sp;
var entry = 0;

var placeholder1 = 0; //lines 34 through 37 are variables for the computeingwinner system of the game
var placeholder2 = 0;
var placeholder3 = 0;
var draws = 0;

function restart(){//this dunction when called on will reset all variable needed to play this game
reset = 1;
rounds = 5;
p1points = 5; 
p2points = 5;
p3points = 5;
player1 = 0; 
player2 = 0; 
numbergen = 0; 
player3 = 0;
inputslc = 0;
P31 = 0;
P32 = 0;
P33 = 0;
P34 = 0;
P35 = 0; 
placeholder1 = 0;
placeholder2 = 0;
placeholder3 = 0;
draws = 0;
entry = 1;
p1choice = [];
p2choice = [];
p3choice = [];
p1score = [];
p2score = [];
p3score = [];
p1score.push("5");
p2score.push("5");
p3score.push("5");
roundwinner = [];
idhold0 = 0;
idhold1 = 0;
idhold2 = 0;
idhold3 = 0;
idhold4 = 0;
idhold5 = 0;
idhold6 = 0;
idhold7 = 0;
idhold8 = 0;
idhold9 = 0;
idhold10 = 0;

meshold0 = 0;
meshold1 = 0;
meshold2 = 0;
meshold3 = 0;
meshold4 = 0;
meshold5 = 0;
meshold6 = 0;
meshold7 = 0;
meshold8 = 0;
meshold9 = 0;
meshold10 = 0;
input();
enter();
}