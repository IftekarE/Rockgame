function deciding_winner(){ //this function decides the winner of the game after 5 rounds
    if(rounds == 0){//this is checking if the system should conclude the game
        reset = 0;
    } 
    if(rounds < 0){//this is checking if the system should conclude the game
        reset = 0;
    }
    if(reset == 1){ // this is what determines wether or not the games has eneded all 5 rounds and running all the segments of code
        rounds = rounds - 1;
        console.log("the round is " + rounds);
        Player1();
        Player2();
            if(rounds == 4){
                player3 = P31;
            }
            if(rounds == 3){
                player3 = P32;
            }
            if(rounds == 2){
                player3 = P33;
            }
            if(rounds == 1){
                player3 = P34;
            }
            if(rounds == 0){
                player3 = P35;
            }
        console.log("this is the input for player3 " + player3);
        ties();
    }else{  
        console.log("this is player1's points " + p1points);
        console.log("this is player2's points " + p2points);
        console.log("this is player3's points " + p3points);
            if(p1points == p2points){
                if(p2points == p3points){// this is adding the scores of all player to see if its a draw
                console.log("this game is a draw");
            }else{
                if (p1points > p2points) { //this is checking to see if player1 has more points than player2 
                    if (p1points > p3points) { //this is checking to see if player 1 has more points than player 3     
                        console.log("Player1 wins the game");
                    }else{
                        console.log("Player3 wins the game");
                    }
                }else{
                    if (p2points > p3points) { //this is checing to see if player2 has more pints than player 3 
                        console.log("Player2 wins the game");
                    }else{
                        console.log("Player3 wins the game");
                    }
                }
            }
        }
    } 
}