import {useState,useEffect} from 'react';
import  './incDecBtn.css';
function IncDec(params) {
    

    const [out,setOut]=useState(0);
    const [typ,setTyp]=useState('Even');
   useEffect(()=>{

    
    out%2===0?setTyp("Even"):setTyp("Odd")
    if(out>0){
        document.getElementById("dec").disabled=false; 
    }

   },[out]
    
   )
    
   
   
    return(
        <div className="main">
            <h1 className='About'>Description:</h1>
            <p className='About'>
            Using useState and useEffect create a react project in which do following steps:
                <ul>
                    <li>create 2 buttons one for increment and other for decrement</li>
                    <li>create 2 paragraph tag in which one holds current value of Number <br /> other hold what is the type of the Number ( even,odd)</li>

                </ul>
             </p>
            <p>{out}</p>
            <p>{typ}</p>
            <div className="buttons">
            <button className="btn btn-outline btn-primary" onClick={()=>{setOut(out+1)}}>+</button>
            <button className="btn btn-outline btn-primary" id='dec' onClick={()=>{if(out>0){setOut(out-1);}else{ document.getElementById("dec").disabled=true;}}}>-</button>
            </div>
            
        </div>
    )
}

export default IncDec;