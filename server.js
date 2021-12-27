require("dotenv").config();

const routes = require("./routes");

const express = require("express");
const fileupload = require("express-fileupload");
const cors = require("cors");
const sequelize = require("./db");
const path = require("path");
const errorMiddleware = require("./middlewares/error-middleware");
const app = express();

app.use(cors());
app.use(fileupload({ createParentPath: true }));
app.use(express.static(path.resolve("static")));
app.use(express.json());
app.use("/api", routes);
app.use(errorMiddleware);

const PORT = process.env.PORT || 8080;

console.log(process.pid);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    app.listen(PORT, () => console.log("server running on port " + PORT));
  } catch (error) {
    console.log(error);
  }
};

startServer();
