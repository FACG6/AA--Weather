import React from 'react'

function Current (props) {
  const { result } = props
  if(!result) {
    return (
      null
    )
  } else {
    const date = new Date() + '';
    const curruntDate = date.split(' ');
    return(
      <div>
        <img src={`http://openweathermap.org/img/w/${result.weather[0].icon}.png`} alt="icon"/>
        <h3>{`${curruntDate[0]}, ${curruntDate[2]} ${curruntDate[1]}`}</h3>
        <h3>{result.weather[0].main}</h3>
      </div>
    )
  }
}

export default Current