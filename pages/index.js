import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useTranslation, Router, i18n} from '../config/next-i18next'
import Button from '../common/button'
import PropTypes from 'prop-types'

export default function Home({setTheme}) {
  const {t} = useTranslation('common')

  return (
    <div className={styles.container}>
      <Head>
        <title>Ekrem TAŞ | Frontend Dev.</title>
        <link
          rel='icon'
          type='image/svg+xml'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%23000000%22></rect><path fill=%22%23fff%22 d=%22M36 80.45L36 80.45Q32.80 80.45 30.95 78.55Q29.10 76.65 29.10 73.45L29.10 73.45L29.10 26.45Q29.10 23.25 30.95 21.40Q32.80 19.55 36 19.55L36 19.55L69.10 19.55Q69.60 20.35 70 21.65Q70.40 22.95 70.40 24.55L70.40 24.55Q70.40 27.15 69.20 28.55Q68 29.95 65.90 29.95L65.90 29.95L41.70 29.95L41.70 44.15L66.10 44.15Q66.60 44.95 67.05 46.20Q67.50 47.45 67.50 49.05L67.50 49.05Q67.50 54.45 62.90 54.45L62.90 54.45L41.70 54.45L41.70 69.95L69.50 69.95Q70 70.75 70.45 72.10Q70.90 73.45 70.90 75.05L70.90 75.05Q70.90 80.45 66.30 80.45L66.30 80.45L36 80.45Z%22></path></svg>'
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {t('welcome_part_1')}
          <a href='https://nextjs.org'> {t('welcome_part_2')}</a>
          {t('welcome_part_3')}
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>
            <Button
              onClick={() => {
                Router.push('/user')
              }}
              color={'secondary'}>
              kullanıcı Bilgilerini Görmek için Tıklayın.
            </Button>
            {'   '}
            <Button
              onClick={() => {
                i18n.language == 'en'
                  ? (i18n.changeLanguage('tr'), localStorage.setItem('language', 'tr'))
                  : (i18n.changeLanguage('en'), localStorage.setItem('language', 'en'))
              }}>
              {t('changeLanguage')}
            </Button>
            <Button
              onClick={() => {
                localStorage.setItem('theme', 'dark')
                setTheme('dark')
              }}>
              DARK
            </Button>
            <Button
              onClick={() => {
                localStorage.setItem('theme', 'light')
                setTheme('light')
              }}>
              LIGHT
            </Button>
          </code>
        </p>
      </main>
    </div>
  )
}
Home.propTypes = {
  setTheme: PropTypes.func
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common']
})
