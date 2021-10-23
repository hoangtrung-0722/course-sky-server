const express = require("express");
const cookieParser = require('cookie-parser');
const http = require("http");

const port = 3001;

const app = express();

const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("blank space");
});

app.use(express.json());
app.use(cookieParser());


server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
