const fs = require('fs');
const util = require('util');

const fileName = __dirname + '/test.txt';
const outFileName = __dirname + '/test-copy.txt';

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);

readStream.on('error', err => {
    console.log(err);
});

readStream.pipe(writeStream);