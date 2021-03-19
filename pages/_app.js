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
import cookies from 'next-cookies'
import {i18n} from '../config/next-i18next'

function MyApp({Component, pageProps, themeKind, language, languagetwo}) {
  const [theme, setTheme] = useState(themeKind)
  useEffect(async () => {
    await i18n.changeLanguage(language)
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
  //const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  console.error(themeKind, language, languagetwo)
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

MyApp.getInitialProps = async appContext => {
  const themeKind = (await cookies(appContext.ctx).themeKind) || 'dark'
  const language = (await cookies(appContext.ctx).language) || 'tr'
  const languagetwo = await appContext.ctx?.headers?.cookie
  return {
    languagetwo: languagetwo,
    language: language,
    themeKind: themeKind,
    ...(await App.getInitialProps(appContext))
  }
}

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
  themeKind: PropTypes.string,
  language: PropTypes.string,
  languagetwo: PropTypes.string
}

export default appWithTranslation(MyApp)
