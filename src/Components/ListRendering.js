import React from 'react'

function ListRendering() {
    const names =['a','b','c','d']
    const renderedNames =names.map(name => <h2>{name}</h2>) 
  return (
    <div>
        
        {renderedNames}
        
    </div>
  )
}

export default ListRendering