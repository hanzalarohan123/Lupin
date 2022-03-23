import React from 'react'

// function FRInputs() {
//   return (
//     <div><input></input></div>
//   )
// }
const FRInputs = React.forwardRef( (props,ref) =>
{
    
           return (
             <div><input type='text' ref={ref}></input></div>
           )
         
}
) 
export default FRInputs