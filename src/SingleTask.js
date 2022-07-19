import { React } from "react";
import moment from "moment";

function SingleTask({ task, deleteTask, markStatus }) {
    const formatted = moment(task.dueDate).format("MMM D, YYYY");

    return (<>
        <p>{task.title}</p>
        <p>{task.user}</p>

        {/* <input
            type="radio"
            id="to-do"
            name="status-choices"
            value="todo"
            checked==={status = "todo"}
            onChange={markStatus}
            checked
        />
        <label htmlFor="to-do">To Do</label><br />

        <input
            type="radio"
            id="in-progress"
            name="status-choices"
            value="inprogress"
            // onChange={markStatus} />
        <label htmlFor="in-progress">In Progress</label><br />

        <input
            type="radio"
            id="halted"
            name="status-choices"
            value="halted"
            onChange={markStatus} />

        <label htmlFor="halted">Halted</label><br />

        <input
            type="radio"
            id="task-done"
            name="status-choices"
            value="done"
            onChange={markStatus} />
        <label htmlFor="task-done">Done</label><br /> */}

        <p>{task.description}</p>
        <p>{formatted}</p>
        <button onClick={() => deleteTask(task)}>DELETE</button>
    </>
    )
}

export default SingleTask;