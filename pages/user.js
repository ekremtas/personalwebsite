import React from 'react'
import {useSelector} from 'react-redux'
import Head from 'next/head'
import Link from 'next/link'
import {useTranslation} from '../config/next-i18next'
import styles from '../styles/Home.module.css'

export default function User() {
  const {user} = useSelector(state => state.user)
  const {t} = useTranslation('common')

  return (
    <div className={styles.container}>
      <Head>
        <title>User Page </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {t('welcome')}{' '}
          <a href='/'>
            {user.name}! {user.surname}
          </a>
        </h1>
        <Link href='/'>
          <h2 style={{cursor: 'pointer'}}>Go HomePage with Link</h2>
        </Link>
      </main>
    </div>
  )
}
