import axios from "axios";

const baseURL = 'http://localhost:3005/recipes'
const recipeApi = axios.create({
    baseURL,
    'Content-Type': 'aplication/json',
    'accept': 'application/json, text/html'
})

export default recipeApi