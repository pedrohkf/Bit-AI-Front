import React from 'react'
import styles from './button.module.css'

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function button({ children, ...props }: ButtonType) {
    return (
        <button {...props} className={styles.button}>
            {children}
        </button>
    )
}
