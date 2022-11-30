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
      </article>
    </Link>
  )
}

export default Card
