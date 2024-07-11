import {createContext, useContext, useState} from "react";

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({children, ininitalTasks}) =>{
    const [tasks, setTasks] = useState(ininitalTasks);

    return(
        <TaskContext.Provider value={{ tasks, setTasks}}>
            {children}
        </TaskContext.Provider>
    )
}
