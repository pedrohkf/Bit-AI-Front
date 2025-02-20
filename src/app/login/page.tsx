import LoginForm from '@/app/Components/login/login-form'
import styles from "./Login.module.css"
import React from 'react'

export default function page() {
    return (
        <div className={styles.container}>
            <div className={styles.ad}>IMG</div>
            <div className={styles.contentForm}>
                <LoginForm />
            </div>
        </div>
    )
}
