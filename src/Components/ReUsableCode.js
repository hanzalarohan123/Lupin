import React from "react";
 const updatedComponent = ( OriginalComponent )=>
 {
     class NewComponent extends React.Component
     {

//start
        constructor(props) {
            super(props)
          
            this.state = {
               counterx:0,
               //hoverx:0
            }
          }    
          clickCounter = () =>
          {
              this.setState(prevState =>{return {counterx :prevState.counterx + 1}}) 
          }
//end


         render()
         {
             return <OriginalComponent name='lodu' counterx={this.state.counterx} clickCounter={this.clickCounter}/>
         }
     }
     return NewComponent
 }
 export default updatedComponent