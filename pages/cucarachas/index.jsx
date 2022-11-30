// Styles
import styles from './Cucarachas.module.scss'

// Components
import Layout from '../../components/Layout'
import Image from 'next/image'

// Images
import cucaracha from '../../public/images/cucaracha.jpg'
import Form from '../../components/Form'
import Title from '../../components/Title'

const Cockroach = () => {
  return (
    <Layout>
      <Image className={styles.image} src={cucaracha} alt='Eliminación de cucarachas' />
      <Title id='especialidad'>Eliminar Cucarachas</Title>
      <section className={styles.paragraphs}>
        <h2>El problema de las cucarachas</h2>
        <p>¿Por qué son un verdadero problema? Estos insectos contaminan productos con sus deposiciones y transmiten enfermedades como la gastroenteritis. Son potenciales portadores y transmisores de infecciones.</p>
        <p>Por eso, es muy importante el control y eliminación de cucarachas por parte de nuestros profesionales. Los tratamientos de fumigación de cucarachas en Málaga y Granada los llevamos a cabo minimizando los riesgos para las personas, los animales y el medio ambiente.</p>
        <p>El estudio del origen y biología del insecto, previo a la eliminación de cucarachas, es muy importante para realizar un tratamiento adecuado en el momento y lugar preciso.</p>
      </section>
      <section className={styles.paragraphs2}>
        <h2>¿Cómo saber si tengo cucarachas en casa?</h2>
        <p>Plagaland es una empresa de control de plagas especializada en la fumigación, desinfección, desinsectación y desratización.</p>
        <h3>¿Que residuos o restos dejan las cucarachas?</h3>
        <ul>
          <li>Manchas en muebles, zócalos o paredes</li>
          <li>Puntos negros de 1 mm en zócalos o muebles (heces)</li>
          <li>Restos amputados (alas, patas dentadas, antenas)</li>
          <li>Huvos u Ootecas</li>
        </ul>
      </section>
      <Form plaga='de cucarachas' />
    </Layout>
  )
}

export default Cockroach
