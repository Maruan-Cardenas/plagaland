// Styles
import styles from './Home.module.scss'

// Components
import Layout from '../components/Layout'
import SwiperCarouselBanner from '../components/SwiperCarousel/SwiperCarouseBanner'
import Card from '../components/Card'

// Image
import cucaracha from '../public/images/cucaracha.jpg'

const cards = [{
  image: cucaracha,
  title: 'Cucarachas',
  description: 'Inspeccionar y tratar las plagas de cucarachas tipo Alemana, Oriental, Americana y de banda marrón.'
}]

export default function Home () {
  return (
    <Layout title='Plagaland'>
      <SwiperCarouselBanner />
      <div className={styles.description}>
        <p>En Ambiplag tenemos para ti el mejor servicio para solucionar todo tipo de problemas ocasionados por plagas de forma rápida. Intervenimos de forma inmediata y ponemos a tu disposición el mejor asesoramiento de nuestro equipo técnico para que obtengas los resultados más eficaces.</p>
      </div>
      {
        cards.map(({ title, description, image }) => (
          <Card key={title} title={title} image={image} descripton={description} />
        ))
      }
    </Layout>
  )
}
