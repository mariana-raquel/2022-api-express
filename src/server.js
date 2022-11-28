const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;
const host = process.env.HOST || "localhost";

// rota root com os métodos get, post, put, e delete
app.get("/api", (req, res) => {
	res.send("API REST / on GET");
});
app.post("/api", (req, res) => {
	res.send("API REST / on POST");
});
app.put("/api", (req, res) => {
	res.send("API REST / on PUT");
});
app.delete("/api", (rep, res) => {
	res.send("API REST / on DELETE");
});

// demais rotas são tratadas aqui
app.use((req, res) => {
	res.status(404).send("API Rest don´t handle this route");
});

// executa a API Rest
app.listen(port, host, () => {
	console.log(`API REST listening on ${host} with port ${port}`);
});