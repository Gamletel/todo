import Base from "@/Templates/Base.jsx";
import Task from "@/Components/Task.jsx";
import {useEffect} from "react";

export default function Welcome({ tasks }) {
    useEffect(() => {
        console.log(tasks); // Проверяем данные
    }, [tasks]);

    return (
        <>
            <Base>
                <div>
                    {tasks.map((task, index)=>(
                        <Task
                            key={index}
                            id={task.id}
                            title={task.title}
                            text={task.text}
                            active={task.active} />
                    ))}
                </div>
            </Base>
        </>
    );
}
