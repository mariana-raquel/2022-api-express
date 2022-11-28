const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;
const host = process.env.HOST || "localhost";

const routes = require("./routes");
routes(app);

app.use((req, res) => {
	res.status(404).send("API Rest don´t handle this route");
});

app.listen(port, host, () => {
	console.log(`API REST listening on ${host} with port ${port}`);
});