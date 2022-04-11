import React from "react"
import UserProfile from "./UserProfile"

export default function TestPage(){

    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    const [usersElement, setUsersElement] = React.useState(null)
   

    React.useEffect(()=> {
        fetch("https://randomuser.me/api/?results=5")
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response
            })
            .then(data=> {
                setData(data)
            })
            .catch(error => {
                console.error("Error fetching data: ", error)
                setError(error)
            })
            .finally(()=> {
                setLoading(false)
            })
    }, [])

    if (loading) return "Loading"
    if (error) return "Error!!"

    const usersArray = data.results
    //console.log(usersArray)



    function handleClick(){
        setUsersElement(usersArray.map(user => {
            return <UserProfile
            key={user.cell}
            image={user.picture.large} 
            firstName={user.name.first} 
            lastName={user.name.last}
            email={user.email}
            city={user.location.city}
            />
        })
        )
        document.querySelector(".display-button").style.display = "none"

    }


    return(
    <div className='testpage'>
        <div onClick={handleClick} className="display-button">Get</div>
        <div className="users-display">
            {usersElement}
        </div>
    </div>
    )


}

    



