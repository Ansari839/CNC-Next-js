import { UserSchema } from "@/app/validations/userSchema";
import {z} from "zod";


export type User = z.infer<typeof UserSchema>