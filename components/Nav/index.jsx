import Link from 'next/link'
import { useState } from 'react'

import styles from './Nav.module.scss'

const links = [{
  label: 'Inicio',
  link: 'inicio'
},
{
  label: 'Especialidad',
  link: 'especialidad'
},
{
  label: 'Contácto',
  link: 'contacto'
}]

const Nav = () => {
  const [nav, setNav] = useState(true)
  return (
    <>
      <nav className={nav ? styles.navClose : styles.nav}>
        <ul>
          {
          links.map(({ label, link }) => (
            <li key={link} onClick={() => setNav(true)}>
              <Link href={`/#${link}`}>
                {label}
              </Link>
            </li>
          ))
        }
        </ul>
        <button className={nav ? styles.button : styles.buttonClose} onClick={() => setNav(!nav)}><div /></button>
      </nav>
    </>
  )
}

export default Nav
