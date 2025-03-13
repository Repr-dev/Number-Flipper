const prompt = require("prompt-sync")();

// NodeJS experience
console.log("\nWelcome!");
console.log("Type \"q\" to quit at any time.\n");

while (true) {
    let res = prompt("Number to flip > ");

    if(res === "q") break;

    console.log(`${turnCalc(res)}\n`);
}

/**
 * 
 * @param {Number, String} num - input value (string is recommended so that numbers with leading zeros can be inputted)
 * @returns {String} flipped number
 *  
 */
function turnCalc(num) {
    // Finds the stringified input, but reversed
    let reversed = String(num).split("").reverse().join("");

    // Does the replacements, making use of regular expressions that have the global (g) modifier
    reversed = reversed
        .replace(/1/g, "I")
        .replace(/2/g, "Z")
        .replace(/3/g, "E")
        .replace(/4/g, "H")
        .replace(/5/g, "S")
        .replace(/6/g, "G")
        .replace(/7/g, "L")
        .replace(/8/g, "B")
        .replace(/0/g, "O");

    return reversed;
}
