"use server";
import axios from "axios";

export type Blog = {
    _id: string;
    title: string;
    subTitle: string;
    complementTitle: string;
    catchyPhrase: string;
    introductoryText: string;
    developmentText: string;
    subText: string;
    complementText: string;
    conclusion: string;
    img: string;
    user: string;
}

export default async function FetchBlogsById(blogId: string): Promise<Blog | null> {
    const response = await axios.get(`http://localhost:2700/blogs/bit-ai/${blogId}`)
    const data = response.data as Blog
    return data
}