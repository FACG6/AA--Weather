import React from 'react'
import List from './List/List'
import './nextdays.css'

const toggleHide = e => e.target.parentNode.lastChild.classList.toggle("hide")

function NextDays (props) {
  const { result, nextStatus } = props
  if (nextStatus) {
    const day1 = result.list.slice(2, 10)
    const day2 = result.list.slice(10, 18)
    const day3 = result.list.slice(18, 26)
    const day4 = result.list.slice(26, 34)
    return (
      <div className='contenerList'>    
        <div>
          <div>
            <div className={'day'} onClick={toggleHide} >
              {day1[0].dt_txt.split(' ')[0]}
            </div>
            <div className="hide">
              {day1.map((item, index) => <List key={index} index={index} item={item} />)}
            </div>
          </div>
          <div>
            <div className={'day'} onClick={toggleHide}>
              {day2[0].dt_txt.split(' ')[0]}
            </div>
            <div className="hide">
              {day2.map((item, index) => <List key={index} index={index} item={item} />)}
            </div>
          </div>
          <div>
            <div className={'day'} onClick={toggleHide}>
              {day3[0].dt_txt.split(' ')[0]}
            </div>
            <div className="hide">
              {day3.map((item, index) => <List key={index} index={index} item={item} />)}
            </div>
          </div>
          <div>
            <div className={'day'} onClick={toggleHide}>
              {day4[0].dt_txt.split(' ')[0]}
            </div>
            <div className="hide">
              {day4.map((item, index) => <List key={index} index={index} item={item} />)}
            </div>
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