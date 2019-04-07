import React from 'react'
import './Button.css'

function Button (props) {
  let msg = ''
  if (props.nextStatus) {
    msg = 'Back TO Current'
  } else {
    msg = 'Next Days'
  }
  return(
    <button className={'next'} onClick={props.handelButton}>{msg}</button>
  )
}

export default Button