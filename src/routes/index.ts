import { Express, Request, Response } from "express";
import UserController  from "../controllers/user.controller";

function  routes(app: Express) {
    app.post("/api/users", UserController.createUserHandler)
    app.post("/api/sessions", UserController.login)
}

export default routes;
