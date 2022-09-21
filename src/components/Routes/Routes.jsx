import React from 'react'
import {  Route, Routes } from 'react-router-dom';
import {ClassFile ,Home,Hooks,AxiosComponent} from '../index';
import '../navbar/navbar.css'
function RoutesCom1() {
  const property ={
    check:'I am from props'
  }
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/class' element={<ClassFile {...property}/>}></Route>
    <Route path='/function' element={<Hooks brand='function props'/>}></Route>
    <Route path='/axios' element={<AxiosComponent />}></Route>
    </Routes>
 
    </>
   
  )
}

export default RoutesCom1