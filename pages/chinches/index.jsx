// Styles
import styles from './Chinches.module.scss'

// Components
import Layout from '../../components/Layout'
import Image from 'next/image'
import Form from '../../components/Form'
import Title from '../../components/Title'

// Images
import chinche from '../../public/images/chinche.jpg'
import chinche2 from '../../public/images/chinche2.png'

const Bedbugs = () => {
  return (
    <Layout
      title='Plagaland | Chinches'
      description='Las Chinches son una de las mayores plagas y más preocupantes en cuanto a afecciones directa que al ser humano puede provocar'
      keywords='Chinches, fumigación de chinches, eliminar chinches, desinfección de chinches, infecciones por chinches, plaga de chinches, que son las chinches'
    >
      <Image className={styles.image} src={chinche} alt='Eliminación de cucarachas' />
      <Title id='especialidad'>Eliminar plaga de Chinches en Málaga y Granada</Title>
      <section className={styles.paragraphs}>
        <h2>El problema de las Chinches</h2>
        <p>
          Las CHINCHES son una de las mayores plagas y más preocupantes en cuanto a afecciones directa que al ser humano puede provocar.
          Son insectos parasitarios que se alimentan de sangre, principalmente la sangre del humano, sus picaduras provocan un picor continuo que no cesan con el paso del tiempo y causan mucha desesperación y estrés. Las picaduras las producen normalmente por la noche ya que es cuando el humano huésped emite mayor cantidad de dióxido de carbono (CO2) en la respiración. Como son las chinches;
        </p>
        <ul>
          <li>Tienen la cabeza corta y ancha, ojos prominentes a los lados de la cabeza</li>
          <li>El cuerpo ovalado y plano carente de alas</li>
          <li>Están recubiertas de un vello tenue que les da el aspecto de tener franjas, con tres pares de patas finas y desarrolladas</li>
          <li>Las hembras se distinguen de los machos porque su vientre es más simétrico y redondeado</li>
          <li>Nombre científico CIMEX LECTULARIUS</li>
        </ul>
      </section>
      <section className={styles.paragraphs2}>
        <Image src={chinche2} alt='chinche' />
        <h2>La importancia de erradicar una plaga de chinches</h2>
        <p>Las chinches son hematófagas, se alimentan de sangre, por lo que, para seguir con vida necesitan picarnos. Las picaduras cuando se producen son casi indoloras, el problema es posterior, cuando se producen reacciones cutáneas dependiendo de la sensibilidad de cada individuo que pueden llegar a infectarse e incluso producir diferentes grados de necrosis cutánea.</p>
      </section>
      <Form plaga='de chinches' />
    </Layout>
  )
}

export default Bedbugs
