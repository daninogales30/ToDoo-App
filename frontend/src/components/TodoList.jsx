import { TodoItem } from './TodoItem';

export function TodoList({ todos, onChanged }) {
    if (!todos) return <p>No hay tareas para mostrar</p>

    return (
        <ul>
            {
                todos.map((todo) => (
                    <li key={todo.id}>
                        <TodoItem todo={todo} onChanged={onChanged} />
                    </li>
                ))
            }
        </ul>
    );
}