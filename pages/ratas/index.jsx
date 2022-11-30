// Styles
import styles from './Ratas.module.scss'

// Components
import Layout from '../../components/Layout'
import Image from 'next/image'
import Form from '../../components/Form'
import Title from '../../components/Title'

// Images
import ratas from '../../public/images/ratas.jpg'
import ratasPng from '../../public/images/rata.png'

const Cockroach = () => {
  return (
    <Layout>
      <Image className={styles.image} src={ratas} alt='Eliminación de ratas' />
      <Title id='especialidad'>Eliminar Ratas</Title>
      <section className={styles.paragraphs}>
        <h2>El problema de las Ratas</h2>
        <p>Los roedores, como las ratas y los ratones, son responsables de propagar enfermedades, dañar la comida y propiedades.</p>
        <p>Tienen una gran capacidad de adaptación a los entornos y alimentos, estos animales son un gran problema y cualquier casa o local es propicio a sufrir una plaga de estos roedores.</p>
      </section>
      <section className={styles.paragraphs2}>
        <Image src={ratasPng} alt='control de plagas de hormigas' />
        <h2>Como detectar la presencia de Roedores</h2>
        <p>Para identificarlos es necesario la observación de algunos datos relevantes que nos aportan como:</p>
        <ul>
          <li>Señales sonoras, se pueden escuchar en la pared o debajo del suelo, también puedes escucharlos al correr.</li>
          <li>Se pueden percibir malos olores</li>
          <li>Por la observación de sus excrementos.</li>
          <li>Trazas de comida en esquinas o en el interior del mobiliario</li>
          <li>Muebles o elementos con marcas de mordeduras y deterioros</li>
        </ul>
      </section>
      <Form plaga='de hormigas' />
    </Layout>
  )
}

export default Cockroach
