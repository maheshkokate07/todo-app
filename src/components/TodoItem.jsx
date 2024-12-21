import { useState } from "react"

function TodoItem({ todo, deleteTodo, editTodo, toogleCompletion }) {

    const [isEditing, setIsEditing] = useState(false);
    const [todoText, setTodoText] = useState("")

    function handleEditClick() {
        setIsEditing(true)
        setTodoText(todo.todoData)
    }

    function handleSaveClick() {
        editTodo(todoText, todo.id)
        setIsEditing(false)
    }

    return (
        <div className="todo-item">
            <p className="todo-text">{todo.todoData} {todo.isCompleted && <span>&#x2705;</span>}</p>
            {
                isEditing && <div className="is-editing">
                    <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
                    <button onClick={handleSaveClick}>Save</button>
                </div>
            }
            <div className="buttons">
                {
                    !isEditing && <button onClick={handleEditClick}>Edit Todo</button>
                }
                {
                    !isEditing && <button onClick={() => deleteTodo(todo.id)}>Delete Todo</button>
                }
                {
                    !isEditing && <button onClick={() => toogleCompletion(todo.id)}>
                        {todo.isCompleted ? "Undo" : "Mark as complete"}
                    </button>
                }
            </div>
            <div className="line"></div>
        </div>
    )
}

export default TodoItem