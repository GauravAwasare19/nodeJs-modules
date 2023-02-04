const path = require("path");

console.log(path.dirname("C:/Users/om/Desktop/Nodejs/path_modules/path.js"));
console.log(path.extname("C:/Users/om/Desktop/Nodejs/path_modules/path.js"));
console.log(path.basename("C:/Users/om/Desktop/Nodejs/path_modules/path.js"));
console.log(path.parse("C:/Users/om/Desktop/Nodejs/path_modules/path.js"));

const data = path.parse("C:/Users/om/Desktop/Nodejs/path_modules/path.js");
console.log(data.name);