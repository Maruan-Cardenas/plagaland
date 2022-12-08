// Styles
import styles from './Home.module.scss'

// Components
import Layout from '../components/Layout'
import SwiperCarouselBanner from '../components/Swiper/Banner'
import Card from '../components/Card'
import Form from '../components/Form'
import Slider from '../components/Reviews/Slider.jsx'
import Cookie from '../components/Cookie'

// Next Component
import Image from 'next/image'

// Image
import cucaracha from '../public/images/cucaracha.jpg'
import cucarachaPng from '../public/images/cucaracha.png'
import chinche from '../public/images/chinche.jpg'
import hormiga from '../public/images/hormiga.webp'
import rata from '../public/images/ratas.jpg'

const cards = [{
  image: cucaracha,
  title: 'Cucarachas',
  description: 'Inspeccionar y tratar las plagas de cucarachas tipo Alemana, Oriental, Americana y de banda marrón.',
  link: 'cucarachas'
},
{
  image: chinche,
  title: 'Chinches',
  description: 'Prevenir y controlar las infestaciones de parásitos como chinches domésticas y garrapatas.',
  link: 'chinches'
},
{
  image: hormiga,
  title: 'Hormigas',
  description: 'Controlar y eliminar las plagas de hormigas y otros insectos localizados en casas y huertos.',
  link: 'hormigas'
}, {
  image: rata,
  title: 'Ratas',
  description: 'Controlar, prevenir y tratar las plagas de ratas negras, marrones y otros tipos para su eliminación.',
  link: 'ratas'
}]

export default function Home () {
  return (
    <Layout
      title='Plagaland | Home'
      description='Plagaland es una empresa de control de plagas especializada en la fumigación, desinfección y desratización'
      keywords='plagas, fumigar, fumigación, control de plagas, infestaciones'
    >
      <SwiperCarouselBanner />
      <div className={styles.description}>
        <Image className={styles.image} src={cucarachaPng} alt='Eliminación de cucarachas' />
        <p>Plagaland es una empresa de control de plagas especializada en la fumigación, desinfección y desratización.</p>
        <p>Nos esforzamos en proporcionar rápidamente tratamientos eficaces en las provincias de Málaga y Granada. Para ello realizamos la aplicación del mejor producto y la prestación de un excelente servicio postventa</p>
      </div>
      <section id='especialidad' className={styles.cardBox}>
        <h2>
          Eliminación de plagas
        </h2>
        <div className={styles.cardContainer}>
          {
            cards.map(({ title, description, image, link }) => (
              <Card key={title} link={link} title={title} image={image} description={description} />
            ))
          }
        </div>
      </section>
      <section className={styles.description2}>
        <h2>El problema de las plagas</h2>
        <p>
          Las plagas es un problema muy común que los hogares y negocios experimentan alguna vez, con mayor o menos intensidad. En Plagaland somos conscientes de lo importante que es intervenir rápido e identificar cuanto antes la presencia de insectos, roedores.
        </p>
        <p>
          Intervenimos de manera urgente con cuatro métodos de erradicación: desinfectar, desinsectar, fumigar y desratizar.
        </p>
      </section>
      <section id='opiniones' className={styles.reviews}>
        <h3 className={styles.title}>Opiniones</h3>
        <Slider />
      </section>
      <Form />
      <Cookie />
    </Layout>
  )
}
