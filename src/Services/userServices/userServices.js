import api from './userApi.js'

export const getAllUsers = async () => {
    return await api.get('/')
}
export const getUser = async (id) => {
    return await api.get(`/${id}`)
}
export const newUser = async (body) => {
    return await api.post('/new', body)
}
export const editUser = async (id, body) => {
    return await api.put(`/edit/${id}`, body)
}
export const deleteUser = async (id) => {
    return await api.delete(`/delete/${id}`)
}