"use strict";

const {Player} = require("./Player");



class Human extends Player{
    constructor(name, type, gestures){
        super(name, type, gestures);
        this.name = Human1;
        this.type = Human;
        this.gestures;
    }

    pickGesture(gestures){
        let pickGesture = userInput = prompt("What gesture would you like to use?");
        switch(gestures){
            case "Rock":
                pickGesture = "Rock"
            break;
            case "Paper":
                pickGesture = "Paper"
            break;
            case "Scissors":
                pickGesture = "Scissors"
            break;
            case "Lizard":
                pickGesture = "Lizard"
            break;
            case "Spock":
                pickGesture = "Spock"
            break;
        }
        return pickGesture;
    }
}