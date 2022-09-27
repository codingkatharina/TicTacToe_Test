const prompt = require('prompt-sync')();

//Variables
//Texts
const INTRO_TEXT = "What Mode would you like to play?";
const GAME_MODES = [`1. Human vs Human \n`, `2. Random AI vs Random AI \n`, `3. Human vs Random AI \n`, `4. Human vs Unbeatable AI \n`];
const CHOOSE_MODES = "Choose by entering number in front of option."; 
const GAME_MODE_TEXT = "You chose: ";
const MOVE_INSTRUCTION = "Please enter a move by typing a possible position (Like: a1)."
const WRONG_ENTRY = "Falsche Eingabe"

let gameIsRunning = true;
let countMoves = 0; 

let Player1 = " x";
let Player2 = " o";

let GRID = [["a1","a2","a3"], ["b1","b2","b3"], ["c1","c2","c3"]];

let GRID2 = " a1 | a2 | a3  \n"+
                "----|----|---- \n"+
               " b1 | b2 | b3  \n"+
               "----|----|---- \n"+
               " c1 | c2 | c3  \n";


let NUM_PICKED = [];
let MOVES_MADE = [];

function displayText(text) {
    console.log(text);
}

//Functions

function displayGRID() {            //displays playing board
    console.log(GRID2);             
}

function getUserInput() {
    let userMove = prompt(displayText(MOVE_INSTRUCTION)).toUpperCase();     //User gives moving input (e.g:B2,C1,...)
    MOVES_MADE.push(userMove);                                              //Input is logged into Array 
}

function checkUserInput (input,Player) {                                       //add placeholder
    
    if (input === "A1") {
            GRID[0].splice(0,1,Player);
            console.log(GRID2.replace("a1",Player));  
            console.log(GRID);                          //an Stelle A1 wird mit splice ein X eingesetzt                                           //neues (untereinander) Grid wird durch function angezeigt
            }                                    
    else if (input === "A2") {
            GRID[0].splice(1,1,Player);
            console.log(GRID2.replace("a2",Player));
            console.log(GRID);
            }
    else if (input === "A3") {
            GRID[0].splice(2,1,Player);
            console.log(GRID2.replace("a3",Player));
            console.log(GRID);
            }
    else if (input === "B1") {
            GRID2.replace("b1",Player);
            console.log(GRID[1].splice(0,1,Player));
            console.log(GRID);
            }
    else if (input === "B2") {
            console.log(GRID2.replace("b2",Player));
            GRID[1].splice(1,1,Player);
            console.log(GRID);
            }
    else if (input === "B3") {
            console.log(GRID2.replace("b3",Player));
            GRID[1].splice(2,1,Player);
            console.log(GRID);
            }
    else if (input === "C1") {
            console.log(GRID2.replace("c1",Player));
            GRID[2].splice(0,1,Player);
            console.log(GRID);
            }
    else if (input === "C2") {
            console.log(GRID2.replace("c2",Player));
            GRID[2].splice(1,1,Player);
            console.log(GRID);
            }
    else if (input === "C3") {
            console.log(GRID2.replace("c3",Player));
            GRID[2].splice(2,1,Player);
            console.log(GRID);
            }
    else  {displayText(WRONG_ENTRY)};
}

function checkBoard (Player) {
    if (MOVES_MADE.length > 1) {                    //wenn bereits ein move gemacht wurde
    for (i=0; i<= MOVES_MADE.length; i++) {         //so viele moves wie gemacht wurden, werden im loop ausgefüllt
        GRID2.replace(MOVES_MADE[2],Player)
    }
}
}

function checkPriorBoard (Player) {
    if (MOVES_MADE.length > 1) {                    //wenn bereits ein move gemacht wurde
        for (i=0; i<= MOVES_MADE.length; i++) { 
            if (MOVES_MADE.includes("a1")) {
                GRID2.replace("a1",Player);
    }       else if (MOVES_MADE.includes("a2")){
                GRID2.replace("a2",Player);
    }       else if (MOVES_MADE.includes("a3")) {
                GRID2.replace("a3",Player);
    }       else if (MOVES_MADE.includes("b1")) {
                GRID2.replace("b1",Player);
    }       else if (MOVES_MADE.includes("b2")) {
                GRID2.replace("b2",Player);
    }       else if (MOVES_MADE.includes("b3")) {
                GRID2.replace("b3",Player);
    }       else if (MOVES_MADE.includes("c1")) {
                GRID2.replace("c1",Player);
    }       else if (MOVES_MADE.includes("c2")) {
                GRID2.replace("c2",Player);
    }       else if (MOVES_MADE.includes("c3")) {
                GRID2.replace("c3",Player);
}
}
    }
}

function HumanVsHuman () {
    displayText(`${GAME_MODE_TEXT}: ${GAME_MODES[0]}`);     //displaying text: You chose 1. Human vs Human
    while(gameIsRunning) {
        displayGRID(); 
        getUserInput();                                         //asks player1 for a move
        checkUserInput(MOVES_MADE[0],Player1);                  
        checkPriorBoard(Player1); 
        getUserInput();                                         //asks player2 for a move
        checkUserInput(MOVES_MADE[1],Player2);   
        checkPriorBoard(Player2);
        getUserInput();                                         //asks player1 for a move
        checkUserInput(MOVES_MADE[2],Player1);                  
        checkPriorBoard(Player1); 
        getUserInput();                                         //asks player1 for a move
        checkUserInput(MOVES_MADE[3],Player2);                  
        checkPriorBoard(Player2);
        getUserInput();                                         //asks player1 for a move
        checkUserInput(MOVES_MADE[4],Player1);                  
        checkPriorBoard(Player1);
        getUserInput();                                         //asks player1 for a move
        checkUserInput(MOVES_MADE[5],Player2);                  
        checkPriorBoard(Player2);
        getUserInput();                                         //asks player1 for a move
        checkUserInput(MOVES_MADE[6],Player1);                  
        checkPriorBoard(Player1);
        getUserInput();                                         //asks player1 for a move
        checkUserInput(MOVES_MADE[7],Player2);                  
        checkPriorBoard(Player2); 
        getUserInput();                                         //asks player1 for a move
        checkUserInput(MOVES_MADE[8],Player1);                  
        checkPriorBoard(Player1);
        getUserInput();                                         //asks player1 for a move
        checkUserInput(MOVES_MADE[9],Player2);                  
        checkPriorBoard(Player2);                      
    }
}

function RandomVsRandom () {
    displayText(`${GAME_MODE_TEXT}: ${GAME_MODES[1]}`);     //displaying text: You chose 2. Random AI vs Random AI
    displayGRID(); 
    getUserInput();                                         //asks player for a move
    checkUserInput(MOVES_MADE[0]);
}

function HumanVsRandom () {
    displayText(`${GAME_MODE_TEXT}: ${GAME_MODES[2]}`);     //displaying text: You chose 3. Human vs Random AI
    displayGRID(); 
    getUserInput();                                         //asks player for a move
    checkUserInput(MOVES_MADE[0]);
}

function HumanVsUnbeatable () {
    displayText(`${GAME_MODE_TEXT}: ${GAME_MODES[3]}`);     //displaying text: You chose 4. Human vs Unbeatable AI
    displayGRID(); 
    getUserInput();                                         //asks player for a move
    checkUserInput(MOVES_MADE[0]);
}



function main () {
displayText(INTRO_TEXT);
displayText(GAME_MODES);
let playMode = prompt(displayText(CHOOSE_MODES));
NUM_PICKED.push(playMode);
if (Number(NUM_PICKED[0]) === 1) {
    HumanVsHuman();
} else if (Number(NUM_PICKED[0]) ===2) {
    RandomVsRandom();
} else if (Number(NUM_PICKED[0]) ===3) {
    HumanVsRandom();
} else if (Number(NUM_PICKED[0]) ===4) {
    HumanVsUnbeatable();
} else {displayText("WRONG ENTRY: This mode doesn't exist")}


if (playMode === 1) {
    displayText(`${GAME_MODE_TEXT}: + ${GAME_MODES[0]}`);      //displaying text: You chose 1. Human vs Human
} else if (playMode ===2) {
    displayText(`${GAME_MODE_TEXT}: + ${GAME_MODES[1]}`);      //displaying text: You chose 2. Random AI vs Random AI
} else if (playMode ===3) {
    displayText(`${GAME_MODE_TEXT}: + ${GAME_MODES[2]}`);      //displaying text: You chose 3. Human vs Random AI
} else if (playMode ===4) {
    displayText(`${GAME_MODE_TEXT}: + ${GAME_MODES[3]}`);      //displaying text: You chose 4. Human vs Unbeatable AI
}

} //main end           

main();

/*
const (DATA) = require("./date.js");

console.log("DATA");
*/

