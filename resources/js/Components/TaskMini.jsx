import {Link, usePage} from "@inertiajs/react";

export default function TaskMini({task}) {
    const {url} = usePage();
    const isActive = url === `/task/${task.id}`;
    const isDeadlinePast = new Date(task.deadline) <= new Date();


    return (
        <Link href={`/task/${task.id}/`} method='get'>
            <div className={`w-100 btn btn-sm ${isDeadlinePast && task.deadline && !isActive ? 'btn-danger' : ''} ${isActive ? 'btn-primary' : 'btn-secondary'}`}>
                <div className="card-title">{task.title}</div>
            </div>
        </Link>
    )
}
