"use strict";

const {Player} = require("./Player");




class Ai extends Player{
    constructor(name, type){
        super(name, type);
        this.name;
        this.type = Ai;
    }
    randomGestures(gestures){
        let randomGestures = Math.floor(Math.random() * this.gestures.length);
        return randomGestures;
    }
}



module.exports = {
    Ai:Ai
}