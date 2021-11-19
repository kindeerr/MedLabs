import express from "express";
import router from "./routes";

const app = express();

app.use("/medlabs/api/users", router);

app.get("/", (req, res) => {
  console.log("Cristos");
  const db = app.get("db");
  const collection = db.collection("trips");

  console.log(collection.findOne().then((data: Object) => console.log(data)));
  res.send("Well done!gdbfdbfd");
});
export default app;
