function allout(){//this function will determine the winner of a 1v1v1
    placeholder1 = 0;
    placeholder2 = 0;
    placeholder3 = 0;
    Placeholder1 = player1;
    placeholder2 = player2;
    placeholder3 = player3;
    
    if(placeholder1 == 7){
        rock();
    }else{}
    if(placeholder1 == 6){
        paper();
    }else{}
    if(placeholder1 == 5){
        sicssor();
    }else{}
    if(placeholder1 == 3){
        lizard();
    }else{}
    if(placeholder1 == 11){
        spock();
    }else{
        allout();
    }
}

function rock(){
    if(placeholder1 == 7){//this block will only work if player 1 is rock 
        if(placeholder2 + placeholder3 == 8){//its checking to see if player 2 and 3 are countered by player1 
            p1wins();
        }else{
            if(placeholder2 + placeholder3 == 17){//this checks if player 2 and player 3 counters player 1 
                if(Placeholder2 == 6){ //this is checking if player 2 counter player 3 
                    p3wins();
                }else{
                p2wins();
                }
            }
            if(placeholder2 + placeholder3 == 16){ //this check if player 2 wins 
                if(placeholder2 == 11){
                    p2wins(); 
                }else{
                    p3wins();
                }
            }
        }
    }
}
function paper(){   
    if(placeholder1 == 6){//this block will only work if player 1 is paper 
        if(placeholder2 + placeholder3 == 18){//its checking to see if player 2 and 3 are countered by player1
            p1wins();
        }else{
            if(placeholder2 + placeholder3 == 8){//this checks if player 2 and player 3 counters player 1
                if(Placeholder2 == 5){ //this is checking if player 2 counter player 3
                    p3wins(); 
                }else{
                p2wins();
                }
            }
            if(placeholder2 + placeholder3 == 14){//this check if player 2 wins 
                if(placeholder2 == 3){
                    p2wins();
                }else{
                    p3wins(); 
                }                
            }
        }
    }
}
function sicssor(){
    if(placeholder1 == 5){//this block will only work if player 1 is sicssor 
        if(placeholder2 + placeholder3 == 9){//its checking to see if player 2 and 3 are countered by player1
            p1wins();
        }else{
            if(placeholder2 + placeholder3 == 18){//this checks if player 2 and player 3 counters player 1
                if(Placeholder2 == 11){//this is checking if player 2 counter player 3
                    p3wins();
                }else{
                p2wins();
                }
            }
            if(placeholder2 + placeholder3 == 10){//this check if player 2 wins 
                if(placeholder2 == 7){
                    p2wins(); 
                }else{
                    p3wins();  
                }
            }
        }
    }
}
function lizard(){
    if(placeholder1 == 3){//this block will only work if player 1 is lizard 
        if(placeholder2 + placeholder3 == 17){//its checking to see if player 2 and 3 are countered by player1
            p1wins(); 
        }else{
            if(placeholder2 + placeholder3 == 12){//this checks if player 2 and player 3 counters player 1
                if(Placeholder2 == 7){//this is checking if player 2 counter player 3
                    p3wins();
                }else{
                p2wins();
                }
            }
            if(placeholder2 + placeholder3 == 11){//this check if player 2 wins 
                if(placeholder2 == 5){
                    p2wins(); 
                }else{
                    p3wins();  
                }
            }
        }
    }
}
function spock(){
    if(placeholder1 == 11){//this block will only work if player 1 is spock
        if(placeholder2 + placeholder3 == 12){//its checking to see if player 2 and 3 are countered by player1
            p1wins();
        }else{
            if(placeholder2 + placeholder3 == 9){//this checks if player 2 and player 3 counters player 1
                if(Placeholder2 == 3){//this is checking if player 2 counter player 3
                    p3wins(); 
                }else{
                p2wins();
                }
            }
            if(placeholder2 + placeholder3 == 13){//this check if player 2 wins 
                if(placeholder2 == 6){
                    p2wins();
                }else{
                    p3wins(); 
                }
            }
        }
    }
}