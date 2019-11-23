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
        entry = 0;
        if(p1points == p2points){
            if(p1points == p3points){
                console.log("this game is a draw");
            }
        }else{
            if(p1points == p2points){
                if(p1points > p3points){
                    console.log("players 1 & 2 won the game");
                }else{
                    console.log("player3 has won the game");
                }
            }else{
                if(p2points == p3points){
                    if(p2points > p1points){
                        console.log("players 2 & 3 have won the game");
                    }else{
                        console.log("player1 has won the game");
                    }
                }else{
                    if(p1points == p3points){
                        if(p1points > p2points){
                            console.log("players 1 & 3 have won the game");
                        }else{
                            console.log("player2 has won the game");
                        }
                    }else{
                        if(p1points > p2points){
                            if(p1points > p3points){
                                console.log("player1 has won the game");
                            }else{
                                console.log("player3 has won the game");
                            }
                        }else{
                            if(p2points > p3points){
                                console.log("player2 has won the game");
                            }else{
                                console.log("player3 has won the game");
                            }
                        }
                    }
                }
            }
        }
    }
}