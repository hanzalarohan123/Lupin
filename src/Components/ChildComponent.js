import React from 'react'

function ChildComponent(props) {
  return (
      //it was for passing the parent method to child via props
    //<button onClick={props.greetComponent1}>Greet parent</button>
        <button onClick={()=>{props.greetComponent1('maxx')}}>Greet parent</button>
 
  )
}

export default ChildComponent