var reset = 1;
var rounds = 5;
var p1points = 5; 
var p2points = 5;
var p3points = 5;

var player1 = 0; 
var player2 = 0; 
var player3 = 0;
var numbergen = 0; 

var clicked = 0;
var placeholder1 = 0;
var placeholder2 = 0;
var placeholder3 = 0;
var draws = 0;

deciding_winner();


function deciding_winner(){ //this function decides the winner of the game after 5 rounds
    if(rounds == 0){//this is checking if the system should conclude the game
        reset = 0;
    } 
    if(reset = 1){ // this is what determines wether or not the games has eneded all 5 rounds and running all the segments of code
        rounds--;
        Player1();
        Player2();
        Player3();
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
 
    function Player3(){//this segment of code is for player 3's input
        if(clicked == 1){
             player3 = 7;
             console.log(player3);
        }
        if(clicked == 2){
             player3 = 6;
             console.log(player3);
        }
        if(clicked == 3){
             player3 = 5;
             console.log(player3);
        }
        if(clicked == 4){
             player3 = 3;
             console.log(player3);
        }
        if(clicked == 5){
             player3 = 11;
             console.log(player3);
        }
    }

    function Player1() {//this function selects the sign for player 1
        player1 = 0;
        var numbergen = 0;
        numbergen = Math.floor(Math.random() * 5 + 1); //this is a random number genarator
        i = numbergen;
        if (i == 1) { // this is looking to see if its rock
            player1 = 7;
        }
        i = numbergen;
        if (i == 2) { //this is looking to see if its paper 
            player1 = 6;
        }
        i = numbergen;
        if (i == 3) { //this is looking to see if its sicssors 
            player1 = 5;
        }
        i = numbergen;
        if (i == 4) { //this is looking to see if its lizard 
            player1 = 3;
        }
        i = numbergen;
        if (i == 5) { //this is looking to see if its spock
            player1 = 11;
        }
    }
                    
    function Player2() {//this function selects the sign for palyer 2
        player2 = 0;
        var numbergen = 0;
        numbergen = Math.floor(Math.random() * 5 + 1); //this is a random number genarator
        i = numbergen;
        if (i == 1) { // this is looking to see if its rock
            player2 = 7;
        }
        i = numbergen;
        if (i == 2) { //this is looking to see if its paper 
            player2 = 6;
        }
        i = numbergen;
        if (i == 3) { //this is looking to see if its sicssors 
            player2 = 5;
        }
        i = numbergen;
        if (i == 4) { //this is looking to see if its lizard 
            player2 = 3;
        }
        i = numbergen;
        if (i == 5) { //this is looking to see if its spock
            player2 = 11;
        }
    }
 
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

function winner2_3way(){
    if(placeholder2 == 7){ //this determines if place holder 2 is rock
        if(placeholder1 == 5){//checking for winning condition
            winpoints();
        }else{
            if(placeholder1 == 3){//checking for winning condition
                winpoints(); 
            }
            losepoints();
        }
        losepoints();
    }
    if(placeholder2 == 6){ //this determines if place holder 2 is paper
        if(placeholder1 == 7){//checking for winning condition
            winpoints();
        }else{
            if(placeholder1 == 11){//checking for winning condition
                winpoints(); 
            }
            losepoints();
        }
        losepoints();
    }
    if(placeholder2 == 5){ //this determines if placeholder 2 sicssor
        if(placeholder1 == 6){//checking for winning condition
            winpoints();
        }else{
            if(placeholder1 == 3){//checking for winning condition
                winpoints(); 
            }
            losepoints();
        }
        losepoints();
    }
    if(placeholder2 == 3){ //this determines if placeholder 2 is lizard
        if(placeholder1 == 6){//checking for winning condition
            winpoints();
        }else{
            if(placeholder1 == 11){//checking for winning condition
                winpoints(); 
            }
            losepoints();
        }
        losepoints();
    }
    if(placeholder2 == 11){ //this determines if placeholder 2 is spock
        if(placeholder1 == 7){//checking for winning condition
            winpoints();
        }else{
            if(placeholder1 == 5){//checking for winning condition
                winpoints(); 
            }
            losepoints();
        }
        losepoints();
    }
    
}    

function winpoints(){//this dunction decides who wins the 2 way tie, and who to give the points to 
    if(draws == 1){//this is what determiens if player 1 and 2 get half a point
        alert("player1 and player2 win this round");
        p1points = p1points + .5;
        p2points = p2points + .5;
        p3points = p3points - 1;
        deciding_winner();//moves to the next round
    }
    if(draws == 2){//this is what determines if player 2 and 3 get points
        alert("player2 and player3 win this round");
        p1points = p1points - 1;
        p2points = p2points + .5;
        p3points = p3points + .5;
        deciding_winner();//moves to the next round   
    }
    if(draws == 3){//this is what deetermines if player 1 and3 get points 
        alert("player1 and player3 win this round");
        p1points = p1points + .5;
        p2points = p2points -  1;
        p3points = p3points + .5;
        deciding_winner();//moves to the next round    
    }
}

function losepoints(){//this function decides who loses the 2 way tie, who to give points and who to take it from
    if(draws == 1){// this is what determines if player 3 gets points
        alert("player1 and player2 lose this round");
        p1points = p1points - .5;
        p2points = p2points - .5;
        p3points = p3points + 1;
        deciding_winner();//moves to next round
    }
    if(draws == 2){//this is waht determines if player1 get points
        alert("player2 and player3 lose this round");
        p1points = p1points + 1;
        p2points = p2points - .5;
        p3points = p3points - .5;
        deciding_winner();//moves to next round   
    }
    if(draws == 3){//this is what determines if player2 get points 
        alert("player1 and player3 lose this round");
        p1points = p1points - .5;
        p2points = p2points + 1;
        p3points = p3points - .5;
        deciding_winner();//moves to next round    
    }
}

function p1wins(){//this assigns the points if player 1 wins 
    alert("Player1 wins this round");
    p2points = p2points - 1;
    p3points = p3points - 1;
    p1points = p1points + 2;
    deciding_winner();//moves to next round
}
function p2wins(){//this assigns the points if player 2 wins
    alert("Player2 wins this round");
    p2points = p2points + 2;
    p3points = p3points - 1;
    p1points = p1points - 1; 
    deciding_winner();//moves to next round 
}
function p3wins(){//this assigns the points if player 3 wins 
    alert("Player3 wins this round");
    p2points = p2points - 1;
    p3points = p3points + 2;
    p1points = p1points - 1;
    deciding_winner();//moves to next round     
}

function allout(){//this function will determine the winner of a 1v1v1
    placeholder1 = 0;
    placeholder2 = 0;
    placeholder3 = 0;
    Placeholder1 = player1;
    placeholder2 = player2;
    placeholder3 = player3;

    if(placeholder1 == 7){//this block will only work if player 1 is rock 
        if(placeholder2 + placeholder3 == 8){//its checking to see if player 2 and 3 are countered by player1 
            p1wins();
            deciding_winner();//moves to next round
        }else{
            if(placeholder2 + placeholder3 == 17){//this checks if player 2 and player 3 counters player 1 
                if(Placeholder2 == 6){ //this is checking if player 2 counter player 3 
                    p3wins();
                    deciding_winner();//moves to next round 
                }else{
                p2wins();
                deciding_winner();//moves to next round
                }
            }
            if(placeholder2 + placeholder3 == 16){ //this check if player 2 wins 
                if(placeholder2 == 11){
                    p2wins(); 
                    deciding_winner();//moves to next round
                }else{
                    p3wins();
                    deciding_winner();//moves to next round  
                }
                deciding_winner();
            }
        }
    }
    if(placeholder1 == 6){//this block will only work if player 1 is paper 
        if(placeholder2 + placeholder3 == 18){//its checking to see if player 2 and 3 are countered by player1
            p1wins();
            deciding_winner();//moves to next round
        }else{
            if(placeholder2 + placeholder3 == 8){//this checks if player 2 and player 3 counters player 1
                if(Placeholder2 == 5){ //this is checking if player 2 counter player 3
                    p3wins(); 
                    deciding_winner();//moves to next round
                }else{
                p2wins();
                deciding_winner();//moves to next round
                }
            }
            if(placeholder2 + placeholder3 == 14){//this check if player 2 wins 
                if(placeholder2 == 3){
                    p2wins();
                    deciding_winner();//moves to next round 
                }else{
                    p3wins();
                    deciding_winner();//moves to next round  
                }
                deciding_winner();
            }
        }
    }
    if(placeholder1 == 5){//this block will only work if player 1 is sicssor 
        if(placeholder2 + placeholder3 == 9){//its checking to see if player 2 and 3 are countered by player1
            p1wins();
            deciding_winner();//moves to next round
        }else{
            if(placeholder2 + placeholder3 == 18){//this checks if player 2 and player 3 counters player 1
                if(Placeholder2 == 11){//this is checking if player 2 counter player 3
                    p3wins();
                    deciding_winner();//moves to next round
                }else{
                p2wins();
                deciding_winner();//moves to next round
                }
            }
            if(placeholder2 + placeholder3 == 10){//this check if player 2 wins 
                if(placeholder2 == 7){
                    p2wins(); 
                    deciding_winner();//moves to next round
                }else{
                    p3wins();  
                    deciding_winner();//moves to next round
                }
                deciding_winner();
            }
        }
    }
    if(placeholder1 == 3){//this block will only work if player 1 is lizard 
        if(placeholder2 + placeholder3 == 17){//its checking to see if player 2 and 3 are countered by player1
            p1wins();
            deciding_winner();//moves to next round
        }else{
            if(placeholder2 + placeholder3 == 12){//this checks if player 2 and player 3 counters player 1
                if(Placeholder2 == 7){//this is checking if player 2 counter player 3
                    p3wins();
                    deciding_winner();//moves to next round 
                }else{
                p2wins();
                deciding_winner();//moves to next round
                }
            }
            if(placeholder2 + placeholder3 == 11){//this check if player 2 wins 
                if(placeholder2 == 5){
                    p2wins(); 
                    deciding_winner();//moves to next round
                }else{
                    p3wins();  
                    deciding_winner();//moves to next round
                }
                deciding_winner();
            }
        }
    }
    if(placeholder1 == 11){//this block will only work if player 1 is spock
        if(placeholder2 + placeholder3 == 12){//its checking to see if player 2 and 3 are countered by player1
            p1wins()
            deciding_winner();//moves to next round
        }else{
            if(placeholder2 + placeholder3 == 9){//this checks if player 2 and player 3 counters player 1
                if(Placeholder2 == 3){//this is checking if player 2 counter player 3
                    p3wins(); 
                    deciding_winner();//moves to next round
                }else{
                p2wins();
                deciding_winner();//moves to next round
                }
            }
            if(placeholder2 + placeholder3 == 13){//this check if player 2 wins 
                if(placeholder2 == 6){
                    p2wins();
                    deciding_winner();//moves to next round 
                }else{
                    p3wins(); 
                    deciding_winner();//moves to next round 
                }
                deciding_winner();
            }
        }
    }
}
    
