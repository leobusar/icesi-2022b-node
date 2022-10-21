import { Express, Request, Response } from "express";
import { createUserHandler }  from "../controllers/user.controller";

function  routes(app: Express) {
    app.post("/api/users", createUserHandler)

}

export default routes;
