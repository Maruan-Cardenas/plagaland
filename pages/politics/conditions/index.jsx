import Link from 'next/link'
import Layout from '../../../components/Layout'
import styles from '../Politics.module.scss'

const Conditions = () => {
  return (
    <Layout>
      <section className={styles.politics}>
        <h1>Aviso Legal</h1>
        <section>
          <h2>Titularidad de la Página Web</h2>
          <p>De acuerdo con el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio se informa al usuario que la página web es titularidad de AMBICASE, S.L.U., NIF / CIF: B10738714, con dirección en Avenida Amatista 2 , 29700 Vélez-Málaga (Málaga), el cual es responsable único y exclusivo en relación a la veracidad de la información contenida en la página web en cuanto a los textos, fotografías, logotipos, cupones, productos, servicios e imágenes visualizadas.</p>
        </section>
        <section>
          <h2>Términos y condiciones de uso</h2>
          <p>El acceso a esta página web atribuye la condición de USUARIO, quien accede voluntariamente a este sitio web. El mero acceso no implica el establecimiento de ningún tipo de relación comercial entre el USUARIO y AMBICASE, S.L.U.  La información suministrada en la página web tiene como finalidad facilitar el conocimiento por parte de los usuarios de las actividades y de los servicios que presta el ANUNCIANTE, quien se reserva el derecho de efectuar, en cualquier momento cuantas modificaciones, variaciones, supresión o cancelaciones de los contenidos y en la forma de presentación de los mismos que considere necesaria para la prestación de los servicios. Esta facultad no otorga a los usuarios ningún derecho a percibir indemnización por daños y perjuicios, por lo que se recomienda al USUARIO que lea este Aviso Legal tantas veces como acceda a la web.</p>
        </section>
        <section>
          <h2>Uso indebido</h2>
          <p>El USUARIO asume la responsabilidad del uso del portal, comprometiéndose a realizar un buen uso de la página web y aportar información veraz y lícita, no permitiéndose conductas que vayan contra la ley, los derechos o intereses de terceros.</p>
          <p>AMBICASE S.L.U se reservan el derecho a denegar o retirar el acceso a la web a aquellos USUARIOS que incumplen las condiciones y obligaciones de la presente página web.</p>
        </section>
        <section>
          <h2>Exclusión de garantías y responsabilidad</h2>
          <p>AMBICASE S.L.U no se responsabilizan del mal uso que se realice de los contenidos de la página web.</p>
          <p>No obstante, AMBICASE S.L.U declara que han adoptado todas las medidas necesarias, dentro de sus posibilidades y del estado de la tecnología, para garantizar el funcionamiento de la página web y evitar la existencia y transmisión de virus y demás componentes dañinos a los usuarios.</p>
        </section>
        <section>
          <h2>Enlaces</h2>
          <p>En el caso de que en en el sitio web se dispusiesen enlaces o hipervínculos hacía otros sitios de Internet, AMBICASE S.L.U no ejercerá ningún tipo de control sobre dichos sitios y contenidos, no asumiendo en ningún caso responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno.</p>
        </section>
        <section>
          <h2>Propiedad intelectual e industrial</h2>
          <p>El Copyright, diseño y creación de la página web es titularidad de AMBICASE S.L.U. El acceso gratuito no implica otros derechos o licencias para reproducción y/o distribución sin la previa autorización expresa del propietario, por lo que, de conformidad con lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, distribución y comunicación pública de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico sin previa autorización, comprometiéndose el USUARIO en respetar los derechos de Propiedad Intelectual e Industrial.</p>
          <p>Las marcas, logotipos, diseños, contenidos, programas u objetos similares que forman parte de esta página web, están protegidos por leyes de propiedad industrial e intelectual. La reproducción, distribución, manipulación o desensamblaje no autorizado de los códigos fuente, de los algoritmos incorporados o de la base datos, ya sea total o parcial, dará lugar a graves penalizaciones tanto civiles como penales y será objeto de cuantas acciones judiciales correspondan en Derecho.</p>
        </section>
        <section>
          <h2>Política de privacidad y protección de datos</h2>
          <p>Se informa al USUARIO que todos los datos recabados mediante los diferentes formularios que aparecen en la web serán incorporados a un fichero, creado y mantenido bajo la responsabilidad de AMBICASE S.L.U. con el fin de gestionar el envío de la información que soliciten, pudiendo elaborarse, de ser necesario, un perfil comercial, en base a la información facilitada. No se tomarán decisiones automatizadas en base a dicho perfil. Los datos personales proporcionados se conservarán mientras se mantenga la relación mercantil, en su caso, y no se solicite su supresión por el interesado.</p>
          <p>Para ello, AMBICASE S.L.U. solicitará el consentimiento del interesado a través del formulario de recogida de datos para el tratamiento de los mismos y la oferta prospectiva de productos y servicios, estando el USUARIO legitimado para retirar dicho consentimiento en cualquier momento, así como a ejercer sus derechos de acceso, rectificación, portabilidad y supresión de sus datos, y a presentar una reclamación ante la autoridad de control , si considera que el tratamiento no se ajusta a la normativa vigente.</p>
        </section>
        <section>
          <h2>Política de Cookies</h2>
          <p>Este sitio web puede utilizar cookies técnicas (pequeños archivos de información que el servidor envía al ordenador de quien accede a la página) para llevar a cabo determinadas funciones que son consideradas imprescindibles para el correcto funcionamiento y visualización del sitio. Las cookies utilizadas tienen, en todo caso, carácter temporal, con la única finalidad de hacer más eficaz la navegación, y desaparecen al terminar la sesión del usuario. En ningún caso, estas cookies proporcionan por sí mismas datos de carácter personal y no se utilizarán para la recogida de los mismos. Este sitio web no instalará cookies prescindibles sin el consentimiento previo del usuario.</p>
          <p>El USUARIO tiene la posibilidad de configurar su navegador para ser alertado de la recepción de cookies y para impedir su instalación en su equipo.</p>
          <p>Para más información consultar la política de Cookies en el siguiente <Link href='/politics/cookies'>ENLACE</Link></p>
        </section>
        <section>
          <h2>Legislación aplicable y jurisdicción</h2>
          <p>La relación con el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales que corresponda conforme a derecho.</p>
        </section>
      </section>
    </Layout>
  )
}

export default Conditions
