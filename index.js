require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const http = require("http");

const port = process.env.PORT;

const app = express();

const server = http.createServer(app);
mongoose
  .connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => {
    console.log("Database connection error: ", error);
  });

mongoose.connection.on("connected", function () {
  console.log("Database connected");
});

app.get("/", (req, res) => {
  res.send("blank space");
});

app.use(express.json());
app.use(cookieParser());

app.use("/courses", require("./routes/couseRoute"));

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
