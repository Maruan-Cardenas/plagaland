// Styles
import styles from './Cucarachas.module.scss'

// Components
import Layout from '../../components/Layout'
import Image from 'next/image'
import Title from '../../components/Title'
import Form from '../../components/Form'

// Images
import cucaracha from '../../public/images/cucaracha.jpg'
import cucaracha2 from '../../public/images/cucaracha2.png'
import cucarachaAmericana from '../../public/images/cucaracha-americana.jpg'
import cucarachaAlemana from '../../public/images/cucaracha-alemana.jpg'
import cucarachaOriental from '../../public/images/cucaracha-oriental.jpg'
const Cockroach = () => {
  return (
    <Layout
      title='Plagaland | Cucarachas'
      description='Las Cucarachas son insectos que contaminan productos con sus deposiciones y son transmisores de enfermedades'
      keywords='cucarachas, eliminar cucarachas, plaga de cucarachas, infección de cucarachas, enfermedades por cucarachas, eliminar plaga de cucarachas'
    >
      <Image className={styles.image} src={cucaracha} alt='Eliminación de cucarachas' />
      <Title id='especialidad'>Eliminar plaga de Cucarachas en Málaga y Granada</Title>
      <section className={styles.paragraphs}>
        <h2>El problema de las cucarachas</h2>
        <p>¿Por qué son un verdadero problema? Estos insectos contaminan productos con sus deposiciones y transmiten enfermedades como la gastroenteritis. Son potenciales portadores y transmisores de infecciones.</p>
        <p>Por eso, es muy importante el control y eliminación de cucarachas por parte de nuestros profesionales. Los tratamientos de fumigación de cucarachas en Málaga y Granada los llevamos a cabo minimizando los riesgos para las personas, los animales y el medio ambiente.</p>
        <p>El estudio del origen y biología del insecto, previo a la eliminación de cucarachas, es muy importante para realizar un tratamiento adecuado en el momento y lugar preciso.</p>
      </section>
      <section className={styles.paragraphs2}>
        <h2>Tipos de cucarachas más comunes</h2>
        <article>
          <h3>Cucaracha Americana</h3>
          <div>
            <p>Conocida como cucaracha voladora o volantona, es la de mayor tamaño, puede llegar a medir hasta 5cm y tiene un color marrón rojizo.</p>
            <Image src={cucarachaAmericana} alt='Cucaracha Americana' />
          </div>
        </article>
        <article>
          <h3>Cucaracha Alemana</h3>
          <div>
            <p>Conocida como cucaracha rubia por su color pardo amarillento, son las que se reproducen en mayor cantidad.</p>
            <Image src={cucarachaAlemana} alt='Cucaracha Alemana' />
          </div>
        </article>
        <article>
          <h3>Cucaracha Oriental</h3>
          <div>

            <p>Conocida como cucaracha negra, suelen vivir en los alrededores de los edificios y propagarse por las cañerías.</p>
            <Image src={cucarachaOriental} alt='Cucaracha Oriental' />
          </div>
        </article>
      </section>
      <section className={styles.paragraphs3}>
        <Image src={cucaracha2} alt='plaga de cucarachas' />
        <h2>¿Cómo saber si tengo cucarachas en casa?</h2>
        <p>Plagaland es una empresa de control de plagas especializada en la fumigación, desinfección, desinsectación y desratización.</p>
        <h3>¿Que residuos o restos dejan las cucarachas?</h3>
        <ul>
          <li>Manchas en muebles, zócalos o paredes</li>
          <li>Puntos negros de 1 mm en zócalos o muebles (heces)</li>
          <li>Restos amputados (alas, patas dentadas, antenas)</li>
          <li>Huevos u Ootecas</li>
        </ul>
      </section>
      <Form plaga='de cucarachas' />
    </Layout>
  )
}

export default Cockroach
