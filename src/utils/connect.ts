import mongoose, { mongo } from "mongoose";

import debug from 'debug';

const debugLog: debug.IDebugger = debug('app')

async function  connect(){
    const dbUri: string = process.env.DBURL || "";

    try {
        await mongoose.connect(dbUri);
        debugLog("connected")
    }catch (e: any){
        debugLog("could not connect to db")
        debugLog(e)

        process.exit(1);
    }
}

export default connect;
