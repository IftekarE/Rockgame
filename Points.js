function winpoints(){//this dunction decides who wins the 2 way tie, and who to give the points to 
    if(draws == 1){//this is what determiens if player 1 and 2 get half a point
        console.log("player1 and player2 win round " + rounds);
        p1points = p1points + .5;
        p2points = p2points + .5;
        p3points = p3points - 1;
    }
    if(draws == 2){//this is what determines if player 2 and 3 get points
        console.log("player2 and player3 win round " + rounds);
        p1points = p1points - 1;
        p2points = p2points + .5;
        p3points = p3points + .5;  
    }
    if(draws == 3){//this is what deetermines if player 1 and3 get points 
        console.log("player1 and player3 win round " + rounds);
        p1points = p1points + .5;
        p2points = p2points -  1;
        p3points = p3points + .5;
    }
    deciding_winner();//moves to next round
}

function losepoints(){//this function decides who loses the 2 way tie, who to give points and who to take it from
    if(draws == 1){// this is what determines if player 3 gets points
        console.log("player3 wins round " + rounds);
        p1points = p1points - .5;
        p2points = p2points - .5;
        p3points = p3points + 1;
    }
    if(draws == 2){//this is waht determines if player1 get points
        console.log("player1 wins round " + rounds);
        p1points = p1points + 1;
        p2points = p2points - .5;
        p3points = p3points - .5; 
    }
    if(draws == 3){//this is what determines if player2 get points 
        console.log("player2 wins round " + rounds);
        p1points = p1points - .5;
        p2points = p2points + 1;
        p3points = p3points - .5;  
    }
    deciding_winner();//moves to next round
}

function p1wins(){//this assigns the points if player 1 wins 
    console.log("Player1 wins round " + rounds);
    p2points = p2points - 1;
    p3points = p3points - 1;
    p1points = p1points + 2;
    deciding_winner();//moves to next round
}
function p2wins(){//this assigns the points if player 2 wins
    console.log("Player2 wins round " + rounds);
    p2points = p2points + 2;
    p3points = p3points - 1;
    p1points = p1points - 1; 
    deciding_winner();//moves to next round
}
function p3wins(){//this assigns the points if player 3 wins 
    console.log("Player3 wins round " + rounds);
    p2points = p2points - 1;
    p3points = p3points + 2;
    p1points = p1points - 1; 
    deciding_winner();//moves to next round
}