import React from "react"

export default function CryptoDisplay (props){
    
    return (
        <>
            <div>
                <h1>{props.nameInput.toUpperCase()} is worth {props.inputCrypto} Bitcoin </h1>              
            </div>       
        </>

    )
}