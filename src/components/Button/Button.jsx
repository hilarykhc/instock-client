import React from 'react'

const Button = (props) => {
  console.log(props)
  return (
    <>
      <button onClick={props.onClick} >Add New Warehouse</button>
    </>
  )
}

export default Button