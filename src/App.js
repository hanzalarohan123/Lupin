import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import IncludinState from './Components/IncludinState';
import CounterUsingUseState from './Components/CounterUsingUseState';
import FunctionCick from './Components/FunctionCick';
import ClickClass from './Components/ClickClass';
import BindClick from './Components/BindClick';
function App() {
  return (
    <div className="App">
      {/* <CounterUsingUseState/> 
     <Greet name="sss" age='12'><p>child prop 1</p> </Greet>
       <Greet name="sss" age='13'><button>cick me</button></Greet>
       <Greet name="sss" age='14'><p>child prop 3</p></Greet>
       <Welcome name="sss" age='12'/> 
       <Welcome name="sss" age='13'/> 
       <Welcome name="sss" age='14'/> 
      <IncludinState /> 
      
      //destructuring 
      <Welcome name="sss" age='12' /> 
       <Greet name="sss" age='1'></Greet>
<FunctionCick  />
  <ClickClass/>*/ }
      <BindClick />


    </div>

  );
}

export default App;
