import axios from 'axios';

//getUser is moved into a seperate component. This is usually done for each API call to keep things clean and organized.
const getCrypto = async(crypto) => {
    const response = await axios.get(
        `https://api.coingecko.com/api/v3/exchange_rates`,
    )

    return (1 / response.data.rates[crypto].value)

}

export default getCrypto;