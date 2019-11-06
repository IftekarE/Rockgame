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

