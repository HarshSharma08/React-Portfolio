// @ts-nocheck
import React from 'react'
import "./Skill.css"
function Skill(
    {
        topLine,img1,img2,img3,img4,img5,img6,des1,des2,des3,des4,des5,des6
    }
){
    return(
        <>
        <div Style={{display:"flex" , justifyContent:"space-evenly"}}> 
        <div className="skill" id="sec4">
              <div className="row">
                    <div className="topLinee">
                       {topLine}
                   </div>
               </div>
               
               <div className="row">
                   <div className="di">
                   <div className="col size1">
                   <a href="#"><img src={img1} alt="." className="Image"></img></a>
                        <p className="text">{des1}</p>
                        </div>

                        <div className="col size2">
                   <a href="#"><img src={img2} alt="." className="Image"></img></a>
                        <p className="text">{des2}</p>
                        </div>   

                    </div>     
                    <div className="di">
                    <div className="col size3">
                   <a href="#"><img src={img3} alt="." className="Image"></img></a>
                        <p className="text">{des3}</p>
                        </div>   
{/* 
                        <div className="col">
                   <a href="#"><img src={img4} alt="." className="Image"></img></a>
                        <h3 className="text">{des4}</h3>
                        </div> */}

                        <div className="col size5">
                   <a href="#"><img src={img5} alt="." className="Image"></img></a>
                        <p className="text">{des5}</p>
                        </div>
                        
                        <div className="col size6">
                   <a href="#"><img src={img6} alt="."  className="Image"></img></a>
                        <p className="text">{des6}</p>
                        </div>
                        </div>

                        </div>

                        
               </div>
               
        </div>

        </>
    )
}
export default Skill    