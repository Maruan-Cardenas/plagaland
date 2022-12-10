import styles from './SwiperCarousel.module.scss'

import row from '../../public/flecha-white.png'

import { useSwiper } from 'swiper/react'

import Image from 'next/image'

export const SlideNextButton = () => {
  const swiper = useSwiper()
  return (
    <span className={styles.swiperNext} onClick={() => swiper.slideNext()}>
      <Image width={35} src={row} alt='Siguiente' />
    </span>
  )
}

export const SlidePrevButton = () => {
  const swiper = useSwiper()
  return (
    <span className={styles.swiperPrev} onClick={() => swiper.slidePrev()}>
      <Image width={35} src={row} alt='Anterior' />
    </span>
  )
}
