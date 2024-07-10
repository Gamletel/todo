import {Link, router} from "@inertiajs/react";
import {useState} from "react";

export default function Task({id, title, text, active}) {
    const [isActive, setIsActive] = useState(active);

    function handleActiveChange(e) {
        const newActive = e.target.checked;
        setIsActive(newActive);
        router.patch(`/task/${id}/update`, { active: newActive });
    }

    function handleSubmit(e){
        e.preventDefault()
        router.delete(`/task/${id}/delete`)
    }

    return (
        <div className='task card'>
            <div className="card-body">
                <div className="card-title">
                    {title}
                </div>

                <div className="card-text" dangerouslySetInnerHTML={{__html: text}}></div>

                <input
                    type="checkbox"
                    id={`task-${id}`}
                    className="btn-check"
                    checked={isActive}
                    onChange={handleActiveChange}
                />

                <label htmlFor={`task-${id}`} className="btn btn-primary mt-2">
                    {isActive ? 'Активно' : 'Сделано'}
                </label>

                <div className="d-flex gap-3 mt-3">
                    <Link href={`/task/${id}/edit`} className='btn btn-link'>
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
