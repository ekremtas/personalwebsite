import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {getUserInfo} from '../store/actions/userActions'

export default function User() {
  const {user} = useSelector(state => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserInfo())
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>User Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{' '}
          <a href='/'>
            {user.name}! {user.surname}
          </a>
        </h1>
      </main>
    </div>
  )
}
