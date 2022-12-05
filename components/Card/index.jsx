// Styles
import styles from './Card.module.scss'

// Next Components
import Image from 'next/image'
import Link from 'next/link'

// Motion
import { motion } from 'framer-motion'

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
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {' >'}
          </motion.span>
          <motion.span
            initial={{ x: '-5px' }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, repeat: 'infinite', ease: 'easeInOut' }}
          >
            {' >'}
          </motion.span>
        </span>
      </article>
    </Link>
  )
}

export default Card
