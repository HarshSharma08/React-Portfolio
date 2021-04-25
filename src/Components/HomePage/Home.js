// @ts-nocheck
import React from 'react'
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data.js'
import HeroSection from '../HeroSection'
import HeroSection2 from '../About'
import Contact from '../../Contact'
import Skill from '../Skill'
import "../../index.css"
function Home(){
    return(
          <>
          <HeroSection {...homeObjOne} />  
          <HeroSection2 {...homeObjTwo} />
          <Skill {...homeObjFour} />
          <Contact {...homeObjThree} />  
          </>
    )
}

export default Home