import React from "react";

const Greet = ({name,age}) => 
{
    // destrucing aply ki hai upar ({name,age}) arrow funtion m dala hai direct props.age kar k cal nh kia neechy code m
    return <h1>{name} and age is:{age} </h1>
       


}
export default Greet