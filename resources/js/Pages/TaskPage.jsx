import Base from "@/Templates/Base.jsx";
import Task from "@/Components/Task.jsx";
import {useEffect} from "react";
import TaskMini from "@/Components/TaskMini.jsx";

export default function TaskPage({tasks, task}) {
    return (
        <Base>
            <div className=" container-fluid">
                <div className="row">
                    <div className='d-flex flex-column gap-3 shrink-0 col-sm-2'>
                        {tasks.map(task => (
                            <TaskMini task={task} key={task.id}/>
                        ))}
                    </div>

                    <div className="d-flex flex-column gap-3 col-sm-10">
                        <Task task={task}/>
                    </div>
                </div>
            </div>
        </Base>
    );
}
