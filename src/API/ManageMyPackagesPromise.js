import axios from "axios"

export const ManageMyPackagesPromise = email => {
    return axios.get(`https://muqaddas-server.vercel.app/packages?email=${email}`).then(response => response.data);
}