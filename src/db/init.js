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
        database.run(SQL_TAREFAS_CREATE, (err) => {
            if (!err) {
                console.log('Tabela tarefas criada com sucesso.');
            }
            const sql = 'INSERT INTO tarefas (titulo, feito) VALUES (?, ?)';
            database.run(sql, ["Criar a constante repositorio", true]);
            database.run(sql, ["Exportar a constante repositorio para arquivo", true]);
            database.run(sql, ["Acessar sqlite", true]);
            database.run(sql, ["Modificar o get para recuperar info do sqlite", true]);
            database.run(sql, ["Implementar outros métodos do CRUD", false]);
            database.run(sql, ["Commit e Push", false]);
        });
    }
});