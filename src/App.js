//import logo from "./logo.svg";
import "./App.css";
import ComponentD from "./Components/ComponentD";
// import Greet from "./Components/Greet";
// import Welcome from "./Components/Welcome";
// import IncludinState from "./Components/IncludinState";
// import CounterUsingUseState from "./Components/CounterUsingUseState";
// import FunctionCick from "./Components/FunctionCick";
// import ClickClass from "./Components/ClickClass";
// import BindClick from "./Components/BindClick";
// import ParentComponent from "./Components/ParentComponent";
// import IfnElse from "./Components/IfnElse";
// import ListRendering from "./Components/ListRendering";
// import PersonRendering from "./Components/PersonRendering";
// import StyleSheet from "./Components/StyleSheet";
// import Inine from "./Components/Inine";
// import Form from "./Components/Form";
// import LifeCycleA from "./Components/LifeCycleA";

// import Fragmentsss from "./Components/Fragmentsss";
// import PureComp from "./Components/PureComp";
// import RegComp from "./Components/RegComp";
// import ParentComp from "./Components/ParentComp";
// import Ref from "./Components/Ref";
// import FocusInput from "./Components/FocusInput";
// import FRParentInput from "./Components/FRParentInput";
// import PortalDemo from "./Components/PortalDemo";
// import ErrorBoundary from "./Components/ErrorBoundary";
// import ErrorCatch from "./Components/ErrorCatch";
//import Counter from "./Components/Counter";
import CounterRender from "./Components/CounterRender";
import CounterRendorReusable from "./Components/CounterRendorReusable";
import HoverRendor from "./Components/HoverRendor";
import User from "./Components/User";
import { UserProvider } from "./Components/UserContext";
function App() {
  //console.log('PARENT RENDER')
  return (

    <div className="App">

      <ComponentD/>
      {/* This value will work if any paramenter is not passed in the UserContext Class. */}
      {/* <UserProvider value='hanzallah'>  
      <ComponentD/>
      </UserProvider> */}
      {/*
      <CounterRendorReusable render={(count,IncremenentCount)=><CounterRender count={count} IncremenentCount={IncremenentCount}></CounterRender>}/>
      <CounterRendorReusable render={(count,IncremenentCount)=><HoverRendor count={count} IncremenentCount={IncremenentCount}></HoverRendor>}/>
      <CounterRender/>  
      <HoverRendor/>
      <User name={(IsloggedIn)=> IsloggedIn ? 'WAH LODU' : 'Not A lodu'}/>
      <Counter sex='male'/>
      <ErrorCatch>
      <ErrorBoundary heroname={'lpra'}/>
      </ErrorCatch>
      <ErrorCatch>
      <ErrorBoundary heroname={'joker'}/>
      </ErrorCatch>
      <PortalDemo/>     
      <FRParentInput/>
      <FocusInput/>
      <ParentComp/>
      <Fragmentsss/> 
      <LifeCycleA/>
      <Form />
      <Inine/>
      <StyleSheet primary={true}/>
      <PersonRendering/>
       <ListRendering/> 
       <IfnElse/>
      <ParentComponent/>
       <CounterUsingUseState/> 
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
      <ClickClass/>
      <BindClick />*/}
    </div>
  );
}

export default App;
