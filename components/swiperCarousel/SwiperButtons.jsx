import styles from './SwiperCarousel.module.scss'

import row from '../../public/flecha-white.png'

import { useSwiper } from 'swiper/react'

import Image from 'next/image'

export const SlideNextButton = () => {
  const swiper = useSwiper()
  return (
    <button className={styles.swiperNext} onClick={() => swiper.slideNext()}>
      <Image width={35} src={row} alt='Siguiente' />
    </button>
  )
}

export const SlidePrevButton = () => {
  const swiper = useSwiper()
  return (
    <button className={styles.swiperPrev} onClick={() => swiper.slidePrev()}>
      <Image width={35} src={row} alt='Anterior' />
    </button>
  )
}
