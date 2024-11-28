import React from 'react'
import "./Button.css"

//1. Nacin:
const Button = (props) => {
    console.log(props);
  return (
    <button>{props.title}</button>
  )
}

export default Button;