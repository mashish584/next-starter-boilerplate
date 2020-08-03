/* eslint-disable no-undef */
require("dotenv").config({ path: ".env" });

const { createServer } = require("http");
const next = require("next");
const app = next({ dev: process.env.IS_DEV === "true" });
const handler = app.getRequestHandler();

// set port
const port = process.env.PORT || 8080;

// process app
app.prepare().then(() =>
	createServer(handler).listen(port, (err) => {
		if (err) throw err;
		console.log(`Ready on localhost http://localhost:${port}`);
	}),
);
