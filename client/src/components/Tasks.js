import React from 'react'

const Tasks = (props) => {
  return (
    <ul>
      {props.tasks.map((task) => (
        <li>
          {task}
          <button onClick={() => props.removeTask()}>Remove</button>
        </li>
      ))}
    </ul>
  )
}
