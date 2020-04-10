class View {
    static help() {
        let result = "";
        result = result + `
        node index.js                                                   -- Run help command
        node index.js help                                              -- Show available commands
        node index.js read <table_name>                                 -- Show all data in table
        node index.js create <table_name> <field1> <field2> ...         -- Create a new record into table
        `;
        console.log(result);
    }
    static showMessage(message) {
        console.log(message);
    }
    static showLog(data) {
        console.log(data);
    }
    static showTable(data) {
        console.table(data);
    }
    static showInvalidInputs() {
        console.log(`Invalid table name or input parameters.`);
    }
    static showTableNotFound(table) {
        console.log(`Table with name ${table} not found.`);
    }
    static showIdNotFound(id) {
        console.log(`Data with id ${id} not found.`);
    }
    static showAddSuccess(table, data) {
        console.log(`Success to create new data in table ${table}.\n`, data);
    }
}

module.exports = View;