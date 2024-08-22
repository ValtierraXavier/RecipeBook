import api from "./ingredientsApi.js";

export const getAllIngredients = async () => {
    return await api.get('/')
}
export const getIngredient = async (id) => {
    return await api.get(`/${id}`)
}
export const newIngredient = async (body) => {
    return await api.post('/new', body)
}
export const editIngredient = async (id, body) => {
    return await api.put(`/edit/${id}`, body)
}
export const deleteIngredient = async (id) => {
    return await api.delete(`/delete/${id}`)
}
export const deleteAllIngredients = async () => {
    return await api.delete('/deleteall')
}