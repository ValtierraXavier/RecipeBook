import axios from 'axios'

const baseURL = 'http://localhost:3005/users'
const userAPI = axios.create({
    baseURL,
    'Content-Type': 'application/json',
    'accept': 'application/json, text/html'
})

export default userAPI