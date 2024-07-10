import Base from "@/Templates/Base.jsx";
import Task from "@/Components/Task.jsx";
import {useEffect, useState} from "react";
import PageTitle from "@/Components/PageTitle.jsx";
import Input from "@/Components/Input.jsx";
import Textarea from "@/Components/Textarea.jsx";
import {router} from "@inertiajs/react";

export default function Create() {
    const [values, setValues] = useState({
        title: "Заголовок",
        text: "",
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleEditorChange(content, editor) {
        setValues(values => ({
            ...values,
            text: content,
        }));
    }

    function handleSubmit(e){
        e.preventDefault()
        router.post('/todo/store', values)
    }

    return (
        <>
            <Base>
                <div>
                    <PageTitle>Создание задачи</PageTitle>

                    <form action="/todo/store" method='POST' onSubmit={handleSubmit}>
                        <Input id={'title'} text={'Название'} required defaultValue={values.title} onChange={handleChange}/>

                        <Textarea text={'Описание'} onEditorChange={handleEditorChange} />

                        <button type="submit" className="btn btn-primary">Создать</button>
                    </form>
                </div>
            </Base>
        </>
    );
}
