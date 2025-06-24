import FetchEbooks from '@/actions/ebook-get'
import styles from "./ebook.module.css"
import React from 'react'
import SideMenu from '@/app/Components/Menu/SideMenu'
import Link from 'next/link';

export const dynamic = "force-dynamic";

export default async function page() {
    const data = await FetchEbooks()

    return (
        <div className={styles.container}>
            <SideMenu />
            <div className={styles.grid}>
                <h1>Meus Blogs</h1>
                <div className={styles.newEbook}>
                    <Link href='ebook/addEbook'>+ Ebook</Link>
                </div>
                <div className={styles.content}>
                    <div className={styles.ebooks}>{data.map((ebook) =>
                        <div key={ebook.title}>
                            <img src={ebook.cape} />
                            <div className={styles.description}>
                                <h3>{ebook.title}</h3>
                                <p>{ebook.createadAt}</p>
                            </div>
                        </div>
                    )}</div>
                </div>
            </div>

        </div>

    )
}
