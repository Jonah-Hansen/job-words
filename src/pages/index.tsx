import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import styles from '@/styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>JobWords</title>
        <meta name="description" content="track job posting keywords" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <Hero />
      </main>
    </>
  )
}
