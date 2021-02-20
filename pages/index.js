import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>ekremtascomtr!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>
            <button
              onClick={() => {
                router.push('/user')
              }}>
              kullanıcı Bilgilerini Gör
            </button>
          </code>
        </p>
      </main>
    </div>
  )
}
