var db_functions = require('./db_connection.js');
const example_object = require("./functions/example_object.js");

console.log("[START]");



const entityA = new example_object.livingEntity("goblin", 100, 15, 10);
const entityB = new example_object.livingEntity("oger", 50, 30, 40);

console.log(entityA.getHp());
console.log("=======");
console.log("Your ".concat(entityA.name, " got damage: ", entityA.getDamage(entityB.strength)));
console.log(entityA.getHp());
console.log("=======");


console.log("[DB-START]");
//db_functions.get_bot_config_active();
db_functions.get_bot_config_active(function(err,data){
	
	console.log(data);

});