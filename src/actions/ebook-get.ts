"use server";
import axios from "axios";
import userGet from "./user-get";

export type Blog = {
    _id: string;
    cape: string,
    title: string,
    authorName: string,
    brandApresentation: string,
    baseTheme: string,
    introductionTheme: string,
    fundamentalTheme: string,
    principlesTheme: string,
    conclusionTheme: string,
    links: [],
    contact: string,
    createadAt: string,
    user: string
}

export default async function FetchEbooks() {
    const idUser = await userGet()

    if (!idUser || !idUser._id) {
        throw new Error("User not found or user ID is undefined");
    }

    const response = await axios.get(`https://bitai-back.vercel.app/ebooks/${idUser._id}`)

    const data = response.data as Blog[]

    return data
}