const { rollies } = require('./dice');

function textEd(str) {
        if(str.search("You rolled a:") != -1){
            const roll = str.substring(str.indexOf(':')+1);
            const numOfDice = parseInt(roll.substring(0,roll.indexOf('d')));
            const diceSize = parseInt(roll.substring(roll.indexOf('d')+1));
            const result = rollies(numOfDice,diceSize);
            const newStr = str.split(':')[0];
            const endStr = newStr+" **"+result+"**!";
            return endStr
        }else{
            return str;
        }
    };
exports.textEd = textEd;