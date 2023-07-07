/*## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman

```
*/

const fs =require("fs");

const filePath = '/home/isaac/Documents/MERN/Week-1-assignment-with-tests/02-async-js/easy/ fileToPrint.txt';

fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
      console.error(err);
      return;
    }
  
    // Process the file contents
    console.log(data);

    console.log(fileCleaner(data));
  });

function fileCleaner(string){
    let newStr = string.replace(/\s+/g, ' ');
    return newStr;
}

