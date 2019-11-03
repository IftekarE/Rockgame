var reset = 1;
var rounds = 5;
var p1points = 5; 
var p2points = 5;
var p3points = 5;

deciding_winner();

function deciding_winner(){ //this function decides the winner of the game after 5 rounds
    i = rounds; if(i = 0){//this is checking if the system should conclude the game
        reset = 0;
    } 
    if(reset = 1){ // this is what determines wether or not the games has eneded all 5 rounds
        rounds--;
        player1();
        player2();
        player3();
    }else{ i = p1points + p2points; i = i + p3points; // this is adding the scores of all player to see if its a draw
            if(i = 15){
                alert("this game is a draw");
            }else{
                if (p1points > p2points) { //this is checking to see if player1 has more points than player2 
                    if (p1points > p3points) { //this is checking to see if player 1 has more points than player 3 
                        alert("Player1 wins the game");
                    }else{
                        alert("Player3 wins the game");
                    }
                }else{
                    if (p2points > p3points) { //this is checing to see if player2 has more pints than player 3 
                        alert("Player 2 wins the game");
                    }else{
                        alert("Player3 wins the game");
                    }
                }
            }
        }
    } 

function player1(){ //this function selects the sign for player 1 
    var player1 = 0; 
    var numbergen = 0;
    numbergen = Math.floor(Math.random() * 5 + 1);//this is a random number genarator
    i = numbergen; if(i = 1){// this is looking to see if its rock
        player1 = 7;}
        i = numbergen; if(i = 2){//this is looking to see if its paper 
            player1 = 6;} 
            i = numbergen; if(i = 3){//this is looking to see if its sicssors 
                player1 = 5;}
                i = numbergen; if(i = 4){//this is looking to see if its lizard 
                    player1 = 3;}
                    i = numbergen; if(i = 5){//this is looking to see if its spock
                        player1 = 11;}
                    }
function player2(){ //this function selects the sign for palyer 2
    var player2 = 0; 
    var numbergen = 0;
    numbergen = Math.floor(Math.random() * 5 + 1);//this is a random number genarator
    i = numbergen; if(i = 1){// this is looking to see if its rock
        player2 = 7;}
        i = numbergen; if(i = 2){//this is looking to see if its paper 
            player2 = 6;} 
            i = numbergen; if(i = 3){//this is looking to see if its sicssors 
                player2 = 5;}
                i = numbergen; if(i = 4){//this is looking to see if its lizard 
                    player2 = 3;}
                    i = numbergen; if(i = 5){//this is looking to see if its spock
                        player2 = 11;}
                    }
function player3(){}
 

//var player3


//var placeholder1
////var placeholder2
//var placeholder3
//var draws 
