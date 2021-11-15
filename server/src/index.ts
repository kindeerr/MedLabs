import express from "express";
import { connect } from "http2";
import { MongoClient } from "mongodb";

const app = express();
const url = "db string here :)";

// Create a new MongoClient
const client = new MongoClient(url);
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
    const ceva = client.db("sample_training").collection("trips");
    //console.log(ceva);
    const altceva = await ceva.findOne({});
    console.log(altceva);
    return client.db("sample_training").collection("trips");
    //TODO: mutat serverul unde am conexiune la db, investigat daca pica conexiunea la db ce facem
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Well done!gdbfdbfd");
});

app.listen(3001, () => {
  console.log("Running on PORT :3001");
});
