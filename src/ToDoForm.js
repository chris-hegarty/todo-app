import { React } from "react";
import { useState } from "react";



function ToDoForm({ setTasks }) {


  //here is where you are storing the input values from the .
  //whenever you trigger a rebuild, it starts these off at their initial values.
  // let dueDate = "";
  //Getter-Setter pattern
  // new const for each piece of state.
  const [dueDate, setDueDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState("");


  //function for button click

  function addTodo(e) {
    e.preventDefault();
    let newTodo = {
      dueDate: dueDate,
      title: title,
      description: description,
      user: user
    };
    //if you are updating objects or arrays, use this pattern:
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
        <label htmlFor="due-date">Date</label>
        <div>
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
        <button onClick={addTodo}>
          ADD NEW TASK
        </button>
      </form>
    </div>
  )
}

export default ToDoForm