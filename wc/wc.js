const fs = require('fs');
const path = require('path');
const readline = require('readline');

// first arg, the following, if not check if file path is valid
// const VALID_ARGS = [
//     '-c',
//     '-l',
//     '-w',
//     '-m'
// ];

// const option = process.argv[2];
// const filePath = path.resolve(process.argv[3]);
// console.log(option, filePath);

// // With Options
// if (VALID_ARGS.includes(option)) {
//     if (!fs.existsSync(filePath)) {
//         console.error(`Error: can not locate file ${filePath}`);
//     }

//     fs.readFile(filePath, (err, data) => {
//         if (err) {
//             console.error('Error: something went wrong while reading file');
//         }
//         switch (option) {
//         // get btyes
//         case '-c':
//             const bytes = data.length;
//             console.log(bytes);
//             break;
//             // get lines
//         case '-l':
//             const lines = data.toString().split('\n').length;
//             console.log(lines);
//             break;
//             // get words
//         case '-w':
//             const words = data.toString().split(/\s+/).filter(word => word.length > 0).length;
//             console.log(words);
//             break;
//             // get characters
//         case '-m':
//             const chars = data.toString().split('').length;
//             console.log(chars);
//             break;
//         default:
//             break;
//         }
//     });
//     // Default Mode
// } else {
//     console.log('default print');
// }


/**
 * simulate terminal
 */
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion() {
    rl.question('What do you think of Node.js? ', (answer) => {
        if (answer === 'quit()') {
            rl.close();
            return;
        }

        console.log(`Thank you for your valuable feedback: ${answer}`);
        askQuestion(); // Ask again
    });
}

askQuestion();

// const start = performance.now();
// const end = performance.now();
// console.log(`Execution Time: ${end - start} ms`)