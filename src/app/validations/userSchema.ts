import {z} from "zod";

export const UserSchema = z.object({
    username: z.string().min(3 , "username must be 3 charc long"),
    email : z.string().email(),
    password: z.string().min(5 , "password must be 5 charc long"),
    confirmPassword: z.string().min(5 , "password must be 5 charc long") ,
    phoneNumber : (z.number()),
    isAdmin : z.boolean().optional(),
  }).refine((values) => values.confirmPassword == values.password , 
  {message: "confirm password does not match password",
path: ["confirmPassword"]});