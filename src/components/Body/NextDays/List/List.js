import React from 'react'
import './list.css'

function List(props) {
  const { item, index } = props
  const dayy = ['00.00-03.00',     
  '03.00-06.00',
   '06.00-09.00',       
   '09.00-12.00',       
   '12.00-15.00',     
   '15.00-18.00',     
   '18.00-21.00',     
   '21.00-00.00' ]
  return (
    <div className={'contener'}>
      <div className={'div'}>
        <span>{dayy[index]}</span>
        <span className={'desc'}>{item.weather[0].description}</span>
      </div>
      <span className={'desc'}>{item.main.temp}ْc</span>
      <span><img className={'icon'} src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="icon" /></span>
    </div>
  )
}

export default List