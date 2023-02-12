import styles from '../styles/Home.module.css'
import HomePage from '../components/Home'
import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Andrea Destajo</title>
        <meta name="description" content="About Andrea Lyn Destajo"/>
        <link rel="icon" href="/Logo.svg"/>
      </Head>
      <HomePage />
    </div>
  )
}
