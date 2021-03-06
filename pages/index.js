import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionCarousel from '../Components/SectionCarousel'
import styles from '../styles/Home.module.css'
import Header from '../Components/NavbarAir';
import RangerCardImage from '../Components/RangerCardOne'

export default function Home() {
  return (
    <div className="container-fluid p-0">
      <Head>
        <title>dreamautomobilia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container-fluid h-100 p-0" >
          <Header />
          <SectionCarousel />
          <RangerCardImage />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
