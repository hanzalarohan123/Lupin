import React from 'react'

function ChildComponent(props) {
  return (
    <button onClick={props.greetComponent1}>Greet parent</button>
  )
}

export default ChildComponent