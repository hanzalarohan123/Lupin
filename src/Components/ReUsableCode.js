import React from "react";
 const updatedComponent = ( OriginalComponent,incrmentNumber )=>
 {
     class ReUsableCode extends React.Component
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
              this.setState(prevState =>{return {counterx :prevState.counterx + incrmentNumber}}) 
          }
//end


         render()
         {
             return <OriginalComponent name='lodu' counterx={this.state.counterx} clickCounter={this.clickCounter} {...this.props}/>
         }
     }
     return ReUsableCode
 }
 export default updatedComponent