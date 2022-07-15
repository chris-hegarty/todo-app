
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
  const [tasksInAppJS, setTasksInAppJS] = useState(startingTasks);

  function deleteTask(task) {
    const updatedList = tasksInAppJS.filter(() => setTasksInAppJS.task !== task);
    return (
      setTasksInAppJS((current) => [updatedList])
    )
  }
  // e.prevent.default();
  // e.target.remove();
  //what is the array(curr) => [update the array to remove the single task];
  <div className="App">

    <section className="new-task flex center">
      <h2>Make a New Task</h2>
    </section>

    <ToDoForm setTasks={setTasksInAppJS} />

    <section className="to-dos-section">
      <Todos deleteTask={deleteTask} tasks={tasksInAppJS} />
    </section>
  </div>


}

export default App;




{/* //The standard pattern for event listeners.
//event={ (e) => {} }

//Be careful of one-way binding.
//value={title} */}

