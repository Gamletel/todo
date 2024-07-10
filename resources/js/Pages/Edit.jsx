import {useCallback, useState} from 'react';
import Textarea from "@/Components/Textarea.jsx";
import Input from "@/Components/Input.jsx";
import PageTitle from "@/Components/PageTitle.jsx";
import Base from "@/Templates/Base.jsx";
import {router} from "@inertiajs/react";

export default function Edit({ task }) {
    const [values, setValues] = useState({
        title: task.title,
        text: task.text,
        active: task.active,
    });

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    };

    const handleEditorChange = useCallback((content) => {
        setValues((values) => ({
            ...values,
            text: content,
        }));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        router.patch(`/task/${task.id}/update`, values); // Поправка на правильное обращение к id задачи
    };

    return (
        <Base>
            <div>
                <PageTitle>Редактирование задачи</PageTitle>

                <form action={`/task/${task.id}/update`} onSubmit={handleSubmit}>
                    <Input id="title" text="Название" required value={values.title} onChange={handleChange} />

                    <Textarea text="Описание" onEditorChange={handleEditorChange} value={values.text} />

                    <input type="checkbox" id='active' onChange={handleChange} className="btn-check" defaultChecked={values.active}/>

                    <label htmlFor='active' className="btn btn-primary mt-2">
                        {values.active ? 'Активно' : 'Сделано'}
                    </label>

                    <button type="submit" className="btn btn-primary">Сохранить</button>
                </form>
            </div>
        </Base>
    );
}
