import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import app from "./app";
// enable the config.env
dotenv.config({ path: "./src/config.env" });

const url = process.env.DBURL ? process.env.DBURL : "";
const mongoClientObj = new MongoClient(url);

async function main() {
  //connect to db
  const connectedMongoClientObj = await mongoClientObj.connect();
  const db = connectedMongoClientObj.db("sample_training");
  //set the db to the app variable db
  app.set("db", db);
  //start app
  app.listen(3001, () => {
    console.log("Running on PORT :3001");
  });
}

main();
