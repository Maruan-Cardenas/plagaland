// Styles
import styles from './Home.module.scss'

// Components
import Layout from '../components/Layout'
import SwiperCarouselBanner from '../components/Swiper/Banner'
import Card from '../components/Card'
import Form from '../components/Form'

// Image
import cucaracha from '../public/images/cucaracha.jpg'
import chinche from '../public/images/chinche.png'
import hormiga from '../public/images/hormiga.webp'
import rata from '../public/images/ratas.jpg'

const cards = [{
  image: cucaracha,
  title: 'Cucarachas',
  description: 'Inspeccionar y tratar las plagas de cucarachas tipo Alemana, Oriental, Americana y de banda marrón.',
  link: 'cucharachas'
},
{
  image: chinche,
  title: 'Chinche',
  description: 'Prevenir y controlar las infestaciones de parásitos como chinches domésticas y garrapatas.',
  link: 'chinches'
},
{
  image: hormiga,
  title: 'Hormiga',
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
    <Layout title='Plagaland'>
      <SwiperCarouselBanner />
      <div className={styles.description}>
        <p>En Ambiplag tenemos para ti el mejor servicio para solucionar todo tipo de problemas ocasionados por plagas de forma rápida. Intervenimos de forma inmediata y ponemos a tu disposición el mejor asesoramiento de nuestro equipo técnico para que obtengas los resultados más eficaces.</p>
      </div>
      <section id='especialidad' className={styles.cardBox}>
        <h2>
          Eliminación de plagas
          <div className={styles.line} />
          <div className={styles.line2} />
        </h2>
        <div>
          {
            cards.map(({ title, description, image }) => (
              <Card key={title} title={title} image={image} descripton={description} />
            ))
          }
        </div>
      </section>
      <div className={styles.description2}>
        <p>
          Las plagas es un problema muy común que los hogares y negocios experimentan alguna vez, con mayor o menos intensidad. En Plagaland somos conscientes de lo importante que es intervenir rápido e identificar cuanto antes la presencia de insectos, roedores, termitas o cualquier especie causante de plagas.
        </p>
        <p>
          Intervenimos de manera urgente con cuatro métodos de erradicación: desinfectar, desinsectar, fumigar y desratizar.
        </p>
      </div>
      <Form />
    </Layout>
  )
}
