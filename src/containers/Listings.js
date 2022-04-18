import React, {useState} from "react"
import CryptoDisplay from "../components/Listings/CryptoDisplay"
import getCrypto from "../services/Crypto/getCrypto"



const Listings = () => {

    const [btcValue, setBtcValue] = useState(null)
    const [cryptoName, setCryptoName] = useState("")

    const handleClick = async () => {
        
        const obtainedValue = await getCrypto(cryptoName)
        // This obtains the value of given crypto in BTC using a getCrypto component
        
        setBtcValue(
            <CryptoDisplay 
                inputCrypto={obtainedValue}
                nameInput={cryptoName}    
            />
        )
        // This renders the display component that is return in this component
    }

    function getName(input) {
        setCryptoName(input.target.value.toLowerCase())
        console.log(cryptoName)
    }

    // The getName function obtaines input from the input field and sets it as a cryptoName state value.
        // Unable to conver the input toLowerCase()



    
    return (
        <>
            <div>
                <form>  
                    <label>Select Currency
                        <br />
                        <input type="text" onChange={getName} />
                    </label>
                </form>
                <div onClick={handleClick} className="display-button btn-lg shadow-sm">Get</div>
                <div>
                    {btcValue}  
                </div>                
            </div>
        </>
        
    )
}

export default Listings;