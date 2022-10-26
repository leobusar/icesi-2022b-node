import { Express, Request, Response } from "express";
import { createUserHandler, login }  from "../controllers/user.controller";

function  routes(app: Express) {
    app.post("/api/users", createUserHandler)
    app.post("/api/sessions", login)
}

export default routes;
