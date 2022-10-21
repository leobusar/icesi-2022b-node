/**
 * Validar datos usuario
 * Validar duplicado
 * encriptar clave
 *
 * */

import UserModel,  {UserDocument, UserInput} from  "../models/user.model";

export async function createUser(input: UserInput){
    try {
        const user = await UserModel.create(input);
        return user.toJSON();
    }catch( e: any) {
        throw new Error(e);
    }
}
