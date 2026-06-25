import { updateTodo } from "../services/api";
import { deleteTodo } from "../services/api";

const ESTADOS = ['pendiente', 'completada', 'cancelada']

const ESTADO_TEXTO = {
  pendiente: 'Pendiente',
  completada: 'Completada',
  cancelada: 'Cancelada'
};

export function TodoItem({ todo, onChanged }) {

    const handleEstado = async (e) => {
        await updateTodo(todo.id, { estado: e.target.value });
        onChanged()
    }

    const handleDelete = async () => {
        await deleteTodo(todo.id);
        onChanged();
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
            <button onClick={handleDelete}>Borrar</button>
        </div>
    )
}
