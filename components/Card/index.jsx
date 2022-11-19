import Image from 'next/image'
import styles from './Card.module.scss'

const Card = ({ alt, image, title, descripton }) => {
  return (
    <section className={styles.card}>
      <div className={styles.image}>
        <Image src={image} alt={alt} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{descripton}</p>
    </section>
  )
}

export default Card
