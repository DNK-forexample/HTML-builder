const fs = require('fs'); //file system
const path = require('path');
const  readable = fs.createReadStream(
  path.join(__dirname, 'text.txt'), 
  'utf-8'
  );
  readable.on('data', chunk => {
    process.stdout.write(chunk);
  });