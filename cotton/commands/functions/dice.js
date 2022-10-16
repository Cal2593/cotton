function rollies(numOfDice, diceSize) {
var total = 0;
    for (i=0; i<numOfDice;i++) {
        total = total + Math.floor(Math.random()*diceSize +1);
    }
    return total;
};
exports.rollies = rollies;