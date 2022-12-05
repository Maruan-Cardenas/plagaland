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
      </div>
    </section>
  )
}

export default Form
