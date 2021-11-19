import express from "express";
import usersController from "./controllers/usersController";
console.log(usersController.getUsers);

const router = express.Router();

router.route("/").get(usersController.getUsers);

console.log(router);
export default router;
