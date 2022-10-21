import { Request, Response } from "express";
import { createUser } from "../services/user.service";
import debug from 'debug';
const debugLog: debug.IDebugger = debug('app')


export async function createUserHandler( req: Request, res: Response){
    try{
        debugLog("*****")
        debugLog(req)
        const user = await createUser(req.body)
        return res.send(user)
    }catch(e: any){
        debugLog(e);

        return res.status(409).send(e.message);
    }

}
