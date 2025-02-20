'use client'
import Button from '@/app/Components/forms/button';
import { useFormStatus } from "react-dom";
import { useBlogContext } from '@/context/BlogContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function FormButton() {
    const { pending } = useFormStatus();

    return (
        <>
            {pending ? (
                <Button disabled={pending}>Criando...</Button>
            ) : (
                <Button>Criar</Button>
            )}
        </>
    );
}

export default function AddBlog() {
    const [message, setMessage] = useState<string>('')
    const { posts, setPosts } = useBlogContext()
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const formattedPrompt = `Crie um texto nessa estrutura:
    
    - O título principal deve ser precedido por #.
    - A frase de efeito deve ser precedida de @.
    - O texto grande introdutório deve ser precedido de %.
    - O texto grande de desenvolvimento deve ser precedido de $.
    - O texto medio complementar sobre o assunto deve possuir &.
    - A conclusão deve possuir *.
    - Acrescente um subtitulo precedido por !.
    - Junto um texto complementar sobre o assunto com ?.

    Faça tudo isso sobre o tema ${message} em portugues
    `

        const response = await axios.post(`https://bitai-back.vercel.app/ia`, { message: formattedPrompt });

        const data = response.data;

        setPosts(data.response)

        console.log(posts)

        router.push('edit');
    }

    useEffect(() => {
        console.log(posts);
    }, [posts]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="text" placeholder="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                <FormButton />
            </form>
        </>
    )
}