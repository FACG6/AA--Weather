import React from 'react'
import './Header.css'

function Header (props) {
  const {nextStatus} = props
  if(!nextStatus) {
    return (
      <div>
        <div>
          <h1 className={'titel'}>AA-Weather</h1>
        </div>
        <div>
          <form onSubmit={props.handleForm} className={'form'}>
            <input className={'input'} type="text" name='city' placeholder='City ..' value={props.state.city} onChange={props.handleInput} />
            <input className={'input'} type="text" name='country' placeholder='Country ..' value={props.state.country} onChange={props.handleInput} />
            <button className={'submit'} type='submit'> Search </button>
          </form>
        </div>
      </div>
    )
  } else {
    return (
      null
    )
  }
}
export default Header