//if there are many values then we take this method
//custom type

type MessagePropType ={
    msg:string;
    val?:number;
}
// const Message = (props:MessagePropType)=>{
//     return (<h2>{props.msg}</h2>)
// }

//destructring with type
const Message = ({msg,val}:MessagePropType)=>{
    return(<h2>{msg} {val}</h2>)
}
export default Message;