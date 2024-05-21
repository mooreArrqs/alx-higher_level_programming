#!/usr/bin/node

const fs = require('fs');
// import the built-in Node.js 'fs' module.

fs.readFile(process.argv[2], 'utf8', function (error, content) {
  // use fs.readFile() to read the contents of a file specified as a command-line argument
  // 'utf8' specifies the encoding of the file read

  if (error) {
    // If an error occurs when reading the file, the 'error' parameter will contain an error object.
    console.error('Error reading the file:', error);
  } else {
    // If the file reading was a success, the 'content' parameter will contain the contents of the file as a string.
    console.log(content);
  }
});
