import { useState, useEffect } from 'react'

import styles from './Cookie.module.scss'

// Motion Components
import { motion } from 'framer-motion'
import Link from 'next/link'

const Cookie = () => {
  const [accept, setAcept] = useState(false)
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const cookie = localStorage.getItem('cookie')
    if (!cookie) {
      setAcept(true)
    } else setAcept(false)
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie', true)
    setIsOpen(false)
  }

  const variant = {
    open: { y: '0%' },
    closed: { y: '100%' }
  }

  return (
    accept && (
      <motion.div
        className={styles.cookies}
        initial={{ y: '100%' }}
        animate={isOpen ? 'open' : 'closed'}
        variants={variant}
        transition={{ duration: 0.5 }}
      >
        <h3>Cookies</h3>
        <p>
          Las cookies le permiten personalizar su experiencia en nuestro sitio,
          decirnos qué partes de nuestros sitios web ha visitado la gente,
          ayudarnos a medir la efectividad de los anuncios y las búsquedas web,
          y brindarnos información sobre el comportamiento de los usuarios.
          podemos mejorar nuestras comunicaciones y productos.
          <Link href='/politics/cookies'>Política de Cookies</Link>
        </p>
        <button className={styles.cookiesButton} onClick={handleAccept}>
          Aceptar
        </button>
      </motion.div>
    )
  )
}

export default Cookie
