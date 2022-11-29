// Styles
import styles from './Layout.module.scss'
// Next Components
import Head from 'next/head'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
