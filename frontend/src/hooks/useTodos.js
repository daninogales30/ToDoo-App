import { useState } from "react"
import { getTodos } from "../services/api.js"

export function useTodos() {
    const [todos, setTodos] = useState([])

    const cargarTodos = async () => {
        const res = await getTodos()
        setTodos(res.data)
    }

    return { todos, cargarTodos }
}