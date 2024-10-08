import React from 'react'
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={styles.navigationContainer}>
    <ul className={styles.mainMenu}>
      <li>Home</li>
      <li>Draw a card</li>
      <li>Yes or No</li>
      <li>AI Tarot</li>
      <li>Login</li>
      <li>Register</li></ul></div>
  )
}

export default NavBar