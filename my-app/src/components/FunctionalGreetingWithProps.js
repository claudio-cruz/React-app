import React from "react";


const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    return <h1>Hello, {props.name}! I see you have {props.age} years old; {props.greting}!</h1>
}

export default FunctionalGreetingWithProps;