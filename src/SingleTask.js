import { React } from "react";
import moment from "moment";


function SingleTask({ task, deleteTask }) {
    console.log(task);
    const formatted = moment(task.dueDate).format("MMM D, YYYY");
    return (<>
        <h3 className="cursive underline">{task.title}</h3>
        <h4 className="cursive">{task.user}</h4>
        <p>{task.description}</p>
        <p>{formatted}</p>
        <button name="deleteButton" onClick={(e) => { deleteTask(task) }}>DELETE</button>
    </>
    )
}

export default SingleTask;