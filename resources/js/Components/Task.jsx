export default function Task({id, title, text, active}) {
    return (
        <div className='task card'>
            <div className="card-body">
                <div className="card-title">
                    {title}
                </div>

                <div className="card-text" dangerouslySetInnerHTML={{ __html: text }}></div>

                <input type="checkbox" id={`task-${id}`} className="btn-check" defaultChecked={active}/>

                <label htmlFor={`task-${id}`} className="btn btn-primary mt-2">
                    {active ? 'Active' : 'Done'}
                </label>
            </div>
        </div>
    )
}
