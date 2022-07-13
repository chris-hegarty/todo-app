
import './App.css';
import Todos from './Todos';
import { useState } from "react";

// Array with prebuilt tasks: dueDate, title, description, name
let startingTasks = [
    {
      dueDate: "2022-08-20",
      title: "Build a house",
      description: "Building things",
      user: "Hortense",
    },
    {
      dueDate: "2022-08-15",
      title: "Feed the crows",
      description: "Need to go buy feed and use it",
      user: "Xavier",
    },
    {
      dueDate: "2022-07-30",
      title: "Buy Groceries",
      description: "Too much food needed",
      user: "Oslo",
    },
    {
      dueDate: "2022-10-31",
      title: "Run errands",
      description: "So many errands",
      user: "Chloe",
    },
    {
      dueDate: "2022-12-24",
      title: "Meet family",
      description: "Family time",
      user: "Reginald",
    },
  ];

function App() {
  //here is where you are storing the input values from the form.
  //whenever you trigger a rebuild, it starts these off at their initial values.
  // let dueDate = "";
  //Getter-Setter pattern
  // new const for each piece of state.
  const [dueDate, setDueDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState("");
  const [tasksInAppJS, setTasksInAppJS] = useState(startingTasks);

  //function for button click

  function addTodo(e){
    e.preventDefault();
    let newTodo = {
      dueDate: dueDate,
      title: title,
      description: description,
      user: user
    };
  //if you are updating objects or arrays, use this pattern:
  setTasksInAppJS( (curr) => [...curr,newTodo]);
    //call the function to update the variable.
  setDueDate("");
  setTitle("");
  setDescription("");
  setUser("");
  }

  return (   
    <div className="App">
      <form>
        <div>
          <label htmlFor="due-date">Date</label>
          <input 
            value = {dueDate}
            onChange={ (e) => {
            setDueDate(e.target.value);
            }} 
            id="due-date" 
            type="date" 
            />
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input 
            value = {title}
            onChange={ (e) => {  
            setTitle(e.target.value);
            }} 
            id="title" 
            type="text" 
            />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input 
          value = {description}
          onChange = { (e) => {
            setDescription(e.target.value);
          }}
          id="description" 
          type="text" />
        </div>
        <div>
          <label htmlFor="user">User</label>
          <input 
          value = {user}
          onChange = { (e) => {
              setUser(e.target.value);
          }}
          id="user" type="text" />
        </div>
        <div>

       <button onClick={addTodo}>SUBMIT</button>

        </div>
      </form>
     <div>
          <Todos tasks={tasksInAppJS}/>
      </div>
    </div>
  );
}

export default App;

{/* //The standard pattern for event listeners.
//event={ (e) => {} }

//Be careful of one-way binding.
//value={title} */}
