// Styles
import Link from 'next/link'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>Copy rigth &copy; Plagaland</div>
      <div className={styles.author}>
        Website of
        <span>
          <Link href='https://maruan.es'>Maruan Vicente</Link>
        </span>
      </div>
    </footer>
  )
}

export default Footer
