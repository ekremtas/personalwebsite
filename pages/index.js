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
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
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
