"use strict";

const {Player} = require("./Player");




class Ai extends Player{
    constructor(name, type, gestures){
        super(name, type, gestures);
        this.name = Ai1;
        this.type = Ai
        this.gestures;
    }
    randomGestures(gestures){
        let randomGestures = Math.floor(Math.random(gestures) * this.gestures);
        return randomGestures
    }
}