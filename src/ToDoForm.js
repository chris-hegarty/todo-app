import { React, useContext } from "react";
import { useState, useEffect } from "react";
import { TaskContext } from "./TaskContext";

function ToDoForm() {
  //here is where you are storing the input values from the .
  //whenever you trigger a rebuild, it starts these off at their initial values.
  // let dueDate = "";
  //Getter-Setter pattern
  // new const for each piece of state.
  const [dueDate, setDueDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState("");

  const { tasks, setTasks, markTask, deleteTask } = useContext(TaskContext);

  //Pattern for useEffect on multiple pieces of state.
  const [charCount, setCharCount] = useState(0)
  useEffect(() => {
    setCharCount(title.length + description.length + user.length)
  }, [title, description, user])

  //function for adding a task.
  //We'll call this directly on the button click event:
  function addTodo(e) {
    e.preventDefault();
    let newTodo = {
      dueDate: dueDate,
      title: title,
      description: description,
      user: user,

    };
    //if you are updating objects or arrays, use this pattern:
    //Can also do something like:
    //setTasksInAppJS((curr) => curr.filter((val) => val !== task));
    setTasks((curr) => [...curr, newTodo]);

    //call the function to update the variable.
    setDueDate("");
    setTitle("");
    setDescription("");
    setUser("");


  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="due-date">Date</label>
          <input
            value={dueDate}
            onChange={(e) => {
              setDueDate(e.target.value);
            }}
            id="due-date"
            type="date"
          />
        </div>
        <div className="flex column">
          <label htmlFor="title">Title</label>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            id="title"
            type="text"
          />
        </div>
        <div className="flex column">
          <label htmlFor="description">Description</label>
          <input
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            id="description"
            type="text" />
        </div>
        <div className="flex column">
          <label htmlFor="user">User</label>
          <input
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
            id="user" type="text" />
        </div>
        <div>
          <p>Total characters: {charCount}</p>
        </div>
        <button onClick={addTodo}>
          ADD NEW TASK
        </button>
      </form>
    </div>
  )
}

export default ToDoForm