
 const fs = require('fs');
 const path = require('path');
 const { stdin, stdout } = require('process');
 
 const writable = fs.createWriteStream(
   path.join(__dirname, 'text.txt')
   );
   
   stdout.write('Please, enter your text below\n');
   //stdin.on('data', data => writable.write(data));
   stdin.on('data', data => {
     if (data.toString().trim() === 'exit') process.exit();
     writable.write(data);
   });
   
   process.on('exit', () => stdout.write('You are out of input mode'));
   process.on('SIGINT', () => process.exit());
   
