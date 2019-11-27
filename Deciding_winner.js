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
        ties();
    }else{
        entry = 0;
        if(p1points == p2points){
            if(p1points == p3points){
                roundwinner.push("Draw");
            }
        }else{
            if(p1points == p2points){
                if(p1points > p3points){
                    roundwinner.push("players 1 & 2");
                }else{
                    roundwinner.push("player3");
                }
            }else{
                if(p2points == p3points){
                    if(p2points > p1points){
                        roundwinner.push("players 2 & 3");
                    }else{
                        roundwinner.push("player1");
                    }
                }else{
                    if(p1points == p3points){
                        if(p1points > p2points){
                            roundwinner.push("players 1 & 3");
                        }else{
                            roundwinner.push("player2");
                        }
                    }else{
                        if(p1points > p2points){
                            if(p1points > p3points){
                                roundwinner.push("player1");
                            }else{
                                roundwinner.push("player3");
                            }
                        }else{
                            if(p2points > p3points){
                                roundwinner.push("player2");
                            }else{
                                roundwinner.push("player3");
                            }
                        }
                    }
                }
            }
        }
        round1();
    }
}