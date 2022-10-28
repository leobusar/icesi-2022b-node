import { object, string, TypeOf } from "zod";

export const createUserSchema =  object({
    name: string({
        required_error: "Name is required",
    }),
    password: string({
        required_error: "Password is required",
    }).min(6, "Password too short"),
    email: string({
        required_error: "Email is required",
    }).email("Not a valid email address")
})

//export type updateUserSchema = TypeOf<typeof createUserSchema>;
