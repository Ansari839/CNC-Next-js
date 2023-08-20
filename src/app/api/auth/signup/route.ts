import { NextRequest, NextResponse } from "next/server";
import { UserSchema } from "@/app/validations/userSchema";
import { ZodError } from "zod";

export const POST = async (request: NextRequest) => {

    try {
        const user = await request.json();
        const validate = UserSchema.parse(user)
        // console.log(user , "user.....")
        // console.log(validate , "validate.......")
        return NextResponse.json(
            { message: "sucess", data: validate },
            { status: 201 })
    }
    catch (error) {
        if (error instanceof ZodError)
            return NextResponse.json(
                {
                    err: error.flatten()
                }, { status: 400 });
        return NextResponse.json({ message: "something went wrorng" },
            { status: 500 })
    }


}