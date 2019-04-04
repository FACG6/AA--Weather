import React from 'react'

function Header (props) {
  return (
    <div>
      <div>
        <h1>AG-Weather</h1>
      </div>
      <div>
        <form onSubmit={props.handleForm}>
          <input type="text" name='city' placeholder='City ..' value={props.state.city} onChange={props.handleInput} />
          <input type="text" name='country' placeholder='Country ..' value={props.state.country} onChange={props.handleInput} />
          <button type='submit'> Search </button>
        </form>
      </div>
    </div>
  )
}
export default Header