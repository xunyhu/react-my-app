import React from 'react'

export default function List(props) {
  return (
    <ul>
      {
        props.list.map((value, index) => {
          return (
            <li key={index}>
              {value} 
              <button onClick={props.onDelete(index)}>x</button>
            </li>
          )
        })
      }
    </ul>
  )
}
