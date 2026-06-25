import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000/api",
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

