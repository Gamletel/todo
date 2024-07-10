import {Link} from "@inertiajs/react";

export default function Header() {
    return (
        <header>
            <div className='border-bottom border-primary rounded mb-3'>
                <Link href='/task/create' className='btn btn-link'>
                    Создать задачу
                </Link>

                <Link href={'/'} className='btn btn-link'>
                    Все задачи
                </Link>
            </div>
        </header>
    )
}
