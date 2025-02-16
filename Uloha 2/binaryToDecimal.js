function binaryToDecimal(binaryString) {
    // Validate input check if it's a binary number
    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] !== '0' && binaryString[i] !== '1') {
            return "Invalid input: Not a binary number.";
        }
    }

    let decimal = 0;
    let position = 0;

    // Iterate from right to left 
    for (let i = binaryString.length - 1; i >= 0; i--) {
        let bit = binaryString[i] === '1' ? 1 : 0; // Convert character to integer
        decimal += bit * powerOfTwo(position); // Multiply by 2^position
        position++; // Move to the next position
    }

    return decimal;
}


function powerOfTwo(exp) {
    let result = 1;
    for (let i = 0; i < exp; i++) {
        result *= 2;
    }
    return result;
}

// Get user input from command line arguments
const args = process.argv.slice(2); // Skip the first two default arguments
if (args.length === 0) {
    console.log("Usage: node binaryToDecimal.js <binary_number>");
} else {
    const binaryInput = args[0]; // First argument as binary input
    console.log(`Decimal: ${binaryToDecimal(binaryInput)}`);
}
