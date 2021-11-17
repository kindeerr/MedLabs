import express from "express";
import dotenv from "dotenv";
import { Collection, Document, MongoClient } from "mongodb";

dotenv.config({ path: "./src/config.env" });

const url = process.env.DBURL ? process.env.DBURL : "";
const mongoClientObj = new MongoClient(url);
//console.log(mongoClientObj);

mongoClientObj.connect().then((connectedMongoClientObj) => {
  //console.log(connectedMongoClientObj);
  const db = connectedMongoClientObj.db("sample_training");
  console.log(db);
  //ADD ROUTES HERE. ALWAYS MAKE SURE YOU PASS db FURTHER DOWN
});

// // Create a new MongoClient
// const client = new MongoClient(url);
// let db: Collection<Document>;
// async function run() {
//   try {
//     // Connect the client to the server
//     await client.connect();
//     // Establish and verify connection
//     console.log("Connected successfully to server");
//     db = client.db("sample_training").collection("trips");

//     app.listen(3001, () => {
//       console.log("Running on PORT :3001");
//     });
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// async function run2() {
//   await run().catch(console.dir);

//   app.get("/", (req, res) => {
//     console.log("Cristos");
//     console.log(db.findOne());
//     res.send("Well done!gdbfdbfd");
//   });
// }

// run2();
