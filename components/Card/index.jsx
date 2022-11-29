// Styles
import styles from './Card.module.scss'

// Next Components
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ alt, image, title, descripton, link }) => {
  return (
    <section className={styles.card}>
      <Link href={`/${link}`}>
        <div className={styles.image}>
          <Image src={image} alt={alt} />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{descripton}</p>
      </Link>
    </section>
  )
}

export default Card
