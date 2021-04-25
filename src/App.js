// @ts-nocheck
import React  from "react"
import Navbar from "./Components/Navbar.js"
import './App.css'
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Components/HomePage/Home.js'
// import Contact from "./Contact.js"
const  App = ()=> {
          return(
              <div>
                   <Navbar/>
                   <Home/>
              </div>             
        );
        
    };


export default App