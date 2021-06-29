const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb" }));

const apiRoutes = require("./src/modules/routes");

app.use("/", apiRoutes);

const url = "mongodb+srv://Ineie:nwlTCW8r@cluster0.imeaj.mongodb.net/hospital?retryWrites=true&w=majority";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(8000, () => {
  console.log("Server started");
});
