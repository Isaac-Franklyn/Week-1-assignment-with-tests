/* ## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.8 */

const fs = require('fs');
const content = "isaac is trying to code in js";
const filePath = "easy/ fileToPrint.txt";

fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File has been written successfully.');
  });

