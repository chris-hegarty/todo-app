import React, { useState, createContext } from "react";
export const TaskContext = createContext(null);

// Creating a provider functional component it needs props as you'll see below
export function TaskProvider(props) {
    // Any functions or state to share with the application goes in here
    // ...
    // We return the created Provider here instead of in the parent component
    function deleteTask(task) {
        // .filter(val => is val NOT the task?)
        setTasks((curr) => curr.filter((t) => t !== task));
    }

    function markTask(task) {
        setTasks((curr) =>
            curr.map((t) => {
                if (t === task) {
                    return { ...t, completed: !t.completed };
                }
                return t;
            })
        );
    }

    const [tasks, setTasks] = useState([]);

    return (
        <TaskContext.Provider value={{ tasks, setTasks, markTask, deleteTask }}>
            {props.children}
        </TaskContext.Provider>
    );
}