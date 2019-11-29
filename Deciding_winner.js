function deciding_winner(){ //this function decides the winner of the game after 5 rounds
    if(rounds == 0){//this is checking if the system should conclude the game
        reset = 0;
    }else{ 
    if(rounds < 0){//this is checking if the system should conclude the game
        reset = 0;
    }
}
    if(reset == 1){ // this is what determines wether or not the games has eneded all 5 rounds and running all the segments of code
        rounds = rounds - 1;
        Player1();
        Player2();
            if(rounds == 4){//this is what determines what is the input for player 3 in a specific round
                player3 = P31;
                loop = loop + 1;
            }
            if(rounds == 3){//this is what determines what is the input for player 3 in a specific round
                player3 = P32;
                loop = loop + 1;
            }
            if(rounds == 2){//this is what determines what is the input for player 3 in a specific round
                player3 = P33;
                loop = loop + 1;
            }
            if(rounds == 1){//this is what determines what is the input for player 3 in a specific round
                player3 = P34;
                loop = loop + 1;
            }
            if(rounds == 0){//this is what determines what is the input for player 3 in a specific round
                player3 = P35;
                loop = loop + 1;
            }
        ties();
    }else{
        entry = 0;//this is locking out the program from further computations 
        if(loop == 20){// when the condition is met the program calls the the randomness code
            random();
        }
        if(p1points == p2points){// this is checking for a draw 
            if(p1points == p3points){
                roundwinner.push("Draw");
            }else{
                pickup();//calling for code that decides winner
        }
        }else{
            pickup();//calling for code that decides winner
        }
        round1();//this is calling for code that will display round 1 code 
    }
}
function pickup(){
    if(p1points == p2points){//checking to see if players 1 and 2 tied and won or lost 
        if(p1points > p3points){
            roundwinner.push("players 1 & 2");
        }else{
            roundwinner.push("player3");// player 3 won 
        }
    }else{
        if(p2points == p3points){//checking to see if players 2 and 3 tied and won or lost 
            if(p2points > p1points){
                roundwinner.push("players 2 & 3");
            }else{
                roundwinner.push("player1");//player 1 won 
            }
        }else{
            if(p1points == p3points){//checking to see if players 1 and 3 tied and won or lost 
                if(p1points > p2points){
                    roundwinner.push("players 1 & 3");
                }else{
                    roundwinner.push("player2");//player 2 won 
                }
            }else{
                if(p1points > p2points){//this checking to see who one a 1v1v1 out of all 3 players
                    if(p1points > p3points){
                        roundwinner.push("player1");//player1 won 
                    }else{
                        roundwinner.push("player3");//player3 won 
                    }
                }else{
                    if(p2points > p3points){
                        roundwinner.push("player2");// player 2 won 
                    }else{
                        roundwinner.push("player3");//player 3 won 
                    }
                }
            }
        }
    }
}