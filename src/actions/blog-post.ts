'use server';
import axios from "axios";
import userGet from "./user-get";

export default async function PostBlog(formData: FormData) {
    const User = await userGet()
    const userId = User?._id

    const title = formData.get("title") as string;
    const subTitle = formData.get("subTitle") as string;
    const complementTitle = formData.get("complementTitle") as string;

    const catchyPhrase = formData.get("catchyPhrase") as string;

    const introductoryText = formData.get("introductory") as string;
    const developmentText = formData.get("development") as string;
    const complementText = formData.get("textComplement") as string;

    const conclusion = formData.get("conclusion") as string;
    const img = formData.get("imgLink") as string;

    if (!title || !subTitle || !introductoryText || !developmentText || !img || !conclusion) {
        throw new Error('Preencha todos os campos obrigatórios.');
    }

    if (!userId) {
        throw new Error("User undefined vazio");
    }

    if (!img) throw new Error('Preencha os  da IMG.')

    console.log(userId)

    const response = await axios.post('https://bitai-back.vercel.app/blogs/add', {
        title,
        subTitle,
        complementTitle,
        catchyPhrase,
        introductoryText,
        developmentText,
        complementText,
        conclusion,
        img,
        userId,
    });

    const data = response.data

    return data
}