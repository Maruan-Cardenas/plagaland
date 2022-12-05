// Styles
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>Copy rigth &copy; Plagaland</div>
      <div className={styles.author}>Website of <span>Maruan Vicente</span></div>
    </footer>
  )
}

export default Footer
