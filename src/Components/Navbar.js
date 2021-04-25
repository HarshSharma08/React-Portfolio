// @ts-nocheck
import React , {Component} from "react"
import menuItems from "./menuItems.js"
import './NavbarItems.css'
// import { Button } from "./Button.js";

class Navbar extends Component{
    state = {clicked: false}


    handleClick = () => {
        this.setState({clicked : !this.state.clicked})
    }
    render(){
        return(
            <nav className="navbarItems">
                <a className="nav-link" href="#sec1"><h1 className="navbar-logo" >HS</h1></a>
                <div className="menuIcon" onClick={this.handleClick }>
                    <i className={this.state.clicked ? "fa fa-times" : " fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "navMenuActive" : "navMenu"}>
                    {menuItems.map((item,index)=> {
                        return (
                            <li key={index}>
                                <a className={item.cname} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    }) }
                    
                </ul>
            </nav>
        )
    }
}

export default Navbar
