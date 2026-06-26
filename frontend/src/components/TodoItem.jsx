import { useState } from "react";
import { updateTodo } from "../services/api";
import { deleteTodo } from "../services/api";


const ESTADO_TEXTO = {
    pendiente: 'Pendiente',
    completada: 'Completada',
    cancelada: 'Cancelada'
};

export function TodoItem({ todo, onChanged }) {
    const [editando, setEditando] = useState(false);
    const [nuevoTitulo, setNuevoTitulo] = useState("");

    const handleEstado = async (e) => {
        await updateTodo(todo.id, { estado: e.target.value });
        onChanged()
    }

    const handleDelete = async () => {
        await deleteTodo(todo.id);
        onChanged();
    }

    const handleEdit = () => {
        setNuevoTitulo(todo.titulo);
        setEditando(true);
    }

    const handleSave = async () => {
        if (!nuevoTitulo.trim()) return

        await updateTodo(todo.id, { titulo: nuevoTitulo });
        setEditando(false);
        onChanged();
    }

    const handleCancel = () => {
        setEditando(false);
        setNuevoTitulo("");
    }

    return (
        <div>
            <span>{todo.titulo}</span>
            <select value={todo.estado}
                onChange={handleEstado}>
                {Object.entries(ESTADO_TEXTO).map(([key, value]) => (
                    <option key={key} value={key}>
                        {value}
                    </option>
                ))}
            </select>
            <button onClick={handleEdit}>Editar</button>
            <button onClick={handleDelete}>Borrar</button>

            {editando && (
                <div>
                    <input
                        type="text"
                        value={nuevoTitulo}
                        onChange={(e) => setNuevoTitulo(e.target.value)}
                    />
                    <button onClick={handleSave}>Guardar</button>
                    <button onClick={handleCancel}>Cancelar</button>
                </div>
            )}
        </div>
    )
}
