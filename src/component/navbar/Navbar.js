import React, { useState } from 'react'
import "./Navbar.css"

const Navbar = () => {

    const [ click , setclick] = useState(false)

    const dropdownHandler =()=>{
        setclick(true);

    }
    const dropdownHandler2 =()=>{
        setclick(false);

    }

  return (
    <>
    <div className="navbar">
        <div className="leftnavbar">
            <div className="navleftwrapper">
            <div className="companyicon">
            <img src="/assests/chct.jpg" alt="img" className="chcticon" />
            </div>
            <div className="chcttital">Chamela Helpdia Charitable Trust</div>
            </div>
            <div className="dropdown">
       <img onClick={()=>{dropdownHandler()}} className={click ? "menuicon menuiconhide" : "munuicon"} src="/assests/menu.png" alt="img" />
       {/* <img onClick={()=>{dropdownHandler()}} className='menuicon ' src="/assests/menu.png" alt="img" /> */}
       <img onClick={()=>{dropdownHandler2()}} className={click ? "closeicon menuiconopen" : "closeicon "} src="/assests/close.png" alt="img" />
       {/* <img onClick={()=>{dropdownHandler2()}} className='closeicon' src="/assests/close.png" alt="img" /> */}
            </div>

            </div>
       
        <div className="rightnavbar">
            <span className="page1 page">Home</span>
            <span className="page2 page">About</span>
            <span className="page3 page">Contact</span>
            <span className="page4 page">Donate</span>

        </div>

    </div>
  
    <div className={ click ? "navabrdropdown navabrdropdownActive" : "navabrdropdown" }>

    <span className="page1 page pagedrop">Home</span>
            <span className="page2 page pagedrop">About</span>
            <span className="page3 page pagedrop">Contact</span>
            <span className="page4 page pagedrop">Donate</span>
        
    </div>
      
    </>
  )
}

export default Navbar
