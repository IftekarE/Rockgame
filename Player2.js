function Player2() {//this function selects the sign for palyer 2
        player2 = 0;
        var numbergen = 0;
        numbergen = Math.floor(Math.random() * 5 + 1); //this is a random number genarator
        if (numbergen == 1) { // this is looking to see if its rock
            player2 = 7;
            p2r = p2r + 1;
            p2choice.push("Rock");
        }
        if (numbergen == 2) { //this is looking to see if its paper 
            player2 = 6;
            p2p = p2p + 1;
            p2choice.push("Paper");
        }
        if (numbergen == 3) { //this is looking to see if its sicssors 
            player2 = 5;
            p2s = p2s + 1;
            p2choice.push("Scissor");
        }
        if (numbergen == 4) { //this is looking to see if its lizard 
            player2 = 3;
            p2l = p2l + 1;
            p2choice.push("Lizard");
        }
        if (numbergen == 5) { //this is looking to see if its spock
            player2 = 11;
            p2sp = p2sp + 1;
            p2choice.push("Spock");
        }
    }