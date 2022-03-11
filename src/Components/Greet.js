import React from "react";

const Greet = (props) => 
(
    <div>
<h1>{props.name} and age is:{props.age} </h1>
<p>{props.children}</p>
</div>
)
export default Greet