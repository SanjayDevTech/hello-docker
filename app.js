const express = require("express");
const fs = require("fs");

const app = express();

// fs.mkdirSync("temp/");

// console.log("Hello world");

app.get("/", (_, res) => {
	fs.writeFileSync("temp/file.txt", 'Hi');
	return res.send("How's going");
});

app.get("/:text", (req, res) => {
	fs.writeFileSync(`temp/file-${req.params.text}`, "Hi");
	return res.send("good");
})

app.listen(process.env.PORT || 7000, () => {
	console.log("Server started at "+(process.env.PORT || 7000));
});
