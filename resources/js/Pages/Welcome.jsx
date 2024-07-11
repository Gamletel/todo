import Base from "@/Templates/Base.jsx";
import Task from "@/Components/Task.jsx";
import {useEffect} from "react";
import {TaskProvider, useTasks} from "@/Contexts/TaskContext.jsx";

function WelcomeContent(){
    const {tasks} = useTasks();

    useEffect(()=>{
        console.log(tasks);
    }, [tasks]);

    return(
        <Base>
            <div className="d-flex flex-column gap-3">
                {tasks.map(task=>(
                    <Task key={task.id} id={task.id}/>
                ))}
            </div>
        </Base>
    )
}

export default function Welcome({ tasks }) {
    return (
        <TaskProvider ininitalTasks={tasks}>
            <WelcomeContent />
        </TaskProvider>
    );
}
