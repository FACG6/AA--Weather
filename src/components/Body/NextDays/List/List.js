import React from 'react'

function List(props) {
  const { item } = props
  return (
    <div>
      <span>{item.weather[0].description}</span>
      <span>{item.main.temp}ْc</span>
      <span><img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="icon" /></span>
    </div>
  )
}

export default List