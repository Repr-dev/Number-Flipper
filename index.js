const prompt = require("prompt-sync")();

// NodeJS experience
console.log("\nWelcome!");
console.log('Type "q" to quit at any time.\n');

while (true) {
    let res = prompt("Number to flip > ");

    if (res === "q") break;

    let flipped = turnCalc(res);

    if(flipped === "llun") break; // Allows user to exit with [ctrl+C]
    else console.log(`${flipped}\n`);
}

/**
 * The number flipping function
 *
 * @param {(number|string)} num - input value (string is recommended so that numbers with leading zeros can be inputted)
 * @returns {string} flipped number
 *
 */
function turnCalc(num) {
    // Finds the stringified input, but reversed
    let reversed = String(num).split("").reverse().join("");

    // Does the replacements
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
