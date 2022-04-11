import React from "react"

export default function UserProfile (props){
    
    return (
        <>
            <div className="individual-profile">
                <img className="user-image" src={props.image} />
                <p>First name is: {props.firstName}</p>   
                <p>Last name is: {props.lastName}</p>
                <p>Email is: {props.email}</p>
                <p>From: {props.city}</p>
            </div>       
        </>

    )
}
