// styles
import styles from './Reviews.module.scss'

// Components
import { Start } from '../Icons'
import Link from 'next/link'

const Reviews = ({ data }) => {
  const handleStart = (starts) => {
    const startArray = []
    for (let step = 0; starts > step; step++) {
      startArray.push(<Start />)
    }
    return startArray
  }

  return (
    <div className={styles.reviews}>
      <section className={styles.reviewsBox}>
        <h3 className={styles.title}>{data.name}</h3>
        <div className={styles.starts}>{handleStart(data.start)}</div>
        <div className={styles.positive}>Puntos positivos: {data.positive}</div>
        <div className={styles.service}>Servicio: {data.service}</div>
        <div className={styles.description}>{data.description}</div>
        <div className={styles.link}> <Link href={data.link}>Ver opinión</Link> </div>
      </section>
    </div>
  )
}

export default Reviews
