// Styles
import styles from './Header.module.scss'

// Next Components
import Link from 'next/link'
import Image from 'next/image'

// Images
import logo from '../../public/images/Logo.webp'
import Nav from '../Nav'

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href='/'>
            <Image layout='responsive' src={logo} alt='Logo' />
          </Link>
        </div>
        <Nav />
      </header>
      <div className={styles.box} />
    </>
  )
}

export default Header
