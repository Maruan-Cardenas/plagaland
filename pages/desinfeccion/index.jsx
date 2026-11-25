// Styles
import styles from './Ratas.module.scss'

// Components
import Layout from '../../components/Layout'
import Image from 'next/image'
import Form from '../../components/Form'
import Title from '../../components/Title'

// Images
import ratas from '../../public/images/desinfeccion-2.jpg'
import ratasPng from '../../public/images/rata.png'

const Cockroach = () => {
  return (
    <Layout
      title='Plagaland | Desinfección'
      description='Realizamos intervenciones rápidas y especializadas de higienización y desinfección en toda la provincia de Córdoba, restableciendo condiciones óptimas de salubridad en espacios abiertos al público y empresas, como locales de hostelería, alojamientos turísticos, colegios y universidades, centros deportivos, zonas de bienestar, centros sanitarios y residencias para mayores'
      keywords='desinfeccion, control, plagas, higienización, limpieza'
    >
      <Image className={styles.image} src={ratas} alt='Desinfección y control de plagas' />
      <Title id='especialidad'>Desinfección en Málaga y Granada</Title>
      <section className={styles.paragraphs}>
        <h2>Desinfección</h2>
        <p>Realizamos intervenciones rápidas y especializadas de higienización y desinfección en toda la provincia de Córdoba y Málaga.</p>
        <p>Restablecemos las condiciones óptimas de salubridad en espacios abiertos al público y empresas, como locales de hostelería, alojamientos turísticos, colegios y universidades, centros deportivos, zonas de bienestar, centros sanitarios y residencias para mayores</p>
      </section>
      <section className={styles.paragraphs2}>
        <Image src={ratasPng} alt='control de plagas de hormigas' />
        <h2>¿En qué consiste un tratamiento de desinfección en Córdoba?</h2>
        <p>Desinfectar consiste en eliminar por completo los microorganismos presentes en un espacio, tanto los que flotan en el aire como los que se adhieren a cualquier superficie, incluidos los rincones más ocultos o difíciles de alcanzar.</p>
        <p>Actuamos de manera eficaz frente a todo tipo de gérmenes y agentes infecciosos —virus, bacterias, hongos, protozoos o esporas— mediante equipos técnicos avanzados y personal cualificado. Prestamos servicio en viviendas particulares, bloques residenciales, comercios, compañías, entidades, zonas de concurrencia pública o instalaciones médicas.</p>
        <p>Un servicio profesional alcanza zonas que la higiene cotidiana o la limpieza convencional no logran cubrir. Contamos con sólida trayectoria planificando y aplicando estrategias de desinfección efectivas, cuidando cada detalle para que ningún punto quede sin higienizar.</p>
        <p>Con métodos rigurosos, equipamiento específico y atención minuciosa, intervenimos en el aire y en las superficies para lograr una erradicación integral de los patógenos.</p>
        <p>Además, para garantizar la salud pública y ajustarse a la normativa aplicable, numerosos establecimientos y entidades deben contratar de forma regular a firmas autorizadas, entre otras tareas, para el control y prevención de la legionela.</p>
        <p>Entre estos sectores se encuentran consultas odontológicas, centros de estética médica, hospitales y clínicas, instalaciones deportivas, balnearios y spas, bares y restaurantes, hoteles, pabellones deportivos, empresas del sector alimentario, comedores escolares y centros geriátricos, además de muchos otros.</p>
      </section>
      <Form plaga='' />
    </Layout>
  )
}

export default Cockroach
