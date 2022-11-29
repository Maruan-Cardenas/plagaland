// Styles
import styles from './Form.module.scss'

// Hooks
import { useForm, ValidationError } from '@formspree/react'

const Form = () => {
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
      <div className={styles.formBox}>
        <h2>Te contactámos</h2>
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
            {state.submitting ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Form
