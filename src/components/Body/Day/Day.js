import React from 'react'
import List from './List/List'

function Day (props) {
  const { result, nextStatus } = props
  if(!result) {
    return null
  } else {
    if(!nextStatus) {
      const array = result.list.slice(0, 4)
      return (
        <div>
          {array.map((item, index) => <List item={item} key={index} />)}
        </div>
      )
    } else {
      return (
        null
      )
    }
  }
}

export default Day