import React from "react"

export default function UserProfile (props){
    
    return (
        <>
            <div className="individual-profile">
                <div className="user-top">
                    <img className="user-image" src={props.image} />
                    <p className="user-name">{props.firstName} {props.lastName}</p>
                </div>
                <div className="user-bottom">
                    <p className="user-email">{props.email}</p>
                    <p className="user-location">{props.city}</p>
                </div>                
            </div>       
        </>

    )
}
