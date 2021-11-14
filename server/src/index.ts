import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Well done!gdbfdbfd");
});

app.listen(3001, () => {
  console.log("Running on PORT :3001");
});
