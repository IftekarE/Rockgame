function ties(){ //this function decides wether the inputs result in a 3 way or 2 way tie    
    placeholder1 = 0;
    placeholder2 = 0;
    draws = 0;
    if(player1 == player2){
        if(player2 == player3){
            roundwinner.push("this round is a 3 way tie");
            deciding_winner();
        }else{twoway();}
    }else{twoway();}
}
function twoway(){
    placeholder1 = 0;
    placeholder2 = 0;
    draws = 0;
     if(player1 + player2 + player3 == 21){
        roundwinner.push("this round is a 3 way tie");
        deciding_winner();
    }else{
        if(player1 + player2 + player3 == 19){
            roundwinner.push("this round is a 3 way tie");
            deciding_winner();
        }else{
            if(player1 + player2 + player3 == 22){
                roundwinner.push("this round is a 3 way tie");
                deciding_winner();
            }else{
                if(player1 + player2 + player3 == 18){
                    roundwinner.push("this round is a 3 way tie");
                    deciding_winner();
                }else{
                    if(player1 + player2 + player3 == 16){
                        roundwinner.push("this round is a 3 way tie");
                        deciding_winner();
                    }else{
                        if(player1 == player2){
                            placeholder1 = player1;
                            placeholder2 = player3;
                            draws = 1;
                            winner2_3way();
                        }else{
                            if(player2 == player3){
                                placeholder1 = player2;
                                placeholder2 = player1;
                                draws = 2;
                                winner2_3way();
                            }else{
                                if(player1 == player3){
                                    placeholder1 = player3;
                                    placeholder2 = player2;
                                    draws = 3;
                                    winner2_3way();
                                }else{
                                    allout();
                                }
                            }
                        }
                    }
                }
            }
        }
    }
} 