import React from "react";
import './portfolio.css'
import sahash from './merophoto.jpg'

const Portfolio = ()=>{
    const arr = ['facebook','instagram']
    return(
        <>
      <div className="main">
        <div className="info">
            <div className="image">
                <img src={sahash} alt="merophoto"></img>
            </div>
            <div className="text">
            <h2>I'm Computer Engineer</h2>
            <p>welcome to my Portfolio<br /> Want to be my friend ? checkout to my facebook id</p>
            </div>
            
        </div>
        <div className="work"></div>
        {
            arr.map(item=>{
                return(
                    <div style={{width:'200px',height:'200px', backgroundColor:'red',marginTop:'20px'}}>
                      <h3>{item}</h3>
                    </div>
                )
            })
        }
      </div>
        </>
    )
}
export default Portfolio