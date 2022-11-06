import React from 'react';
import './Button.css';

interface buttonInterface{
    text:string,
    width:string,
    height:string,
    color:string,
    backgroundColor:string,
    borderRadius:string,
    clickFun:any
}

function Button(props:buttonInterface) {
    return (
        <>
        <button
          onClick={props.clickFun}
          style ={{
               width:props.width,
               height:props.height,
               color:props.color,
               background:props.backgroundColor,
               borderRadius:props.borderRadius
            }}

        >{props.text}
        </button>
        </>
    )
}

export default Button
