import Message from "../components/Message";
import Button from "../components/Button";
import { useState } from "react";


const CounterApp = () =>{
    //let counter = 0;
    const [counter, setCounter]= useState<number>(0);
    const plus =()=>{

        // State Update (ASYNC) - NON Blocking
        setCounter(counter+1);//immutable  //compare old to new state
        //counter++; //mutable
        console.log('plus',counter);
    }

    const minus = () =>{
        //counter--;
        setCounter(counter-1);
        console.log('minus', counter);
    }
    return (<div>
        <Message msg="CounterApp"/>
        <Message msg="Count is "  val ={counter}/>
        <Button fn = {plus} label="+"/>&nbsp;
        <Button fn = {minus} label ="-"/>

    </div>)
}
export default CounterApp;

// button is function label uska argument hai not defined therfore define it in button component
