// @ts-nocheck
import React from "react"

import './About.css'

function HeroSection2({
        lightBg,topLine,lightText,lightTextDesc,headLine,description,img,alt,imgStart,des
    })

{    
        return(
            <>
                    <div className={lightBg ? "homeHeroSection" : "homeHeroSection darkBg" } id="sec2">
                        <div className="container">
                            <div className="row  homeHeroRow"
                            Style={{display:'flex',flexDirection: imgStart === 'start' ? 'row-reverse':'row'}}
                            >
                                <div className="col">
                                    <div className="homeHeroTextWrapper">
                                        <div className="topLine">{topLine}</div>
                                        <h1 className={lightText ? 'heading' : 'heading dark'}>{headLine}</h1>
                                        <p className={lightTextDesc ? 'homeHeroSubtitle' : 'homeHeroSubtitle dark'}>{description}</p>
                                        <p className={lightTextDesc ? 'homeHeroSubtitle' : 'homeHeroSubtitle dark'}>{des}</p>
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

export default HeroSection2;