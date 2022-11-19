import { useState } from 'react'

import styles from './Nav.module.scss'

const Nav = () => {
  const [nav, setNav] = useState(true)
  return (
    <>
      <nav className={nav ? styles.navClose : styles.nav}>
        <ul>
          <li>Inicio</li>
          <li>Conócenos</li>
        </ul>
        <button className={nav ? styles.button : styles.buttonClose} onClick={() => setNav(!nav)}><div /></button>
      </nav>
    </>
  )
}

export default Nav
