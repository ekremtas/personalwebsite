import React from 'react'
import {useSelector} from 'react-redux'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import cookies from 'next-cookies'

export default function User() {
  const {user} = useSelector(state => state.user)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(getUserInfo())
  // }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>User Page </title>
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

User.getInitialProps = async ctx => {
  const kind = (await cookies(ctx).themeKind) || 'dark'
  return {
    themeKind: kind
  }
}
