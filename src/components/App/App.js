import React from 'react'
import {RoutesCom1} from '../index';
import Navbar from '../navbar/Navbar';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './App.css'
function App() {
  return (

    <div> <h1 className='bg-dark' style={{color:'white'}}>Altrocks Tech</h1>
    <Navbar />
    <hr />
    <p>Main component</p>
    <RoutesCom1 />
    <div>
    </div>
    </div>
   
  )
}

export default App