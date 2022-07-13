import { React } from "react";

function Todos(props){
    return(
        <div>
            {props.tasks.map((val,idx) => (
                <div key={idx}>
                    <h1>{val.title}</h1>
                    <p>{val.description}</p>
                    <p>{val.user}</p>
                    <p>{val.dueDate}</p>
                </div>
                )
            )}
        </div>
    )
}
export default Todos


//needs to take in a prop from App.js