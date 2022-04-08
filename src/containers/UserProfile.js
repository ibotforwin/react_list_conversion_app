import React from "react"

export default function UserProfile (){

    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
   

    React.useEffect(()=> {
        fetch("https://randomuser.me/api/")
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
    
    return (
        <>
            <img src={data.results[0].picture.large} alt="Portrait thumbnail" />
            <h1>This is {data.results[0].name.first} {data.results[0].name.last}</h1>
            <p>The e-mail address is {data.results[0].email} and this person is from {data.results[0].location.city}</p>
            
        </>

    )
}
