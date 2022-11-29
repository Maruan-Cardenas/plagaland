// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y, Autoplay, EffectFade } from 'swiper'

// Import Swiper styles
import styles from './SwiperCarousel.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

// Components
import Image from 'next/image'
import { SlideNextButton, SlidePrevButton } from './Buttons'

// Images
import image1 from '../../public/images/image1.webp'
import image2 from '../../public/images/image2.webp'
import image3 from '../../public/images/image3.webp'
import image4 from '../../public/images/image4.webp'
import image5 from '../../public/images/image5.webp'

const SwiperCarouselBanner = () => {
  return (
    <>
      <Swiper
        className={styles.swiperBanner}
        modules={[Pagination, A11y, Autoplay, EffectFade]}
        spaceBetween={10}
        slidesPerView={1}
        effect='cube'
        autoplay={{ delay: 6000 }}
        pagination={{ clickable: true }}
      >
        <div className={styles.title}>
          <SlidePrevButton />
          <h1>Control de plagas en Andalucía</h1>
          <SlideNextButton />
        </div>
        <SwiperSlide>
          <div className={styles.sliderItem}>
            <div>
              <Image layout='responsive' src={image1} alt='Primera imagen' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.sliderItem}>
            <div>
              <Image layout='responsive' src={image2} alt='Segunda imagen' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.sliderItem}>
            <div>
              <Image layout='responsive' src={image3} alt='Tercera imagen' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.sliderItem}>
            <div>
              <Image layout='responsive' src={image4} alt='Cuarta imagen' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.sliderItem}>
            <div>
              <Image layout='responsive' src={image5} alt='Quínta imagen' />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
export default SwiperCarouselBanner
