
import './App.css';
import Todos from './Todos';
import ToDoForm from "./ToDoForm";
import { useState } from "react";

// Array with prebuilt tasks: dueDate, title, description, name
function App() {
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
  // Set your piece of state to watch the array:
  const [tasksInAppJS, setTasksInAppJS] = useState(startingTasks);

  //pattern for removing from an array in state using .filter:
  function deleteTask(task) {
    setTasksInAppJS((curr) => curr.filter((val) => val !== task));
  }

  return (
    <div className="App">
      <section className="new-task flex center">
        <h2>Make a New Task</h2>
      </section>

      <ToDoForm setTasks={setTasksInAppJS} />

      <section className="to-dos-section">
        <Todos deleteTask={deleteTask} tasks={tasksInAppJS} />
      </section>
    </div>


  )
}

export default App;