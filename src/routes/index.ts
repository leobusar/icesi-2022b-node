import { Express, Request, Response } from "express";
import UserController  from "../controllers/user.controller";
import validateSchema from '../middleware/validateSchema';
import verifyToken from  '../middleware/auth';
import {createUserSchema } from '../schemas/user.schema'

function  routes(app: Express) {
    app.get("/api/user/:id", verifyToken,  UserController.getUser);
    app.delete("/api/user/:id", verifyToken,  UserController.deleteUser);
    app.put("/api/user/:id", verifyToken, validateSchema(createUserSchema),  UserController.updateUserHandler);
    app.post("/api/user",  validateSchema(createUserSchema), UserController.createUserHandler);
    app.post("/api/sessions", UserController.login);
}

export default routes;
