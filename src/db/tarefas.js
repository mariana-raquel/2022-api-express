const sqlite = require("sqlite3").verbose();

const SQL_TAREFAS_CREATE = `
    CREATE TABLE tarefas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        feito BOOLEAN
    )`;


const database = new sqlite.Database("./db.sqlite", (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log('Base de dados conectada com sucesso.')
        // database.run(SQL_TAREFAS_CREATE, (err) => {
        //     if (!err) {
        //         console.log('Tabela tarefas criada com sucesso.');
        //     }
        // });
    }
});

exports.repositorio = {
    lerTodos: (callback) => {
        database.all('SELECT * FROM tarefas', (err, rows) => {
            if(!err) {
                callback(rows);
            } else {
                console.error(err);
                callback(['error'])
            }
        });
    }
};