'use server';
import axios from "axios";
import { cookies } from "next/headers";
import LoginForm from '../app/Components/login/login-form';

export default async function login(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const response = await axios.post('https://bitai-back.vercel.app/auth/login', {
        email,
        password
    });

    if (!email) {
        return response.status(400).json({ 
            success: false, 
            message: 'O campo "email" é obrigatório.' 
        });
    }
    
    if (!password) {
        return response.status(400).json({ 
            success: false, 
            message: 'O campo "senha" é obrigatório.' 
        });
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