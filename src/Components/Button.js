// @ts-nocheck
import React from 'react'
import './Button.css'
import {Redirect} from "react-router-dom"

const Style=[
    'btn-primary',
    'btn-outline'
]

const Size=[
    'btn-medium',
]
export const Button =(
    {
        child,
        type,
        // onClick,
        buttonStyle,
        buttonSize
    }
) => {
    const checkButtonStyle= Style.includes(buttonStyle) ?  buttonStyle : Style[0]
    const checkButtonSize= Size.includes(buttonSize) ?  buttonSize : Size[0]

    return(
       
        <button  className={`btn  ${checkButtonStyle} ${checkButtonSize}`}  type={type}>
           
           {child}
            
        </button>
       
    )
}