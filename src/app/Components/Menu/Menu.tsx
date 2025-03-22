import React from 'react'
import { ButtonRedirectPage } from '../Buttons/ButtonRedirectPage'
import styles from "./Menu.module.css"

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.logo}>
        <p>LOGO</p>
      </div>
      <div className={styles.buttons}>
        <ButtonRedirectPage pageRedirect="/login">Entrar</ButtonRedirectPage>
        <ButtonRedirectPage pageRedirect="/register">Começar</ButtonRedirectPage>
      </div>
    </div>
  )
}
