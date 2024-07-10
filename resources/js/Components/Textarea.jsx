import {Editor} from "@tinymce/tinymce-react";

export default function Textarea({text, id, onEditorChange}) {
    return (
        <div className={'mb-3'}>
            <label htmlFor={id} className="form-label">{text}</label>

            <Editor
                apiKey='5t198buqqnv79erg1n7nqpz6xkdg99yyeiue0a76wih8j4sx'
                init={{
                    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker',
                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                }}
                initialValue=""

                onEditorChange={onEditorChange}
            />
        </div>
    )
}
