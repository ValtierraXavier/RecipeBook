import api from './recipeApi'

export const getAllRecipes = async () => {
    return await api.get('/')
}
export const getRecipe = async (id) => {
    return await api.get(`/${id}`)
}
export const newRecipe = async (body) => {
    return await api.post('/new', body)
}
export const editRecipe = async (id, body) => {
    return await api.put(`/edit/${id}`, body)
}
export const deleteRecipe = async (id) => {
    return await api.delete(`/delete/${id}`)
}