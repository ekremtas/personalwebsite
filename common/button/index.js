import React from 'react'
import MUIButton from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
const useStyles = makeStyles(() => ({
  shadow: {
    textTransform: 'none'
  }
}))

function Button({children, ...props}) {
  const classes = useStyles()
  return (
    <MUIButton variant='outlined' color='primary' className={classes.shadow} {...props}>
      {children}
    </MUIButton>
  )
}

Button.propTypes = {
  children: PropTypes.string
}
export default Button
