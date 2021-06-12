import React, {useEffect, useState} from 'react'
import '../styles/globals.css'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import store from '../store/configureStore'
import {appWithTranslation} from '../config/next-i18next'
import App from 'next/app'
import {ThemeProvider} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Head from 'next/head'
import {lightTheme, darkTheme} from '../styles/theme'
import {i18n} from '../config/next-i18next'

function MyApp({Component, pageProps}) {
  const [theme, setTheme] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    const language = localStorage.getItem('language')
    const theme = localStorage.getItem('theme')
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')

    jssStyles && jssStyles.parentElement.removeChild(jssStyles)
    theme && (await setTheme(theme))
    language && (await i18n.changeLanguage(language))

    setLoading(false)
  }, [])

  if (loading) return <h1>LOADING</h1>
  return (
    <ThemeProvider theme={(theme === 'dark' && darkTheme) || lightTheme}>
      <Provider store={store}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}

        <CssBaseline />
        <Head>
          <title>Ekrem TAŞ</title>
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width'
          />
        </Head>

        <Component {...pageProps} setTheme={setTheme} />
      </Provider>
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async appContext => ({...(await App.getInitialProps(appContext))})

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
}

export default appWithTranslation(MyApp)
