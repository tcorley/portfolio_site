var Rythm = require('rythm.js');

module.exports = function startJam () {
    var rythm = new Rythm();
    rythm.setMusic("http://17.mydl.host/Free/Full%20Archive/Forein%20Best/Billboard/2017/04/11/Hot%20100%20Billboard%20320/03%20-%20The%20Chainsmokers%20-%20Something%20Just%20Like%20This.mp3");
    rythm.start();
}