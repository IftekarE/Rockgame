var p1choice = [];//variables for message board
var p2choice = [];//variables for message board
var p3choice = [];//variables for message board

var p1score = [];//variables for message board
var p2score = [];//variables for message board
var p3score = [];//variables for message board

var roundwinner = [];//variables for message board

var reset = 1;//lines 1 through 5 are variables for the point system of the game
var rounds = 5;// for rounds
var p1points = 5;//for point system
var p2points = 5;//for point system
var p3points = 5;//for point system

var inputslc = 0;//variables for message board

var idhold0;//variables for message board
var idhold1;//variables for message board
var idhold2;//variables for message board
var idhold3;//variables for message board
var idhold4;//variables for message board
var idhold5;//variables for message board
var idhold6;//variables for message board
var idhold7;//variables for message board
var idhold8;//variables for message board
var idhold9;//variables for message board
var idhold10;//variables for message board

var meshold0;//variables for message board
var meshold1;//variables for message board
var meshold2;//variables for message board
var meshold3;//variables for message board
var meshold4;//variables for message board
var meshold5;//variables for message board
var meshold6;//variables for message board
var meshold7;//variables for message board
var meshold8;//variables for message board
var meshold9;//variables for message board
var meshold10;//variables for message board

var loop = 0;//for randomness code
var total;//for randomness code
var expected;//for randomness code
var margin;//for randomness code

var player1 = 0; //lines 7 through 13 are variables for the player1 system of the game
var numbergen = 0; 
var p1r = 0;//for randomness code
var p1p = 0;//for randomness code
var p1s = 0;//for randomness code
var p1l = 0;//for randomness code
var p1sp = 0;//for randomness code

var player2 = 0; //lines 15 through 20 are variables for the player2 system of the game 
var p2r = 0;//for randomness code
var p2p = 0;//for randomness code
var p2s = 0;//for randomness code
var p2l = 0;//for randomness code
var p2sp = 0;//for randomness code

var player3 = 0; //lines 22 through 32 are variables for the player3 system of the game
var P31 = 0;
var P32 = 0;
var P33 = 0;
var P34 = 0;
var P35 = 0;
var p3r = 0;//for randomness code
var p3p = 0;//for randomness code
var p3s = 0;//for randomness code
var p3l = 0;//for randomness code
var p3sp = 0;//for randomness code
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