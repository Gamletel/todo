export default function Input({id, text, required=false, value, onChange, type}) {
    return (
        <div className={'mb-3'}>
            <label htmlFor={id} className="form-label">{text}</label>
            <input className={'form-control'} type={type ? type : 'text'} id={id} value={value} required={required} onChange={onChange}/>
        </div>
    )
}
