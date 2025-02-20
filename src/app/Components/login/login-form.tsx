'use client';
import login from "@/actions/login";
import Button from "@/app/Components/forms/button";
import { useFormStatus } from "react-dom";
import styles from "./login-form.module.css"
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

export default function LoginForm({token}) {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [error, setError] = useState<string>();

    const handleSubmit = async (formData) => {
        await login(formData)

        if (!email) {
            setError('O campo email é obrigatório.');
        }

        if (!password) {
            setError('O campo senha é obrigatório.');
        }

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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <p>Senha</p>
                    <input type="password" name="password" placeholder="senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <FormButton />
            </form>
        </>
    )
}