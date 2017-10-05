var Rythm = require('rythm.js');

module.exports = function startJam () {
    var rythm = new Rythm();
    rythm.setMusic("/utils/strobe.mp3");
    rythm.start();
}