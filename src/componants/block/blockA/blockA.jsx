import {useState} from 'react'
import BlockB from "../blockB/blockB";
import BlockC from '../blockC/blockC';

const BlockA = (props) => {
    const [value,setValue]=useState();
    const [value2,setValue2]=useState();
   
    const fnHandler=(e)=>{
        setValue(e.target.value)

    }
    const fnHandlerChild=(e)=>{
        setValue2(e.target.value)

    }
  return(
    <div className="Block">
         <h3>Perent to child</h3>
         <div className="BlockA">
        <h1>This is Block A</h1>
        <p>value : {value}</p>
         </div>
        <BlockB fnHandler={fnHandler}/>
         <h3>Perent to child</h3>
         <div className="BlockA">
        <h1>This is Block A</h1>
        <p className="pera">
        <input type="text" placeholder="Type somthing..." onChange={fnHandlerChild} /></p>
         </div>
        <BlockC value={value2}/>
        
    </div>
    
  )
}


export default BlockA;