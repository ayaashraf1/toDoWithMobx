import React from 'react';
import './TextInput.css';

interface textInputInterface{
    width:string,
    height:string,
    placeHolder:string,
    value:string,
    onChangeFun:any
}

function TextInput(props:textInputInterface) {
    return (
        <>
          <input 
                type="text" 
                className="textInput"
                placeholder={props.placeHolder} 
                style={{width:props.width,height:props.height}}
                value={props.value}
                onChange={props.onChangeFun} />
        </>
    )
}

export default TextInput
