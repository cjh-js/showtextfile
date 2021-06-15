import express from "express";
import {home, postRead, getRead} from "./homeController";
import {uploadFiles} from "./middleware";

const homeRouter = express.Router();


homeRouter.get("/", home);
homeRouter.route("/read").post(uploadFiles.single("fileName"), postRead);
homeRouter.get("/read/:id([0-9a-f]{32})", getRead);

export default homeRouter;