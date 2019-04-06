import React from 'react'
import List from './List/List'

function NextDays (props) {
  const { result, nextStatus } = props
  if (nextStatus) {
    const day1 = result.list.slice(2, 10)
    const day2 = result.list.slice(10, 18)
    const day3 = result.list.slice(18, 26)
    const day4 = result.list.slice(26, 34)
    return (
      <div>
        <div>
          <span>Day</span>          
          <span>00.00-03.00</span>       
          <span>03.00-06.00</span>       
          <span>06.00-09.00</span>       
          <span>09.00-12.00</span>       
          <span>12.00-15.00</span>     
          <span>15.00-18.00</span>     
          <span>18.00-21.00</span>     
          <span>21.00-00.00</span>     
        </div>
        <div>
          <div>
            {day1[0].dt_txt.split(' ')[0]}
            {day1.map((item, index) => <List key={index} item={item} />)}
          </div>
          <div>
            {day2[0].dt_txt.split(' ')[0]}
            {day2.map((item, index) => <List key={index} item={item} />)}
          </div>
          <div>
            {day3[0].dt_txt.split(' ')[0]}
            {day3.map((item, index) => <List key={index} item={item} />)}
          </div>
          <div>
            {day4[0].dt_txt.split(' ')[0]}
            {day4.map((item, index) => <List key={index} item={item} />)}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      null
    )
  }
}

export default NextDays