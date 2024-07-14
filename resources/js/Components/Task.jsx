import {Link, router} from "@inertiajs/react";
import {useEffect, useState} from "react";
import moment from 'moment';
import 'moment/locale/ru';

moment.locale('ru');

export default function Task({task}) {
    const [isActive, setIsActive] = useState(task.active);

    function handleActiveChange(e) {
        const newActive = e.target.checked;
        setIsActive(newActive);
        router.patch(`/task/${task.id}/update`, { active: newActive });
    }

    function handleSubmit(e){
        e.preventDefault()
        router.delete(`/task/${task.id}/delete`)
    }

    const isDeadlinePast = new Date(task.deadline) <= new Date();

    return (
        <div className='task card'>
            <div className="card-body">
                <div className="card-title">
                    {task.title}
                </div>

                <div className="card-text" dangerouslySetInnerHTML={{__html: task.text}}></div>

                {task.deadline ? (
                    <div className={`card-text ${isDeadlinePast ? 'text-danger' : 'text-info'}`}>
                        Крайний срок: {moment(task.deadline).format('MMM D YYYY, H:mm')}
                    </div>
                ) : null}
                <div className="card-text text-muted">Дата изменения: {moment(task.updated_at).format('MMM D YYYY, H:mm')}</div>

                <input
                    type="checkbox"
                    id={`task-${task.id}`}
                    className="btn-check"
                    checked={isActive}
                    onChange={handleActiveChange}
                />

                <label htmlFor={`task-${task.id}`} className="btn btn-primary mt-2">
                    {isActive ? 'Активно' : 'Сделано'}
                </label>

                <div className="d-flex gap-3 mt-3">
                    <Link href={`/task/${task.id}/edit`} className='btn btn-link'>
                        Изменить
                    </Link>

                    <form onSubmit={handleSubmit}>
                        <button type="submit" className="btn btn-link">Удалить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
