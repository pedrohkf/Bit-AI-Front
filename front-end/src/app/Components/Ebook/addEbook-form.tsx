'use client'
import Button from '@/app/Components/forms/button';
import { useFormStatus } from "react-dom";
import { useEbookContext } from '@/context/EbookContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { measureMemory } from 'vm';

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
    const { posts, setPosts } = useEbookContext()
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(message)
        const response = await axios.post(`http://localhost:2700/ia/groq/ebook`, { theme: message });

        const data = response.data;

        setPosts(data.response)

        console.log(data.response);
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