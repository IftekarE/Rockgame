var player1 = 0; 
var numbergen = 0; 

 function Player1() {//this function selects the sign for player 1
        player1 = 0;
        var numbergen = 0;
        numbergen = Math.floor(Math.random() * 5 + 1); //this is a random number genarator
        i = numbergen;
        if (i == 1) { // this is looking to see if its rock
            player1 = 7;
        }
        i = numbergen;
        if (i == 2) { //this is looking to see if its paper 
            player1 = 6;
        }
        i = numbergen;
        if (i == 3) { //this is looking to see if its sicssors 
            player1 = 5;
        }
        i = numbergen;
        if (i == 4) { //this is looking to see if its lizard 
            player1 = 3;
        }
        i = numbergen;
        if (i == 5) { //this is looking to see if its spock
            player1 = 11;
        }
    }