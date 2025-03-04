import React from 'react';
import { signIn } from "next-auth/react";

export default function LoginButtonGoogle() {
    return (
        <button
            onClick={() => signIn('google', { callbackUrl: "/dashboard" })}
        >
            Entrar com Google
        </button>
    );
}