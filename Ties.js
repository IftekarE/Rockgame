var placeholder1 = 0;
var placeholder2 = 0;
var placeholder3 = 0;
var draws = 0;

function ties(){ //this function decides wether the inputs result in a 3 way or 2 way tie
        
        placeholder1 = 0;
        placeholder2 = 0;
        draws = 0;
        if(player1 == player2){ // the 3 lines going down is checking to if all inputs are the same
            if(Player2 == player3){
                deciding_winner();
            }
        }else{
        if(Player1 + player2 + player3 == 21){ //cheking for 3 way tie
            deciding_winner();
        }
        if(Player1 + player2 + player3 == 19){ //cheking for 3 way tie
            deciding_winner();
        }
        if(Player1 + player2 + player3 == 22){ //cheking for 3 way tie
            deciding_winner();
        }
        if(Player1 + player2 + player3 == 18){ //cheking for 3 way tie
            deciding_winner();
        }
        if(Player1 + player2 + player3 == 16){ //cheking for 3 way tie
            deciding_winner();
        }else{
            if(player1 == player2){ //chcking for a 2 way tie 
                placeholder1 = player1;
                placeholder2 = player3;
                draws = 1; 
                winner2way();
            }
            if(player2 == player3){ //chcking for a 2 way tie 
                placeholder1 = player2;
                placeholder2 = player1;
                draws = 2; 
                winner2way();
            }
            if(player1 == player3){ //chcking for a 2 way tie 
                placeholder1 = player3;
                placeholder2 = player2;
                draws = 3; 
                winner2way();
            }
            allout(); //this is calling for the code relating to a 1v1v1
    }
}
}