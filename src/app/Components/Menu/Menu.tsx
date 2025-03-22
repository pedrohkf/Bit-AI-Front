import React from 'react'
import { ButtonRedirectPage } from '../Buttons/ButtonRedirectPage'
import styles from "./Menu.module.css"
import Logo from "../../../../public/icons/bit-logo.png";

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.logo}>
        <img src={Logo} alt='Logo' />
      </div>
      <div className={styles.buttons}>
        <ButtonRedirectPage pageRedirect="/login">Entrar</ButtonRedirectPage>
        <ButtonRedirectPage pageRedirect="/register">Começar</ButtonRedirectPage>
      </div>
    </div>
  )
}
