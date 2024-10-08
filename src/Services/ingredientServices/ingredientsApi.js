import axios from 'axios'
const baseURL = 'http://localhost:3005/ingredients'

let ingredientsApi = axios.create({
    baseURL,
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/html'
})

export default ingredientsApi