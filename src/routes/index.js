const tarefas = require("./tarefas");

const root = require("./root");

module.exports = (app) => {
    app.route("/api")
        .get(root.get)
        .post(root.post)
        .put(root.put)
        .delete(root.delete);

    app.route("/api/tarefas")
        .get(tarefas.get)
        .post(tarefas.post)
    app.route("/api/tarefas/:id")
        .get(tarefas.get_by_id)
        .put(tarefas.put)
        .delete(tarefas.delete);
}