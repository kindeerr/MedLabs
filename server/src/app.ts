import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("Cristos");
  const db = app.get("db");
  const collection = db.collection("trips");

  console.log(collection.findOne().then((data: Object) => console.log(data)));
  res.send("Well done!gdbfdbfd");
});
export default app;
