const Controller = require("./controllers/Controller.js");

const command = (process.argv[2]) ? process.argv[2].toLowerCase() : "";
const table = (process.argv[3]) ? process.argv[3].toLowerCase() : "";
const parameters = process.argv.slice(4);

switch (command) {
    case "help" :
        Controller.help();
        break;
    case "read" :
        Controller.findAll(table);
        break;
    case "create" :
        Controller.create(table, parameters);
        break;
    default :
        Controller.help();
        break;
}