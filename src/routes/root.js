const handle = (req, res) => res.json({
    status: "OK",
    title: "Rota /api ON"
});

exports.post = handle;
exports.get = handle;
exports.put = handle;
exports.delete = handle;