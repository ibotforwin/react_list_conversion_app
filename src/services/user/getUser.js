import axios from 'axios';

//getUser is moved into a seperate component. This is usually done for each API call to keep things clean and organized.
const getUser = async(numberUsers) => {
    const response = await axios.get(
        `https://randomuser.me/api/?results=${numberUsers}`,
    )

    return response.data.results

}

export default getUser;