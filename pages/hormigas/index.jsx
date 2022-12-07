// Styles
import styles from './Hormigas.module.scss'

// Components
import Layout from '../../components/Layout'
import Image from 'next/image'
import Form from '../../components/Form'
import Title from '../../components/Title'

// Images
import hormigas from '../../public/images/hormiga.webp'
import hormigaPng from '../../public/images/hormiga.png'

const Cockroach = () => {
  return (
    <Layout
      title='Plagaland | Hormigas'
      description='Las hormigas son una plaga que se activa con la llegada de la primavera. Debido a las temperaturas más cálidas de los últimos años, estos insectos han proliferado de una manera significativa'
      keywords='hormigas, eliminar hormigas, plaga de hormigas, infección de hormigas, desinfección de hormigas'
    >
      <Image className={styles.image} src={hormigas} alt='Eliminación de hormigas' />
      <Title id='especialidad'>Eliminar plaga de Hormigas en Málaga y Granada</Title>
      <section className={styles.paragraphs}>
        <h2>El problema de las Hormigas</h2>
        <p>Las hormigas son una plaga que se activa con la llegada de la primavera. Debido a las temperaturas más cálidas de los últimos años, estos insectos han proliferado de una manera significativa, con una adaptación sorprendente para vincular su actividad con la del ser humano invadiendo sus viviendas.</p>
        <p>
          Porque invaden las cocinas en busca de alimento que, además de llevárselo en pequeñas cantidades, también lo contaminan al igual que las zonas por las que pasan.
        </p>
        <p>No transmiten gérmenes causantes de enfermedades, pero transmiten bacterias que causen problemas estomacales e infecciones. También dañan cultivos y edificios. Algunas especies de hormigas tiene alas y pueden confundirse con termitas.</p>
      </section>
      <section className={styles.paragraphs2}>
        <Image src={hormigaPng} alt='control de plagas de hormigas' />
        <h2>Solucionar el problema de las hormigas</h2>
        <p>Plagaland cuenta con años de experiencia que nos convierten en expertos en la prevención y control de plagas de hormigas. Utilizamos productos y estrategias innovadoras que nos permiten erradicarlas rápida y eficazmente.</p>
      </section>
      <Form plaga='de hormigas' />
    </Layout>
  )
}

export default Cockroach
