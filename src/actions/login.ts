'use server';
import axios from "axios";
import { cookies } from "next/headers";

export default async function login(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) throw new Error('Preencha os dados.')

    const response = await axios.post('http://localhost:2700/auth/login', {
        email,
        password
    });

    const data = await response.data;
    const cookieStore = await cookies()

    cookieStore.set('token', data.token, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24
    });

}