function Player1() {//this function selects the sign for player 1
        player1 = 0;
        numbergen = 0;
        numbergen = Math.floor(Math.random() * 5 + 1); //this is a random number genarator
        if (numbergen == 1) { // this is looking to see if its rock
            player1 = 7;
            p1r = p1r + 1;
            p1choice.push("Rock");         
        }
        if (numbergen == 2) { //this is looking to see if its paper 
            player1 = 6;
            p1p = p1p + 1;
            p1choice.push("Paper");
        }
        if (numbergen == 3) { //this is looking to see if its sicssors 
            player1 = 5;
            p1s = p1s + 1;
            p1choice.push("Scissor");
        }
        if (numbergen == 4) { //this is looking to see if its lizard 
            player1 = 3;
            p1l = p1l + 1;
            p1choice.push("Lizard");
        }
        if (numbergen == 5) { //this is looking to see if its spock
            player1 = 11;
            p1sp = p1sp + 1;
            p1choice.push("Spock");
        }
    }