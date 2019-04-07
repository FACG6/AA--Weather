import React from 'react'
import './current.css'

function Current (props) {
  const { result, nextStatus } = props
  if(!result) {
    return (
      null
    )
  } else {
    if (!nextStatus) {
      const date = new Date() + '';
      const curruntDate = date.split(' ');
      return(
        <div className={'current'}>
          <img className={'photo'} src={`http://openweathermap.org/img/w/${result.weather[0].icon}.png`} alt="icon"/>
          <div className={'div'}>
            <h3 className={'date'}>{`${curruntDate[0]}, ${curruntDate[2]} ${curruntDate[1]}`}</h3>
            <h3 className={'desc'}>{result.weather[0].main}</h3>
          </div>
        </div>
      )
    }else {
      return(
        null
      )
    }
  }
}

export default Current