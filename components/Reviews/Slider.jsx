import Reviews from './'
import styles from './Slider.module.scss'
import data from '../../db/reviews.json'

const Slider = () => {
  const reviews = { ...data }.reviews
  return (
    <div className={styles.slider}>
      <ul>
        {
          reviews.map((res) => (
            <li key={res.id}>
              <Reviews data={res} />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Slider
