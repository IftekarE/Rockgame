var reset = 1;
var rounds = 5;
var p1points = 5; 
var p2points = 5;
var p3points = 5;

function deciding_winner(){ //this function decides the winner of the game after 5 rounds
    if(rounds == 0){//this is checking if the system should conclude the game
        reset = 0;
    } 
    if(reset = 1){ // this is what determines wether or not the games has eneded all 5 rounds and running all the segments of code
        rounds--;
        Player1();
        Player2();
        ties();
        winner2_3way();
        allout();
        
    }else{  
            if(p1points + p2points + p3points == 15){// this is adding the scores of all player to see if its a draw
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