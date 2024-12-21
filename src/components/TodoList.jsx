import { useState } from "react"
import TodoItem from "./TodoItem";

function TodoList({ setTodos, todos }) {

    const [todoText, setTodoText] = useState("")

    function addTodo() {
        if (!todoText.trim())
            return

        const item = {
            id: Date.now(),
            todoData: todoText.trim(),
            isCompleted: false
        }
        setTodos([...todos, item]);
        setTodoText("")
    }

    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id != id))
    }

    function editTodo(todoText, id) {
        const editedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, todoData: todoText.trim() }
            }
            return todo
        })
        setTodos(editedTodos)
    }

    function toogleCompletion(id) {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isCompleted: !todo.isCompleted }
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    return (
        <div className="todolist-container">
            <div className="todolist-box">
                <div className="todo-input">
                    <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
                    <button onClick={addTodo}>Add Todo</button>
                </div>
                <div className="todo-list">
                    {
                        [...todos].reverse().map((todo) => {
                            return <TodoItem todo={todo} toogleCompletion={toogleCompletion} editTodo={editTodo} deleteTodo={deleteTodo} key={todo.id} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TodoList