"use strict";

const {Human} = require("./Human");
const {Ai} = require("./Ai");
const Player = require("./Player");



class Game {
    constructor() {
        this.HumanOne = new Human( "Jake", Human);
        this.HumanTwo = new Human( "Ethan", Human);
        this.AiPlayer = new Ai("AiOne", Ai);



        runGame()
            this.displayRules();

            while(this.HumanOne.score < 3 && this.HumanTwo.score || this.AiPlayer.score < 3) {
               
                if(playerOneTotal > playerTwoTotal) {
                  console.log(this.playerOne.name + " wins this round!");
                  this.playerOne.score++;
                }
                else if(playerTwoTotal > playerOneTotal) {
                  console.log(this.playerTwo.name + " wins this round!");
                  this.playerTwo.score++;
                }
                else {
                  console.log("Wow! You managed to tie after each rolling " + this.dice.length + " dice!");
                }
              }

        }




        displayRules() {
            console.log("Welcome to the game of Rock, Paper, Scissors.");
            console.log("You can play vs a human or AI player.");
            console.log("Both players will pick a gesture, the player who pick the winning gesture gains a poin.");
            console.log("The game will run to one of the players get 3 wins.");
            console.log("List of gestures and what they beat.");
            console.log("Rock: sicssors, lizard","\n"+ "Scissors: Paper, Lizard","\n" + "Paper: Rock, Spock", "\n" + "Lizard: Spock, Paper", "\n" + "Spock: Rock, Scissors");

        }






    }
}











