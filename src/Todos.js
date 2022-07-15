import { React, useState } from "react";
import SingleTask from "./SingleTask";

function Todos({ tasks, deleteTask }) {
    //create local state 
    console.log(tasks);
    const [filter, setFilter] = useState("");
    const [sort, setSort] = useState("none");


    function clearFilter() {
        setFilter("");
        setSort("none");
    }
    return (
        <><div class="sorting flex center">
            <div>
                <label htmlFor="filter-by">FILTER</label>
                <input onChange={(e) => setFilter(e.target.value)} type="text" name="filterby" id="filter-by" value={filter} />
            </div>

            <div>
                <label htmlFor="sort-by">SORT</label>
                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)} name="sort-dropdown" id="sort-by">
                    <option value="none">None</option>
                    <option value="user">User</option>
                    <option value="dueDate">Due Date</option>
                </select>
            </div>
            <div>
                <button onClick={(clearFilter)}>Clear Options</button>
            </div>
        </div><section className="tasks-section flex flex-wrap">

                {tasks

                    //write a function that checks each task against the words provided in the input.
                    .filter((t) => {
                        return (
                            t.user.toLowerCase().includes(filter.toLowerCase()) ||
                            t.title.toLowerCase().includes(filter.toLowerCase()) ||
                            t.description.toLowerCase().includes(filter.toLowerCase())
                        );
                    })
                    //sort the tasks by user alphabetically
                    //sort takes in function 
                    //the function should define a sort order and return a value.
                    .sort((a, b) => {
                        if (sort === "dueDate") {
                            if (a.dueDate > b.dueDate) {
                                return 1
                            } else if (a.dueDate < b.dueDate) {
                                return -1
                            } else {
                                return 0
                            }
                        } else {
                            return 0;
                        }
                    })
                    .map((val, idx) => (
                        <div className="single-task-wrapper basis-33">
                            <SingleTask task={val} key={idx} />
                        </div>
                    ))
                }

            </section></>
    )
}



export default Todos


//needs to take in a prop from App.js