import React from 'react'
import '../styles/globals.css'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import store from '../store/configureStore'
import {appWithTranslation} from '../config/next-i18next'
import App from 'next/app'

function MyApp({Component, pageProps}) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

MyApp.getInitialProps = async appContext => ({...(await App.getInitialProps(appContext))})

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
}

export default appWithTranslation(MyApp)
