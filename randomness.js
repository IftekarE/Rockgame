function random(){// this is the code that determines if the program is random, to note every block of code is the same except for the player and their varibles there for commenting everything is not neccessary 
total = 0;
expected = 0;
margin = 0;
    
total = loop;
loop = 0;
expected = total * 0.2;//this is setting the perfect amount of a certain sign 
margin = expected * 0.05;// this is what determiens the margin of error 

    //player1 randomness start
    if(p1r == expected){// this is checking if rock has been selected the desired amount of time
        console.log("Player1: rock is random");//saying rock is random
        p1r = 0;
    }else{
        if(p1r == p1r - margin){// this is checking if rock has been selected the plus of minus the margin of error 
            console.log("Player1: rock is random");//saying rock is random
            p1r = 0;
        }else{
            if(p1r == p1r + margin){
                console.log("Player1: rock is random"); //saying rock is random
                p1r = 0;
            }else{
                console.log("player1: rock is not random");//saying that rock is not random
                p1r = 0;
            }  
        }
    }

    if(p1p == expected){
        console.log("Player1: paper is random");
        p1p = 0;
    }else{
        if(p1p == p1p - margin){
            console.log("Player1: paper is random");
            p1p = 0;
        }else{
            if(p1p == p1p + margin){
                console.log("Player1: paper is random"); 
                p1p = 0;
            }else{
                console.log("player1: paper is not random");
                p1p = 0;
            }  
        }
    }

    if(p1s == expected){
        console.log("Player1: scissor is random");
        p1s = 0;
    }else{
        if(p1s == p1s - margin){
            console.log("Player1: scissor is random");
            p1s = 0;
        }else{
            if(p1s == p1s + margin){
                console.log("Player1: scissor is random"); 
                p1s = 0;
            }else{
                console.log("player1: scissor is not random");
                p1s = 0;
            }  
        }
    }

    if(p1l == expected){
        console.log("Player1: lizard is random");
        p1l = 0;
    }else{
        if(p1l == p1l - margin){
            console.log("Player1: lizard is random");
            p1l = 0;
        }else{
            if(p1l == p1l + margin){
                console.log("Player1: lizard is random"); 
                p1l = 0;
            }else{
                console.log("player1: lizard is not random");
                p1l = 0;
            }  
        }
    } 

    if(p1sp == expected){
        console.log("Player1: spock is random");
        p1sp = 0;
    }else{
        if(p1sp == p1sp - margin){
            console.log("Player1: spock is random");
            p1sp = 0;
        }else{
            if(p1sp == p1sp + margin){
                console.log("Player1: spock is random"); 
                p1sp = 0;
            }else{
                console.log("player1: spock is not random");
                p1sp = 0;
            }  
        }
    }
    //player1 ramdomness end
    
    //player2 randomness start
     if(p2r == expected){
        console.log("Player2: rock is random");
        p2r = 0;
    }else{
        if(p2r == p2r - margin){
            console.log("Player2: rock is random");
            p2r = 0;
        }else{
            if(p2r == p2r + margin){
                console.log("Player2: rock is random"); 
                p2r = 0;
            }else{
                console.log("Player2: rock is not random");
                p2r = 0;
            }  
        }
    }

    if(p2p == expected){
        console.log("Player2: paper is random");
        p2p = 0;
    }else{
        if(p2p == p2p - margin){
            console.log("Player2: paper is random");
            p2p = 0;
        }else{
            if(p2p == p2p + margin){
                console.log("Player2: paper is random"); 
                p2p = 0;
            }else{
                console.log("Player2: paper is not random");
                p2p = 0;
            }  
        }
    }

    if(p2s == expected){
        console.log("Player2: scissor is random");
        p2s = 0;
    }else{
        if(p2s == p2s - margin){
            console.log("Player2: scissor is random");
            p2s = 0;
        }else{
            if(p2s == p2s + margin){
                console.log("Player2: scissor is random"); 
                p2s = 0;
            }else{
                console.log("Player2: scissor is not random");
                p2s = 0;
            }  
        }
    }

    if(p2l == expected){
        console.log("Player2: lizard is random");
        p2l = 0;
    }else{
        if(p2l == p2l - margin){
            console.log("Player2: lizard is random");
            p2l = 0;
        }else{
            if(p2l == p2l + margin){
                console.log("Player2: lizard is random"); 
                p2l = 0;
            }else{
                console.log("Player2: lizard is not random");
                p2l = 0;
            }  
        }
    } 

    if(p2sp == expected){
        console.log("Player2: spock is random");
        p2sp = 0;
    }else{
        if(p2sp == p2sp - margin){
            console.log("Player2: spock is random");
            p2sp = 0;
        }else{
            if(p2sp == p2sp + margin){
                console.log("Player2: spock is random"); 
                p2sp = 0;
            }else{
                console.log("Player2: spock is not random");
                p2sp = 0;
            }  
        }
    }
    //player2 ramdomness end

    //player3 randomness start
    if(p3r == expected){
        console.log("Player3: rock is random");
        p3r = 0;
    }else{
        if(p3r == p3r - margin){
            console.log("Player3: rock is random");
            p3r = 0;
        }else{
            if(p3r == p3r + margin){
                console.log("Player3: rock is random"); 
                p3r = 0;
            }else{
                console.log("Player3: rock is not random");
                p3r = 0;
            }  
        }
    }

    if(p3p == expected){
        console.log("Player3: paper is random");
        p3p = 0;
    }else{
        if(p3p == p3p - margin){
            console.log("Player3: paper is random");
            p3p = 0;
        }else{
            if(p3p == p3p + margin){
                console.log("Player3: paper is random"); 
                p3p = 0;
            }else{
                console.log("Player3: paper is not random");
                p3p = 0;
            }  
        }
    }

    if(p3s == expected){
        console.log("Player3: scissor is random");
        p3s = 0;
    }else{
        if(p3s == p3s - margin){
            console.log("Player3: scissor is random");
            p3s = 0;
        }else{
            if(p3s == p3s + margin){
                console.log("Player3: scissor is random"); 
                p3s = 0;
            }else{
                console.log("Player3: scissor is not random");
                p3s = 0;
            }  
        }
    }

    if(p3l == expected){
        console.log("Player3: lizard is random");
        p3l = 0;
    }else{
        if(p3l == p3l - margin){
            console.log("Player3: lizard is random");
            p3l = 0;
        }else{
            if(p3l == p3l + margin){
                console.log("Player3: lizard is random"); 
                p3l = 0;
            }else{
                console.log("Player3: lizard is not random");
                p3l = 0;
            }  
        }
    } 

    if(p3sp == expected){
        console.log("Player3: spock is random");
        p3sp = 0;
    }else{
        if(p3sp == p3sp - margin){
            console.log("Player3: spock is random");
            p3sp = 0;
        }else{
            if(p3sp == p3sp + margin){
                console.log("Player3: spock is random"); 
                p3sp = 0;
            }else{
                console.log("Player3: spock is not random");
                p3sp = 0;
            }  
        }
    }
    //player3 ramdomness end
}