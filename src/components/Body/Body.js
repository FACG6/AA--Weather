import React from 'react';
import Current from './Current/Current'
import Day from './Day/Day'
import NextDays from './NextDays/NextDays'
import Button from './Button/Button'

function Body (props) {
  const { currentObj, dayObj, nextStatus, handelButton } = props;
  if (!currentObj || !dayObj) {
    return(
      <div>
        <h2>Plz Wait ..</h2>
      </div>
    )
  } else {
    if(currentObj.cod == 200 &&  dayObj.cod == 200) {
      return (
        <div>
          <Current result={currentObj} nextStatus={nextStatus}/>
          <Day result={dayObj} nextStatus={nextStatus}/>
          <Button handelButton={handelButton} nextStatus={nextStatus}/>
          <NextDays result={dayObj} nextStatus={nextStatus}/>
        </div>
      )
    } else {
      return (
        <div>
          <h2>Nothing Found, Try again</h2>
        </div>
      )
    }
  }
}

export default Body