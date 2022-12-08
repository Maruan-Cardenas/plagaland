// Styles
import styles from './Form.module.scss'

// Hooks
import { useForm, ValidationError } from '@formspree/react'

// Icons
import { WhatsApp, Email, Phone } from '../Icons'

const Form = ({ plaga }) => {
  const [state, handleSubmit] = useForm('mvoyavkj')
  if (state.succeeded) {
    return (
      <section>
        <h3>¡Gracias por contactarnos!</h3>
        <p>
          Mensaje recibido correctamente, nos pondremos en contacto lo antes
          posibles.
        </p>
      </section>
    )
  }
  return (
    <section id='contacto' className={styles.form}>
      <h4>Necesitas acabar con una plaga {plaga} contáctanos</h4>
      <div className={styles.formBox}>
        <div className={styles.contact}>
          <Phone />
          <WhatsApp />
          <Email />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Nombre completo'
          />
          <div>
            <input id='email' type='email' name='email' placeholder='Email' />
            <ValidationError
              prefix='Email'
              field='email'
              errors={state.errors}
            />
            <span>
              (O)
            </span>
            <input
              type='number'
              name='phone'
              id='phone'
              placeholder='Teléfono'
            />
          </div>
          <textarea
            id='message'
            name='message'
            placeholder='Mensaje'
            cols='10'
            rows='5'
          />
          <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
          />
          <button type='submit' disabled={state.submitting}>
            {state.submitting ? 'Enviando...' : 'Contáctame'}
          </button>
        </form>
        <div className={styles.map}>
          <iframe src='https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d102277.7816464275!2d-4.173033547295396!3d36.76623287325088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0xd7245ef7c3bfa99%3A0x480e5eaae64a021c!2zQy4gUHJ0YSBOdWV2YSwgOCwgMjk3MDAgVsOpbGV6LU3DoWxhZ2EsIE3DoWxhZ2E!3m2!1d36.7662534!2d-4.1029935!5e0!3m2!1ses-419!2ses!4v1670403905273!5m2!1ses-419!2ses' width='600' height='450' allowFullScreen='' loading='lazy' title='Mapa de localización' />
        </div>
      </div>
    </section>
  )
}

export default Form
