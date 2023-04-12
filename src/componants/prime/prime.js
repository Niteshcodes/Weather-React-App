import {useState,useEffect} from 'react';
import  '../reactTask1/incDecBtn.css'
function Prime(params) {
    

    const [out,setOut]=useState(0);
    const [typ,setTyp]=useState('even');
   useEffect(()=>{

    function isPrime(num) {
       
        if (num < 2) {
          return false;
        }
        
        for (let i = 2; i <= Math.sqrt(num); i++) {
         
          if (num % i === 0) {
            return false;
          }
        }
        
        return true;
      }
      
    var a=isPrime(out)
    if(a===true){
      setTyp("Prime")
    }
    else{
      setTyp("Not a Prime")
    }
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
                    <li>create 2 paragraph tag in which one holds current value of Number <br /> other hold what is the type of the Number ( Prime,Not a Prime)</li>

                </ul>
             </p>
            <p>{out}</p>
            <p>{typ}</p>
            <div className="buttons">
            <button className="btn btn-outline text-center p-0" onClick={()=>{setOut(out+1)}}>+</button>
            <button className="btn btn-outline" id='dec' onClick={()=>{if(out>0){setOut(out-1);}else{ document.getElementById("dec").disabled=true;}}}>-</button>
            </div>
            
        </div>
    )
}

export default Prime;