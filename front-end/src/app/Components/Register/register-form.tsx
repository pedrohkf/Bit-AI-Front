'use client';
import Button from "@/app/Components/forms/button";
import register from "@/actions/register";
import { useFormStatus } from "react-dom";
import styles from "./register-form.module.css"
import { redirect } from "next/navigation";
import { useState } from "react";

function FormButton() {
    const { pending } = useFormStatus();

    return (
        <>
            {pending ? (
                <Button disabled={pending}>Enviando...</Button>
            ) : (
                <Button onClick={() => redirect('bit-ai/dashboard')}>Entrar</Button>
            )}
        </>
    );
}

export default function LoginForm() {
    const [error, setError] = useState<string>();

    const handleSubmit = async (formData: FormData) => {
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        if (!name) {
            setError('O campo nome é obrigatório.')
        }

        if (!email) {
            setError('O campo email é obrigatório.');
            return
        }

        if (!password) {
            setError('O campo senha é obrigatório.');
            return
        }

        await register(formData);

        redirect('/bit-ai/dashboard')
    }

    return (
        <>
            <form className={styles.forms} action={handleSubmit}>
                <div className={styles.title}>
                    <h1>Register</h1>
                </div>
                <p>{error}</p>
                <div>
                    <p>Nome</p>
                    <input type="text" name="name" placeholder="nome" required />
                </div>
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