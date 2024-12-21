//obj = props
// props is a object {}
// key label data string

import { MouseEventHandler } from "react";

//object access krne kai liye dot operator

// const Button = (props:{label:string})=>{
//     return (<button>{props.label}</button>)
// }


//destructing method and define type single
//props {label} extract kr liya
const Button=({label, fn}:{label:string , fn:MouseEventHandler<HTMLButtonElement>})=>{
    return(<button onClick={fn}>{label}</button>)
}
export default Button;
