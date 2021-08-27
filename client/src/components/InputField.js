import React from 'react'

export default function Input(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        name={props.function}
        value={props.value}
        placeholder={props.function}
        onChange={props.onChange}
      />
      <button type="submit">{props.function}</button>
    </form>
  )
}
