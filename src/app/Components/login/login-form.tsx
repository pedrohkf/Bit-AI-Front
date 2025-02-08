'use client';
import login from "@/actions/login";
import Button from "@/app/Components/forms/button";
import { useFormStatus } from "react-dom";

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
    return (
        <>
            <form action={login}>
                <input type="email" name="email" placeholder="email" />
                <input type="password" name="password" placeholder="senha" />
                <FormButton />
                
            </form>
        </>
    )
}