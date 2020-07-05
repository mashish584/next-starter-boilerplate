require("dotenv").config({ path: ".env" });

const next = require("next");
const app = next({ dev: process.env.IS_DEV === "true" });
const handler = app.getRequestHandler();

const { createServer } = require("http");

// set port
const port = process.env.PORT || 8080;

// process app
app.prepare().then(() =>
	createServer(handler).listen(port, (err) => {
		if (err) throw err;
		console.log(`Ready on localhost http://localhost:${port}`);
	}),
);
