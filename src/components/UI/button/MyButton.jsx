import React from 'react'
import classes from './MyButton.module.css'

const MyButton = (props) => {
  return (
    <button style={props.style} className={classes.myBtn} onClick={props.onClick}>
        {props.children}
    </button>
  )
}

export default MyButton