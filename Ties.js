function ties(){ //this function decides wether the inputs result in a 3 way or 2 way tie    
    placeholder1 = 0;
    placeholder2 = 0;
    draws = 0;
    if(player1 == player2){// this checking for a 3 way tie 
        if(player2 == player3){
            roundwinner.push("3 way tie");
            p1score.push(p1points);
            p2score.push(p2points);
            p3score.push(p3points);
            deciding_winner();
        }else{twoway();}
    }else{twoway();}
}
function twoway(){//this checking for a 2 way tie
    placeholder1 = 0;
    placeholder2 = 0;
    draws = 0;

if(player1 == player2){//checking if players 1 and 2 are = 
    placeholder1 = player1;
    placeholder2 = player3;
    draws = 1;
    winner2_3way();
}else{
    if(player2 == player3){//checking if players 2 and 3 are = 
        placeholder1 = player2;
        placeholder2 = player1;
        draws = 2;
        winner2_3way();
    }else{
        if(player1 == player3){//checking if players 1 and 3 are = 
            placeholder1 = player3;
            placeholder2 = player2;
            draws = 3;
            winner2_3way();
        }else{
            if(player1 + player2 + player3 == 21){//checking for 3 way tie 
                roundwinner.push("3 way tie");
                p1score.push(p1points);
                p2score.push(p2points);
                p3score.push(p3points);
                deciding_winner();
            }else{
                if(player1 + player2 + player3 == 19){//checking for 3 way tie
                    roundwinner.push("3 way tie");
                    p1score.push(p1points);
                    p2score.push(p2points);
                    p3score.push(p3points);
                    deciding_winner();
                }else{
                    if(player1 + player2 + player3 == 22){//checking for 3 way tie
                        roundwinner.push("3 way tie");
                        p1score.push(p1points);
                        p2score.push(p2points);
                        p3score.push(p3points);
                        deciding_winner();
                    }else{
                        if(player1 + player2 + player3 == 18){//checking for 3 way tie
                            roundwinner.push("3 way tie");
                            p1score.push(p1points);
                            p2score.push(p2points);
                            p3score.push(p3points);
                            deciding_winner();
                        }else{
                            if(player1 + player2 + player3 == 16){//checking for 3 way tie
                                roundwinner.push("3 way tie");
                                p1score.push(p1points);
                                p2score.push(p2points);
                                p3score.push(p3points);
                                deciding_winner();
                            }else{
                                allout();//calling 1v1v1 code
                                }
                            }
                        }
                    }
                }   
            }
        }
    }
}