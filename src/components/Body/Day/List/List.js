import React from 'react'
import './list.css'

function List (props) {
  const { item } = props
  const houer = item.dt_txt.split(' ')[1].substring(0, 5)
  return (
    <div className={'contener'}>
      <div className={'firstDiv'}>
        <h2>{houer}</h2>
        <h2>{item.weather[0].description}</h2>
      </div>
      <div>
        <h2>{item.main.temp}ْc</h2>
      </div>
      <div>
        <img className={'icon'} src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="icon"/>
      </div>
    </div>
  )
}

export default List 