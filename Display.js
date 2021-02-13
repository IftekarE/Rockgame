function input(){//this is what displays messages on screen 
    idhold0 = 0;
    meshold0 = 0;
    meshold0 = inputslc;
    idhold0 = document.getElementById("can0");// its telling the program where to display the message 
    idhold0.innerHTML = meshold0;
}

function enter(){//this is what displayes the messages on screen 
    idhold10 = 0;
    meshold10 = 0;
    meshold10 = "Palyers please enter all 5 input";// this is setting the variable to the message that will be set 
    idhold10 = document.getElementById("can10");//this is telling the program where the message will be displayed 
    idhold10.innerHTML = meshold10;
    setting();//this is calling the code responsible for resetting the message board
    idhold1.innerHTML = meshold1;
    idhold2.innerHTML = meshold2;
    idhold3.innerHTML = meshold3;
    idhold4.innerHTML = meshold4;
    idhold5.innerHTML = meshold5;
    idhold6.innerHTML = meshold6;
    idhold7.innerHTML = meshold7;
    idhold8.innerHTML = meshold8;
    idhold9.innerHTML = meshold9;
}
function dont(){// tells the user to click arrow before starting 
    idhold10 = 0;
    meshold10 = 0;
    meshold10 = "Click the arrow to start";// this is setting the variable to the message that will be set 
    idhold10 = document.getElementById("can10");//this is telling the program where the message will be displayed 
    idhold10.innerHTML = meshold10;
}

function round1(){// this shows the resutlt of round1
    if(rounds == 0){
    setting();//calling for code to reset message board
    meshold1 = 1;
    meshold2 = p1choice[0];//lines 38 - 45 are determineing the messages to me displayed
    meshold3 = p2choice[0];
    meshold4 = p3choice[0];
    meshold5 = p1score[1];
    meshold6 = p2score[1]; 
    meshold7 = p3score[1];
    meshold8 = roundwinner[0];
    meshold9 = roundwinner[5];

    idhold1.innerHTML = meshold1;//lines 47- 55 is setting the location of where the messages should be displayed 
    idhold2.innerHTML = meshold2;
    idhold3.innerHTML = meshold3;
    idhold4.innerHTML = meshold4;
    idhold5.innerHTML = meshold5;
    idhold6.innerHTML = meshold6;
    idhold7.innerHTML = meshold7;
    idhold8.innerHTML = meshold8;
    idhold9.innerHTML = meshold9;
}
}
function round2(){// this shows the resutlt of round2
    if(rounds == 0){
    setting();//calling for code to reset message board
    meshold1 = 2;
    meshold2 = p1choice[1];//lines 62 - 69 are determineing the messages to me displayed
    meshold3 = p2choice[1];
    meshold4 = p3choice[1];
    meshold5 = p1score[2];
    meshold6 = p2score[2]; 
    meshold7 = p3score[2];
    meshold8 = roundwinner[1];
    meshold9 = roundwinner[5];

    idhold1.innerHTML = meshold1;//lines 71- 79 is setting the location of where the messages should be displayed 
    idhold2.innerHTML = meshold2;
    idhold3.innerHTML = meshold3;
    idhold4.innerHTML = meshold4;
    idhold5.innerHTML = meshold5;
    idhold6.innerHTML = meshold6;
    idhold7.innerHTML = meshold7;
    idhold8.innerHTML = meshold8;
    idhold9.innerHTML = meshold9;
}
}
function round3(){// this shows the resutlt of round3
    if(rounds == 0){
    setting();//calling for code to reset message board
    meshold1 = 3;
    meshold2 = p1choice[2];//lines 86 - 93 are determineing the messages to me displayed
    meshold3 = p2choice[2];
    meshold4 = p3choice[2];
    meshold5 = p1score[3];
    meshold6 = p2score[3]; 
    meshold7 = p3score[3];
    meshold8 = roundwinner[2];
    meshold9 = roundwinner[5];

    idhold1.innerHTML = meshold1;//lines 95- 103 is setting the location of where the messages should be displayed
    idhold2.innerHTML = meshold2;
    idhold3.innerHTML = meshold3;
    idhold4.innerHTML = meshold4;
    idhold5.innerHTML = meshold5;
    idhold6.innerHTML = meshold6;
    idhold7.innerHTML = meshold7;
    idhold8.innerHTML = meshold8;
    idhold9.innerHTML = meshold9;
}
}
function round4(){// this shows the resutlt of round4
    if(rounds == 0){
    setting();//calling for code to reset message board
    meshold1 = 4;
    meshold2 = p1choice[3];//lines 110 - 107 are determineing the messages to me displayed
    meshold3 = p2choice[3];
    meshold4 = p3choice[3];
    meshold5 = p1score[4];
    meshold6 = p2score[4]; 
    meshold7 = p3score[4];
    meshold8 = roundwinner[3];
    meshold9 = roundwinner[5];

    idhold1.innerHTML = meshold1;//lines 119- 127 is setting the location of where the messages should be displayed
    idhold2.innerHTML = meshold2;
    idhold3.innerHTML = meshold3;
    idhold4.innerHTML = meshold4;
    idhold5.innerHTML = meshold5;
    idhold6.innerHTML = meshold6;
    idhold7.innerHTML = meshold7;
    idhold8.innerHTML = meshold8;
    idhold9.innerHTML = meshold9;
}
}
function round5(){// this shows the resutlt of round5
    if(rounds == 0){
    setting();//calling for code to reset message board
    meshold1 = 4;
    meshold2 = p1choice[4];//lines 134 - 141 are determineing the messages to me displayed
    meshold3 = p2choice[4];
    meshold4 = p3choice[4];
    meshold5 = p1score[5];
    meshold6 = p2score[5]; 
    meshold7 = p3score[5];
    meshold8 = roundwinner[4];
    meshold9 = roundwinner[5];

    idhold1.innerHTML = meshold1;//lines 143- 151 is setting the location of where the messages should be displayed
    idhold2.innerHTML = meshold2;
    idhold3.innerHTML = meshold3;
    idhold4.innerHTML = meshold4;
    idhold5.innerHTML = meshold5;
    idhold6.innerHTML = meshold6;
    idhold7.innerHTML = meshold7;
    idhold8.innerHTML = meshold8;
    idhold9.innerHTML = meshold9;
}
}
function setting(){// this is what clears the message board it sets everthing to 0 
idhold1 = 0;
idhold2 = 0;
idhold3 = 0;
idhold4 = 0;
idhold5 = 0;
idhold6 = 0;
idhold7 = 0;
idhold8 = 0;
idhold9 = 0;

meshold1 = 0;
meshold2 = 0;
meshold3 = 0;
meshold4 = 0;
meshold5 = 0;
meshold6 = 0;
meshold7 = 0;
meshold8 = 0;
meshold9 = 0;
    idhold1 = document.getElementById("can1");
    idhold2 = document.getElementById("can2");
    idhold3 = document.getElementById("can3");
    idhold4 = document.getElementById("can4");
    idhold5 = document.getElementById("can5");
    idhold6 = document.getElementById("can6");
    idhold7 = document.getElementById("can7");
    idhold8 = document.getElementById("can8");
    idhold9 = document.getElementById("can9");
    
}
