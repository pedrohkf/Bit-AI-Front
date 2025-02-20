'use server';
import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export default async function login(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const response = await axios.post('https://bitai-back.vercel.app/auth/login', {
        email,
        password
    });

    if (!email) {
        return NextResponse.json(
            { success: false, message: 'O campo email é obrigatório.' },
            { status: 400 }
        );
    }
    
    if (!password) {
        return NextResponse.json(
            { success: false, message: 'O campo email é obrigatório.' },
            { status: 400 }
        );
    }


    const data = await response.data;
    const cookieStore = await cookies()

    cookieStore.set('token', data.token, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24
    });
}