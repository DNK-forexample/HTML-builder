const fs = require('fs');
const path = require('path');
const promises = fs.promises;

promises
  .readdir(path.join(__dirname, 'secret-folder'))
  .then((files) => {
    for (const file of files) {
      const filePath = path.join(__dirname, 'secret-folder', file);
      const name = file.split('.')[0];
      const extension = path.extname(file).slice(1);

      fs.stat(filePath, (err, stats) => {
        if (!stats.isDirectory()) {
          const size = stats.size / 1000;
          console.log(`${name} - ${extension} - ${size}kb`);
        }
      });
    }
  });
