import React, { useState } from "react";

export default function AddTodo({ addTodo }) {
    const [title, setTitle] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title) {
            alert("Title cannot be blank");
        } else {
            addTodo(title);
            setTitle("");
        }
    };
    return (
        <div className="parent-container">
            <div className="addtodo-container my-5">
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    id="title"
                    placeholder="Enter Title"
                />
                <button
                    type="submit"
                    style={{ color: "white" }}
                    className="btn bg-dark my-2"
                    onClick={submit}
                >
                    ADD
                </button>
            </div>
        </div>
    );
}