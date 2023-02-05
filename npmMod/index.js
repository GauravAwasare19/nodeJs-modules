var validator = require('validator');
const chalk = require("chalk");

console.log(chalk.blue.inverse("Hello World"));

const res = validator.isEmail("gaurav@gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));