import axios from "axios"

export const ManageMyPackagesPromise = email => {
    return axios.get(`http://localhost:3000/packages?email=${email}`).then(response => response.data);
}