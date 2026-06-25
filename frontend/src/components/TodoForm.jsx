import { useState } from "react";
import {createTodo} from "../services/api";


export function TodoForm({ onCreated }) {
    const [titulo, setTitulo] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!titulo) return;
        await createTodo({ titulo });
        setTitulo("");
        onCreated();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)} 
            placeholder="Nueva tarea..." 
            />
            <button type="submit">Añadir</button>
        </form>
    );
}