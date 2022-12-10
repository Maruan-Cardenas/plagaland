import Link from 'next/link'
import { useState } from 'react'

import styles from './Nav.module.scss'

import { Email, Phone, WhatsApp } from '../Icons'

const links = [{
  label: 'Inicio',
  link: 'inicio'
},
{
  label: 'Especialidad',
  link: 'especialidad'
},
{
  label: 'Opiniones',
  link: 'opiniones'
},
{
  label: 'Contacto',
  link: 'contacto'
}]

const Nav = () => {
  const [nav, setNav] = useState(false)
  return (
    <>
      <nav className={nav ? styles.navMobile : styles.nav}>
        <ul>
          {
          links.map(({ label, link }) => (
            <li key={link} onClick={() => setNav(false)}>
              <Link href={`/#${link}`}>
                {label}
              </Link>
            </li>
          ))
        }
          <li className={styles.contact}>
            <Email />
            <Phone />
            <WhatsApp />
          </li>
        </ul>
        <span className={nav ? styles.buttonClose : styles.button} onClick={() => setNav(!nav)}><div /></span>
      </nav>
    </>
  )
}

export default Nav
