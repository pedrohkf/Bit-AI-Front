"use client"
import Button from '@/app/Components/forms/button';
import { useEbookContext } from '@/context/EbookContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import userGet from "@/actions/user-get";

function FormButton({ loading }: { loading: boolean }) {
    return (
        <Button disabled={loading}>
            {loading ? "Criando..." : "Criar"}
        </Button>
    );
}

export default function AddBlog() {
    const router = useRouter();
    const [userId, setUserId] = useState<string | null>(null)
    const [message, setMessage] = useState<string>('')
    const [loading, setLoading] = useState(false);
    const { posts, setPosts } = useEbookContext()

    useEffect(() => {
        async function fetchUser() {
            const User = await userGet();
            setUserId(User?._id ?? null);
        }

        fetchUser();
    }, [])

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        try {
            const response = await axios.post(`https://bitai-back.vercel.app/ia/groq/ebook`, { theme: message, userId });

            const data = response.data;
            setPosts(data.response)
            router.push('edit');
        } catch (error) {
            console.error("Erro ao criar ebook", error)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        console.log(posts);
    }, [posts]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="text" placeholder="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                <FormButton loading={loading} />
            </form>
        </>
    )
}