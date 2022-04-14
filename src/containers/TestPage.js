import React, {useEffect, useState} from "react"
import UserProfile from "../components/TestPage/UserProfile"
import getUser from "../services/user/getUser";

export default function TestPage(){

    const [error, setError] = useState('')
    const [userElements, setUserElements] = useState([])
    const [profileNumber, setProfileNumber] = useState (null)

    const handleClick = async() => {
        //handleClick is an asynchronous function (the async before the ()).
        //This allows us to use the "await" keyword.

        //To cause an error message, change the 5 below to a 4
        //The "await" keyword ensures that the application waits for the "users" variable to be filled before doing more
        //stuff to it. Without the "await", the program would try to use "users" before getUser() is done running.
        const users = await getUser(profileNumber)

        //For the sake of the example, we made the error condition that there should be 5 or more users.
        if(users.length<=100){

            //We map through the results and build the user elements right inside the setUserElements(...)
            setUserElements(users.map((user) => (
                <UserProfile
                    key={user.cell}
                    image={user.picture.large}
                    firstName={user.name.first}
                    lastName={user.name.last}
                    email={user.email}
                    city={user.location.city}
                />
            )))
        }else{
            //If our condition fails, we fill out the error message.
            setError('We had an issue with getting the data.')
        }

    }

    function getNumber(input){
        setProfileNumber(input.target.value)
        console.log(profileNumber)
    }

    return(
    <div className='testpage'>
        <form>
            <label> Number of Profiles 
                <hr />
                <input type="number" onChange={getNumber}/>
                <hr />
            </label>
                
        </form>
        <div onClick={handleClick} className="display-button btn-lg shadow-sm">Get</div>
        <div className="users-display">
            {error}
            {userElements}
        </div>
    </div>
    )


}

    



