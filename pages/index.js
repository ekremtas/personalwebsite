import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useTranslation, Router, i18n} from '../config/next-i18next'

export default function Home() {
  const {t} = useTranslation('common')

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>ekremtascomtr! {t('title')}</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>
            <button
              onClick={() => {
                Router.push('/user')
              }}>
              kullanıcı Bilgilerini Gör
            </button>
            {'   '}
            <button
              onClick={() => {
                i18n.language == 'en'
                  ? i18n.changeLanguage('tr')
                  : i18n.changeLanguage('en')
              }}>
              {t('changeLanguage')}
            </button>
          </code>
        </p>
      </main>
    </div>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common']
})
