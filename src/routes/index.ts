import { Express, Request, Response } from "express";
import UserController  from "../controllers/user.controller";
import validateSchema from '../middleware/validateSchema';
import {createUserSchema } from '../schemas/user.schema'

function  routes(app: Express) {
    app.post("/api/users",  validateSchema(createUserSchema), UserController.createUserHandler)
    app.post("/api/sessions", UserController.login)
}

export default routes;
