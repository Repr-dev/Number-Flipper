const prompt = require("prompt-sync")();

// NodeJS experience
console.log("\nWelcome!");
while(true) {
    let res = prompt("Number to flip > ");
    console.log(`\nn${turnCalc(res)}\n\n`);
}

// Flip function
function turnCalc(num) {
    let reversed = Number(String(num).split("").reverse().join(""));
    reversed.replace(/\./g, "");

    for (let i = 0; i < reversed.length; i++) {
        let replacement = "";
        switch (reversed[i]) {
            case "1":
                replacement = "I";
                break;
            case "2":
                replacement = "Z";
                break;
            case "3":
                replacement = "E";
                break;
            case "4":
                replacement = "H";
                break;
            case "5":
                replacement = "S";
                break;
            case "6":
                replacement = "G";
                break;
            case "7":
                replacement = "L";
                break;
            case "8":
                replacement = "B";
                break;
            case "0":
                replacement = "0";
                break;
        }

        reversed[i] = replacement;
        if(replacement === "") i++;
    }

    return reversed;
}
