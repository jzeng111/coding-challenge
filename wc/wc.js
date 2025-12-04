const fs = require('fs');
const path = require('path');

// first arg, the following, if not check if file path is valid
const VALID_ARGS = [
    '-c',
    '-l',
    '-w',
    '-m'
]

const option = process.argv[2];
const filePath = path.resolve(process.argv[3]);
console.log(option, filePath)
// Sepecific Mode

if (VALID_ARGS.includes(option)) {
    if (!fs.existsSync(filePath)) {
        console.error(`Error: can not locate file ${filePath}`)
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(`Error: something went wrong while reading file`)
        }
        switch (option) {
            // get btyes
            case '-c':
                console.log(data.length)
                break;
            case '-l':
                break;
            case '-w':
                break;
            case '-m':
                break;
            default:
                break
        }
    })
    // Default Mode
} else {
    console.log('default print')
}


// const start = performance.now();
// const end = performance.now();
// console.log(`Execution Time: ${end - start} ms`)