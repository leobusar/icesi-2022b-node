import { Request, Response } from "express";
import { createUser, findUserByEmail } from "../services/user.service";
import debug from 'debug';
import bcrypt from 'bcrypt';

const debugLog: debug.IDebugger = debug('app')


export async function createUserHandler( req: Request, res: Response){
    try{
        const userExist = await findUserByEmail(req.body.email); 
        if ( userExist !== null){
            return res.status(409).send("user exist");
        }

        req.body.password  = await bcrypt.hash(req.body.password, 10);
        const user = await createUser(req.body)
        return res.send(user)
    }catch(e: any){
        debugLog(e);

        return res.status(409).send(e.message);
    }

}

export async  function login(req: Request, res: Response) {
    try{
        const user = await findUserByEmail(req.body.email); 
        if ( user !== null && await bcrypt.compare(req.body.password,user.password)){
            
        }

        return res.status(401).send("user or password not valid");
    }catch(e: any){
        debugLog(e);

        return res.status(409).send(e.message);
    }

}
