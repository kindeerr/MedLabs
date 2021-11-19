import {
  Request,
  RequestHandler,
  RequestParamHandler,
  Response,
} from "express";
import app from "../app";

interface Users {
  getUsers: RequestHandler;
}
const users = async (req: Request, res: Response) => {
  try {
    const db = app.get("db");
    const collection = db.collection("trips");
    const users = await collection.findOne();
    res.status(200).json({
      status: "biness coie",
      data: users,
    });
  } catch {
    console.log("AYAYE");
  }
};
let usersController: Users = {
  getUsers: users,
};

export default usersController;
