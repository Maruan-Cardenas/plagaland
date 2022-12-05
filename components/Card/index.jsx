// Styles
import styles from './Card.module.scss'

// Next Components
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ alt, image, title, description, link }) => {
  return (
    <Link href={`/${link}`}>
      <article className={styles.card}>
        <div className={styles.image}>
          <Image src={image} alt={alt} />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.more}>
          Ver más
          <span className={styles.one}>{' >'}</span>
          <span className={styles.two}>{' >'}</span>
          <span className={styles.three}>{' >'}</span>
        </span>
      </article>
    </Link>
  )
}

export default Card
