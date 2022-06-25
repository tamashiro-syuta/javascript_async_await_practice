const fs = require("fs");

console.log("readFileの前の行");

fs.readFile("hello.txt", "utf-8", (err, txt) => {
  if (err) throw err;
  console.log("2");
});

console.log("3");
