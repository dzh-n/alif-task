const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const LocalStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./data");

const app = express();

const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post("/persons-create", async (req, res) => {
  const persons = localStorage.getItem("persons");
  const personsAdd = persons ? JSON.parse(persons) : [];
  personsAdd.push(req.body);
  localStorage.setItem("persons", JSON.stringify(personsAdd));
  res.send(req.body);
});

app.get("/persons", (req, res) => {
  res.send(JSON.parse(localStorage.getItem("persons")));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
