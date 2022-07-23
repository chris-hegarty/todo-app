
import './App.css';
import Todos from './Todos';
import ToDoForm from './ToDoForm';
import SingleTask from './SingleTask';
import { useContext, useEffect, useState } from "react";
import { TaskContext } from './TaskContext';


function App() {
  // Array with prebuilt tasks: dueDate, title, description, name. Commented out for now.

  // let startingTasks = [
  //   {
  //     dueDate: "2022-08-20",
  //     title: "Build a house",
  //     description: "Building things",
  //     user: "Hortense",
  //   },
  //   {
  //     dueDate: "2022-08-15",
  //     title: "Feed the crows",
  //     description: "Need to go buy feed and use it",
  //     user: "Xavier",
  //   },
  //   {
  //     dueDate: "2022-07-30",
  //     title: "Buy Groceries",
  //     description: "Too much food needed",
  //     user: "Oslo",
  //   },
  //   {
  //     dueDate: "2022-10-31",
  //     title: "Run errands",
  //     description: "So many errands",
  //     user: "Chloe",
  //   },
  //   {
  //     dueDate: "2022-12-24",
  //     title: "Meet family",
  //     description: "Family time",
  //     user: "Reginald",
  //   },
  // ];
  const tasks = useContext(TaskContext)
  const deleteTask = useContext(TaskContext);
  //Set state for timer
  const [timer, setTimer] = useState(0);

  //Set Use Effect for Timer:
  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(curr => curr + 1);
    }, 1000)
    //this function will run 
    return () => clearInterval(interval)
  })
  //! Set up a piece of state to track newest todo
  // You can leave the array blank becasue there IS NO NEWEST TASK YET.
  // OR...put a null to remind you that you left it blank.
  const [newestTask, setNewestTask] = useState(null);

  //! Set up a useEffect to run when tasksInAppJS changes
  useEffect(() => {
    setNewestTask(tasks[tasks.length - 1])
  }, [tasks])
  //the parameter is when do I want something to run, what to watch...the array tasksInAppJS.
  //New piece of state for total characters:

  //pattern for removing from an array in state using .filter:
  // This is moved to TaskContext.js
  // function deleteTask(task) {
  //   setTasksInAppJS((curr) => curr.filter((val) => val !== task));
  // }

  //This is moved to TaskContext.js
  // function markStatus(task) {
  //   setTasksInAppJS((curr) =>
  //     curr.map((t) => {
  //       if (t === status) {
  //         // return { ...t, completed: !task.completed }
  //       }
  //     }
  //     )
  //   )
  // }

  return (
    <div className="App">
      <section className="new-task flex center">
        <h4>Time on Page:{timer} </h4>
        <h2>Most recently added:</h2>
        {/*Newest task is set to null up in useState  */}
        {!newestTask && <p>There isn't one</p>}
        {newestTask && <div>
          <SingleTask
            deleteTask={deleteTask}
            task={newestTask} />
        </div>}

        {/* If newest is undefined show na 
        if there is a newest task...render tododisplay component
        build a useEffect */}

        <h2>Make a New Task</h2>
      </section>

      <ToDoForm />

      <section className="to-dos-section">
        <Todos />
      </section>
    </div>


  )
}

export default App;