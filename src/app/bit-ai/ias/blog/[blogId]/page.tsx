"use client"
import FetchBlogsById, { Blog } from "@/actions/blogId-get"
import styles from './Blog.module.css'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const params = useParams();
  const blogId = params.blogId as string;

  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {

    async function fetchBlog() {
      const data = await FetchBlogsById(blogId);
      setBlog(data);
    }

    fetchBlog()
  }, [blogId])


  return (
    <div className={styles.container}>
      <h1>{blog?.title}</h1>
      <p>{blog?.catchyPhrase}</p>
      <ul>
        <li>criador</li>
      </ul>
      <div>
        <p>{blog?.introductoryText}</p>
        <img src={blog?.img} alt="Imagem do blog" />
        <h3>{blog?.complementTitle}</h3>
        <p>{blog?.developmentText}</p>
        <p>{blog?.conclusion}</p>
      </div>
    </div>
  )
}