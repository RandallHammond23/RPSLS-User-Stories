"use strict";

const {Player} = require("./Player");




class Ai extends Player{
    constructor(name, type){
        super(name, type, gestures);
        this.name;
        this.type = Ai;
    }
    randomGestures(gestures){
        let randomGestures = Math.floor(Math.random(gestures) * this.gestures);
        return randomGestures
    }
}



module.exports = {
    Ai:Ai
}