    function Player3R(){//this segment of code is for player 3's input ROCK
    if(entry == 1){
        if(inputslc < 5){
            inputslc = inputslc + 1;
            input();
            if(P31 == 0){
                P31 = 7;
                p3choice.push("Rock");
            }else{
                if(P32 == 0){
                    P32 = 7;
                    p3choice.push("Rock");
                }else{ 
                    if(P33 == 0){
                        P33 = 7;
                        p3choice.push("Rock");
                    }else{
                        if(P34 == 0){
                            P34 = 7;
                            p3choice.push("Rock");
                        }else{ 
                            if(P35 == 0){
                                P35 = 7;
                                p3choice.push("Rock");}
                            }
                        }
                    }
                } 
            p3r = p3r + 1;
        }
    }else{
        dont();
    }     
    }
    function Player3P(){//this segment of code is for player 3's input PAPER
    if(entry == 1){
        if(inputslc < 5){
            inputslc = inputslc + 1;
            input();
            if(P31 == 0){
                P31 = 6;
                p3choice.push("Paper");
            }else{
                if(P32 == 0){
                    P32 = 6;
                    p3choice.push("Paper");
                }else{ 
                    if(P33 == 0){
                        P33 = 6;
                        p3choice.push("Paper");
                    }else{
                        if(P34 == 0){
                            P34 = 6;
                            p3choice.push("Paper");
                        }else{ 
                            if(P35 == 0){
                                P35 = 6;
                                p3choice.push("Paper");}
                            }
                        }
                    }
                } 
            p3p = p3p + 1;
        }  
    }else{
        dont();
    }  
    }
    function Player3S(){//this segment of code is for player 3's input SICSSOR
    if(entry == 1){// this perticular if statment determines which round the game is in 
        if(inputslc < 5){
            inputslc = inputslc + 1;
            input();
            if(P31 == 0){
                P31 = 5;
                p3choice.push("Scissor");
            }else{
                if(P32 == 0){
                    P32 = 5;
                    p3choice.push("Scissor");
                }else{ 
                    if(P33 == 0){
                        P33 = 5;
                        p3choice.push("Scissor");
                    }else{
                        if(P34 == 0){
                            P34 = 5;
                            p3choice.push("Scissor");
                        }else{ 
                            if(P35 == 0){
                                P35 = 5;
                                p3choice.push("Scissor");}
                            }
                        }
                    }
                } 
            p3s = p3s + 1;
        }
    }else{
        dont();
    }    
    }
    function Player3L(){//this segment of code is for player 3's input LIZARD
    if(entry == 1){
        if(inputslc < 5){
            inputslc = inputslc + 1;
            input();
            if(P31 == 0){
                P31 = 3;
                p3choice.push("Lizard");
            }else{
                if(P32 == 0){
                    P32 = 3;
                    p3choice.push("Lizard");
                }else{ 
                    if(P33 == 0){
                        P33 = 3;
                        p3choice.push("Lizard");
                    }else{
                        if(P34 == 0){
                            P34 = 3;
                            p3choice.push("Lizard");
                        }else{ 
                            if(P35 == 0){
                                P35 = 3;
                                p3choice.push("Lizard");}
                            }
                        }
                    }
                } 
            p3l = p3l + 1; 
        }
    }else{
        dont();
    }     
    }
    function Player3SP(){//this segment of code is for player 3's input SPOCK
    if(entry == 1){
        if(inputslc < 5){
            inputslc = inputslc + 1;
            input();
            if(P31 == 0){
                P31 = 11;
                p3choice.push("Spock");
            }else{
                if(P32 == 0){
                    P32 = 11;
                    p3choice.push("Spock");
                }else{ 
                    if(P33 == 0){
                        P33 = 11;
                        p3choice.push("Spock");
                    }else{
                        if(P34 == 0){
                            P34 = 11;
                            p3choice.push("Spock");
                        }else{ 
                            if(P35 == 0){
                                P35 = 11;
                                p3choice.push("Spock");}
                            }
                        }
                    }
                } 
            p3sp = p3sp + 1;
        }
    }else{
        dont();
    }
    }