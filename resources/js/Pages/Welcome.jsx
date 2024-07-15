import Base from "@/Templates/Base.jsx";
import Task from "@/Components/Task.jsx";
import {useEffect} from "react";
import TaskMini from "@/Components/TaskMini.jsx";

export default function Welcome({tasks}) {
    return (
        <Base>
            <div className="container-fluid">
                <div className="position-relative row">
                    <div className='d-flex flex-column gap-3 shrink-0 col-sm-2 position-sticky top-1 h-100'>
                        {tasks.map(task => (
                            <TaskMini task={task} key={task.id}/>
                        ))}
                    </div>

                    <div className="d-flex flex-column gap-3 col-sm-10">
                        {tasks.map(task => (
                            <Task task={task} key={task.id}/>
                        ))}
                    </div>
                </div>
            </div>
        </Base>
    );
}
