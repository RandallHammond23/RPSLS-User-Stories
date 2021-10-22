"use strict";

const {Player} = require("./Player");
const prompt = require('prompt-sync');



class Human extends Player{
    constructor(name, type){
        super(name, type);
        this.name;
        this.type = Human;
    }


    pickGestures(){
        let userInput = prompt("What gesture would you like to use?");
        userInput;
        if(userInput = "Rock"){
            return userInput;
        }
        else if(userInput = "Scissors"){
            return userInput;
        }
        else if(userInput = "Paper"){
            return userInput;

        }
        else if(userInput = "Lizard"){
            return userInput;
        }
        else if(userInput = "Spock"){
            return userInput;
        
        
    }
    else{
        this.pickGestures();
    }

    }
    
   
}





module.exports = {
    Human: Human
}