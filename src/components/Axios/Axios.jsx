import React from 'react'
import Axios from 'axios'
import{NavLink} from 'react-router-dom'
import { useEffect,useState } from 'react';
function AxiosComponent() {

    const [users, setUsers] = useState([]);

    const getEmp=()=>{
    Axios.get('https://reqres.in/api/users').then((response)=>{
      
    // console.log(response.data);
        setUsers(response.data['data']);
        console.log(setUsers);
    });
    }

      useEffect(() => {
        getEmp()
      }, []);

   

  return (
    <div>
       <p></p>
    
    {users.length === 0 && <p> NO functions</p>}  
      {users.map((item, i) => (
        <p  key={i} >{item.email}<br /></p>
     

    ))}
    
    
    </div>
  )
}

export default AxiosComponent