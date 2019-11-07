    function Player3R(){//this segment of code is for player 3's input ROCK
    if(entry == 1){
        if(P31 == 0){
            P31 = 7;
        }else{
            if(P32 == 0){
                P32 = 7;
            }else{ 
                if(P33 == 0){
                    P33 = 7;
                }else{
                    if(P34 == 0){
                        P34 = 7;
                    }else{ 
                        if(P35 == 0){
                            P35 = 7;}
                        }
                    }
                }
            } 
        p3r = p3r + 1;  
    }else{
        alert("click the arrow to reset");
    }     
    }
    function Player3P(){//this segment of code is for player 3's input PAPER
    if(entry == 1){
        if(P31 == 0){
            P31 = 6;
        }else{
            if(P32 == 0){
                P32 = 6;
            }else{ 
                if(P33 == 0){
                    P33 = 6;
                }else{
                    if(P34 == 0){
                        P34 = 6;
                    }else{ 
                        if(P35 == 0){
                            P35 = 6;}
                        }
                    }
                }
            } 
        p3p = p3p + 1;   
    }else{
        alert("click the arrow to reset");
    }  
    }
    function Player3S(){//this segment of code is for player 3's input SICSSOR
    if(entry == 1){// this perticular if statment determines which round the game is in 
        if(P31 == 0){
            P31 = 5;
        }else{
            if(P32 == 0){
                P32 = 5;
            }else{ 
                if(P33 == 0){
                    P33 = 5;
                }else{
                    if(P34 == 0){
                        P34 = 5;
                    }else{ 
                        if(P35 == 0){
                            P35 = 5;}
                        }
                    }
                }
            } 
        p3s = p3s + 1;
    }else{
        alert("click the arrow to reset");
    }    
    }
    function Player3L(){//this segment of code is for player 3's input LIZARD
    if(entry == 1){
        if(P31 == 0){
            P31 = 3;
        }else{
            if(P32 == 0){
                P32 = 3;
            }else{ 
                if(P33 == 0){
                    P33 = 3;
                }else{
                    if(P34 == 0){
                        P34 = 3;
                    }else{ 
                        if(P35 == 0){
                            P35 = 3;}
                        }
                    }
                }
            } 
        p3l = p3l + 1; 
    }else{
        alert("click the arrow to reset");
    }     
    }
    function Player3SP(){//this segment of code is for player 3's input SPOCK
    if(entry == 1){
        if(P31 == 0){
            P31 = 11;
        }else{
            if(P32 == 0){
                P32 = 11;
            }else{ 
                if(P33 == 0){
                    P33 = 11;
                }else{
                    if(P34 == 0){
                        P34 = 11;
                    }else{ 
                        if(P35 == 0){
                            P35 = 11;}
                        }
                    }
                }
            } 
        p3sp = p3sp + 1;
    }else{
        alert("click the arrow to reset");
    }
    }