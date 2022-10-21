import mongoose from "mongoose";


export interface UserInput {
    email: string;
    name: string;
    password: string;
}

export interface UserDocument  extends UserInput, mongoose.Document {
    createAt: Date;
    updateAt: Date;
}

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    password: {type: String, required: true}
}, {
    timestamps: true,
}
)

const UserModel =  mongoose.model<UserDocument> ("User", userSchema);

export default UserModel;
