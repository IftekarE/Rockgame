function winpoints(){//this dunction decides who wins the 2 way tie, and who to give the points to 
    if(entry == 1){
    if(draws == 1){//this is what determiens if player 1 and 2 get half a point
        roundwinner.push("players 1 & 2");
        p1points = p1points + .5;
        p2points = p2points + .5;
        p3points = p3points - 1;
        p1score.push(p1points);
        p2score.push(p2points);
        p3score.push(p3points);
    }
    if(draws == 2){//this is what determines if player 2 and 3 get points
        roundwinner.push("players 2 & 3");
        p1points = p1points - 1;
        p2points = p2points + .5;
        p3points = p3points + .5;  
        p1score.push(p1points);
        p2score.push(p2points);
        p3score.push(p3points);
    }
    if(draws == 3){//this is what deetermines if player 1 and3 get points 
        roundwinner.push("players 1 & 3");
        p1points = p1points + .5;
        p2points = p2points -  1;
        p3points = p3points + .5;
        p1score.push(p1points);
        p2score.push(p2points);
        p3score.push(p3points);
    }
    deciding_winner();//moves to next round
    }
    deciding_winner();
    }

function losepoints(){//this function decides who loses the 2 way tie, who to give points and who to take it from
    if(entry == 1){
    if(draws == 1){// this is what determines if player 3 gets points
        roundwinner.push("player3");
        p1points = p1points - .5;
        p2points = p2points - .5;
        p3points = p3points + 1;
        p1score.push(p1points);
        p2score.push(p2points);
        p3score.push(p3points);
    }
    if(draws == 2){//this is waht determines if player1 get points
        roundwinner.push("player1");
        p1points = p1points + 1;
        p2points = p2points - .5;
        p3points = p3points - .5; 
        p1score.push(p1points);
        p2score.push(p2points);
        p3score.push(p3points);
    }
    if(draws == 3){//this is what determines if player2 get points 
        roundwinner.push("player2");
        p1points = p1points - .5;
        p2points = p2points + 1;
        p3points = p3points - .5;  
        p1score.push(p1points);
        p2score.push(p2points);
        p3score.push(p3points);
    }
    deciding_winner();//moves to next round
    }
    deciding_winner();
    }

function p1wins(){//this assigns the points if player 1 wins
    if(entry == 1){
    roundwinner.push("Player1");
    p2points = p2points - 1;
    p3points = p3points - 1;
    p1points = p1points + 2;
    p1score.push(p1points);
    p2score.push(p2points);
    p3score.push(p3points);
    deciding_winner();//moves to next round
    }
    deciding_winner();
    }
function p2wins(){//this assigns the points if player 2 wins
    if(entry == 1){
    roundwinner.push("Player2");
    p2points = p2points + 2;
    p3points = p3points - 1;
    p1points = p1points - 1;
    p1score.push(p1points);
    p2score.push(p2points);
    p3score.push(p3points);
    deciding_winner();//moves to next round
    }
    deciding_winner();
    }
function p3wins(){//this assigns the points if player 3 wins 
    if(entry == 1){
    roundwinner.push("Player3");
    p2points = p2points - 1;
    p3points = p3points + 2;
    p1points = p1points - 1; 
    p1score.push(p1points);
    p2score.push(p2points);
    p3score.push(p3points);
    deciding_winner();//moves to next round
    }
    deciding_winner();
    }