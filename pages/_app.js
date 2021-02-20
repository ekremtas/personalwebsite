import React from 'react'
import '../styles/globals.css'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import store from '../store/configureStore'

function MyApp({Component, pageProps}) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
}

export default MyApp
