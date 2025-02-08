import React from 'react'
import SideMenu from '../../Components/Menu/SideMenu'
import styles from "./dashboard.module.css"

export default function page() {
  return (
    <div className={styles.content}>
        <SideMenu />
        <h1>Deshboard</h1>
    </div>
  )
}
