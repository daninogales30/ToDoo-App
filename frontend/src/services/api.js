import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    })

export const getTodos = () => {
 return api.get("/todos/")
}

export const createTodo = (data) => {
 return api.post("/todos/", data)
}

export const updateTodo = (id, data) => {
 return api.patch(`/todos/${id}/`, data)
}

export const deleteTodo = (id) => {
 return api.delete(`/todos/${id}/`)
}

