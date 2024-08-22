import api from './userApi.js'

export const getAllUsers = async () => {
    return await api.get('/')
}
export const getUser = async (userName) => {
    return await api.get(`/${userName}`)
}
export const userLogin = async (body) => {
    return await api.post('/login', body)
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