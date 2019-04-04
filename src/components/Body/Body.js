import React from 'react';

function Body (props) {
  const { result } = props;
  if(!result) {
    return (
      null
    )
  } else {
    const date = new Date() + '';
    const curruntDate = date.split(' ');
    return(
      <div>
        <div>
          <img src={`http://openweathermap.org/img/w/${result.weather[0].icon}.png`} alt="icon"/>
          <h3>{`${curruntDate[0]}, ${curruntDate[2]} ${curruntDate[1]}`}</h3>
          <h3>{result.weather[0].main}</h3>
        </div>
      </div>
    );
  }
}

export default Body






















   {/* <div>
        <img src={result.image} alt="weather status"/>
        <div>
          <span>{props.result.date}</span>
          <span>{props.result.weatherState}</span>
          <span></span>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <span>6 AM</span> 
            <span>{props.result.weatherState}</span>
            <span>{props.result.temp}</span>
            <span>{props.result.stateIcon}</span>
          </li>
          <li>
            <span>12 PM</span> 
            <span>{props.result.weatherState}</span>
            <span>{props.result.temp}</span>
            <span>{props.result.stateIcon}</span>
          </li>
          <li>
            <span>6 PM</span> 
            <span>{props.result.weatherState}</span>
            <span>{props.result.temp}</span>
            <span>{props.result.stateIcon}</span>
          </li>
          <li>
            <span>12 AM</span> 
            <span>{props.result.weatherState}</span>
            <span>{props.result.temp}</span>
            <span>{props.result.stateIcon}</span>
          </li>
        </ul>
      </div> */}