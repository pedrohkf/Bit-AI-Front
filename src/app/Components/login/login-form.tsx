'use client';
import login from "@/actions/login";
import Button from "@/app/Components/forms/button";
import styles from "./login-form.module.css"
import { useFormStatus } from "react-dom";
import { redirect } from "next/navigation";
import { useState } from "react";

function FormButton() {
    const { pending } = useFormStatus();

    return (
        <>
            {pending ? (
                <Button disabled={pending}>Enviando...</Button>
            ) : (
                <Button>Entrar</Button>
            )}
        </>
    );
}

export default function LoginForm() {
    const [error, setError] = useState<string>();

    const handleSubmit = async (formData: FormData) => {
        setError(undefined);

        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        if (!email) {
            setError('O campo email é obrigatório.');
            return
        }

        if (!password) {
            setError('O campo senha é obrigatório.');
            return
        }

        await login(formData);

        redirect('/bit-ai/dashboard')
    }

    return (
        <>
            <form className={styles.forms} action={handleSubmit}>
                <div className={styles.title}>
                    <h1>LOGIN</h1>
                </div>
                <p>{error}</p>
                <div>
                    <p>Email</p>
                    <input type="email" name="email" placeholder="email"
                        required
                    />
                </div>
                <div>
                    <p>Senha</p>
                    <input type="password" name="password" placeholder="senha"
                        required
                    />
                </div>
                <FormButton />
            </form>
        </>
    )
}