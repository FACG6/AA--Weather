import React from 'react'

function Button (props) {
  let msg = ''
  if (props.nextStatus) {
    msg = 'Back TO Current'
  } else {
    msg = 'Next Days'
  }
  return(
    <button onClick={props.handelButton}>{msg}</button>
  )
}

export default Button