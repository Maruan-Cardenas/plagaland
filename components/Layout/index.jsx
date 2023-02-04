// Styles
import styles from './Layout.module.scss'
// Next Components
import Head from 'next/head'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children, title, keywords, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name='author' content='Maruan Vicente Cardenas El Hachmaoui' />
        <meta name='copyright' content='Plagaland' />
        <meta name='google-site-verification' content='GOJ16utzr-GVMZMRIuMX6oPfj1wl97_v6YIe73eYdZQ' />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
