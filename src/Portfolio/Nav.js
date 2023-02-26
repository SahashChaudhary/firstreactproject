import React from "react";
import './nav.css'

const Nav = ()=>{
    return(
        <>
       <nav>
        <div className="logo">
            <div className="icon"><img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="/"></img> </div>
            <div className="name">
            <h3>Chaudhary</h3>
            </div>
        </div>
        <div className="details">
        <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">MyWork</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
       </nav>
        </>
    )
}
export default Nav