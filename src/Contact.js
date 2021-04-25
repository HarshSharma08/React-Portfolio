// @ts-nocheck
import React from 'react';
import {Button} from './Components/Button'
import "./Contact.css";


function Contact({
    topLine,headLine,description,des4,des1,des2,des3,buttonLabel,img1,img2,img3,img4,img5,link1,link2,link3,link4
}
) {

   function handleClick(){
       return(
           console.log("Hello")
       );
       }

    return (        
       <>
           <div className="form" id="sec3">
           <div className="row">
               <div className="col-md-2">
                   <div className="gheading">
                       {topLine}
                   </div>
                   <br/>
                   <div className="col">
                   <h3>{headLine}</h3>
                   </div>
                   <div className="col ">
                       
                   <a href="mailto: harshsharmaji68@gmail.com">
                       <div className="dii">  
                   <img src={img5} alt="" className="so" />
                       <p className="nav-lin">{description}</p>
                       </div>
                       </a>
                       
                       </div>
               </div>
               <div className="col">
               <div className="form_details">
      
                <div className="name">
                    <input type='text' placeholder={des1} className="entry size3 " />     
                    <input type='text' placeholder={des2} className="entry size4" />     
                </div>
                <div className="name2">
                    <input type='text' placeholder={des3} className="entry size" />     
                </div>
                <div className="name3">
                    <input type='text' placeholder={des4}  className="entry size1" />     
                </div>
            </div>
            <div className="name5">
                <a href="#">
                <Button  buttonSize='btn-medium' type="submit"  onClick={handleClick} child={buttonLabel} />     
                </a>
            </div>

               </div>
           </div>
           </div>
           <div className="Footer">
           <div className="social">
                <div>
                <a href={link1}>
                    <img src={img1} alt="." className="sizee" /></a>
                </div>
                <div>
                <a href={link2}>
                    <img src={img2} alt="." className="sizee" /></a>
                </div>
                <div>
                <a href={link3}>    
                <img src={img3} alt="." className="sizee" /></a>
                </div>
                <div>
                <a href={link4}>    
                <img src={img4} alt="." className="sizee" /></a>     
           </div>
           
           </div>
           <p className="copy">Copyright© Harsh Sharma </p>
           </div>
           
           
           
       </>
    )
}
export default Contact;
