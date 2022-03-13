import React from 'react'

function FunctionCick() {
    function clickHandler()
    {
        console.log("clciked from functional")
    }
  return (
    <div>
    <button onClick={clickHandler}>FunctionCick button </button>
    </div>
  )
}

export default FunctionCick