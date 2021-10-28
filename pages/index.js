import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Login from '../components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bobble AI</title>
        <meta name="description" content=" BobbleAI Voice AI " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Login/>

    </div>
  )
}
