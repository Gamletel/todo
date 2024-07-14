import Base from "@/Templates/Base.jsx";
import Task from "@/Components/Task.jsx";
import {useEffect} from "react";

export default function Welcome({ tasks }) {
    return (
        <Base>
            <div className="d-flex flex-column gap-3">
                {tasks.map(task=>(
                    <Task task={task} key={task.id}/>
                ))}
            </div>
        </Base>
    );
}
