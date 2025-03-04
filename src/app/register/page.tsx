import React from 'react'
import RegisterForm from "@/app/Components/Register/register-form"
import styles from "./register.module.css"

export default function page() {
    return (
        <div className={styles.container}>
            <div className={styles.ad}>
                anuncio
            </div>
            <div className={styles.content}>
                <RegisterForm />
            </div>
        </div>
    )
}
