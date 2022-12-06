// Styles
import styles from './Card.module.scss'

// Next Components
import Image from 'next/image'
import Link from 'next/link'
import { Phone, WhatsApp } from '../Icons'

const Card = ({ alt, image, title, description, link }) => {
  return (
    <article className={styles.card}>
      <Image src={image} alt={alt} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.information}>
        <span className={styles.contact}>
          <Phone />
          <WhatsApp />
        </span>
        <Link className={styles.buttonMore} href={`/${link}`}>
          Ver más
          <div className={styles.one}>{' >'}</div>
          <div className={styles.two}>{' >'}</div>
          <div className={styles.three}>{' >'}</div>
        </Link>
      </div>
    </article>
  )
}

export default Card
