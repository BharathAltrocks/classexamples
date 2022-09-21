import React from 'react'
import { useState,useEffect } from 'react'

function Hooks(props) {
 
    
    let [name ,setName] = useState();
    let [num , setNUm] = useState(2);

    useEffect(()=>{
      console.log('use effect running');
  setName(name = 'Altrocks Tech ');
  });
//below one works like component did mount
    // useEffect(()=>{
    //     console.log('use effect running');
    // setName(name = 'Altrocks Tech ');
    // },[]);

   

  return (
    <div> <h3>function with hooks</h3>
    <ul>
      <li>
     {`Use effect inside [ ] -> first time run like component did mount`}

      </li>
      <li>
        {`Use effect inside [val like click btn change] -> when val change its re run -> update.
`}
      </li>
      <li>{`Use effect inside return fun ()-> unmount.
`}</li>
    </ul>
    <h5>{name}</h5>
    <h5>{props.brand}</h5>
    <p>hooks num {num}</p>
    <button onClick={()=>setNUm(num = num+1)}>Add</button>

    </div>
  )
}

export default Hooks