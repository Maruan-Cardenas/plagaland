import Link from 'next/link'
import { useState } from 'react'

import styles from './Nav.module.scss'

const Nav = () => {
  const [nav, setNav] = useState(true)
  return (
    <>
      <nav className={nav ? styles.navClose : styles.nav}>
        <ul>
          <li>
            <Link href='#inicio'>
              Inicio
            </Link>
          </li>
          <li>
            <Link href='#especialidad'>
              Especialidad
            </Link>
          </li>
          <li>
            <Link href='#contacto'>
              Contacto
            </Link>
          </li>
        </ul>
        <button className={nav ? styles.button : styles.buttonClose} onClick={() => setNav(!nav)}><div /></button>
      </nav>
    </>
  )
}

export default Nav
