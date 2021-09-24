import React from "react";
import TodoItem from "./TodoItem";
export default function Todos(props) {
    return (
        <div className="todo-container my-4 py-3" style={{ minHeight: "70vh" }}>
            <h3 className="text-center">Todos List</h3>
            {props.todos.length === 0 || props.todos === null ? (
                <div className="no-todo">
                    <p>No todos found, add one.</p>
                </div>
            ) : (
                props.todos.map((todo, index) => {
                    return (
                        <TodoItem todo={todo} key={index} onEdit={props.onEdit} onDelete={props.onDelete} />
                    );
                })
            )}
        </div>
    );
}