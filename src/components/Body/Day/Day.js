import React from 'react'
import List from './List/List'

function Day (props) {
  const { result } = props
  if(!result) {
    return null
  } else {
    const array = result.list.slice(0, 4)
    return (
      <div>
        {array.map((item, index) => <List item={item} key={index} />)}
      </div>
    )
  }
}

export default Day