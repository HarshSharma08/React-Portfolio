// @ts-nocheck
import React from "react"
import {Button} from "./Button.js"
import './heroSection.css'

function HeroSection({
        lightBg,topLine,lightText,lightTextDesc,headLine,description,buttonLabel,img,alt,imgStart
    })

{    
        return(
            <>
                    <div className={lightBg ? "homeHeroSection2" : "homeHeroSection2 dark" } id="sec1">
                        <div className="container">
                            <div className="row  homeHeroRow"
                            Style={{display:'flex',flexDirection: imgStart === 'start' ? 'row-reverse':'row'}}
                            >
                                <div className="col">
                                    <div className="homeHeroTextWrapper">
                                        <div className="topLine">{topLine}</div>
                                        <h1 className={lightText ? 'heading' : 'heading dark'}>{headLine}</h1>
                                        <p className={lightTextDesc ? 'homeHeroSubtitle' : 'homeHeroSubtitle dark'}>{description}</p>
                                    <a href="#sec2">    <Button buttonSize='btn-medium' child={buttonLabel}></Button></a>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="homeHeroImgWrapper">
                                        <img src={img} alt={alt} className="homeHeroImg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        )
    
}

export default HeroSection;