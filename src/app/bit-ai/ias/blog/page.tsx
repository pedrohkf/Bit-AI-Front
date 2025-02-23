import styles from "./page.module.css"
import SideMenu from "@/app/Components/Menu/SideMenu";
import FetchBlogs from '@/actions/blog-get';
import RedirectPageIcon from '@/app/Components/Icons/RedirectPage';
import LinkIcon from '@/app/Components/Icons/Link';
import Link from 'next/link';

export const dynamic = "force-dynamic";

export default async function Blog() {
    const data = await FetchBlogs()

    console.log(data[0].title)

    return (
        <div className={styles.container}>
            <SideMenu />
            <div className={styles.content}>
                <h1>Meus Blogs</h1>
                <div className={styles.newBlog}>
                    <Link href='blog/addBlog'>+ BLOG</Link>
                </div>
                <div className={styles.blogs}>
                {data.map((blogs) => <Link key={blogs._id} href={'../../blogsPublic/' + blogs._id}>
                        <div  className={styles.boxes}>
                            {blogs.title}
                            <div className={styles.buttons}>
                                <Link href="/bit-ai">
                                    <LinkIcon />
                                </Link>
                                <Link href={"/bit-ai/ias/blog/edit"}><RedirectPageIcon/></Link>
                            </div>
                        </div>
                    </Link> )}
                </div>
                    
            </div>
        </div>
    )
}