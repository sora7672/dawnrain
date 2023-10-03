var db_functions = require('./db_connection.js');

console.log(db_functions.banana);
console.log("===========");
console.log(db_functions.addUp(5,15));
console.log("===========");
console.log("this your testname: ".concat(db_functions.testName));
console.log("===========");


db_functions.get_bot_config_active();
