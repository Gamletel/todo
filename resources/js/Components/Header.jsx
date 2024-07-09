import {Link} from "@inertiajs/react";

export default function Header() {
    return (
        <header>
            <div className='border-bottom border-primary rounded'>
                <Link href='/todo/create' className='btn btn-link'>
                    Создать задачу
                </Link>
            </div>
        </header>
    )
}
