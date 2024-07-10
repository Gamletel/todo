import { Link, Head } from '@inertiajs/react';
import Header from "@/Components/Header.jsx";
import Footer from "@/Components/Footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Editor } from '@tinymce/tinymce-react';


export default function Base({ children }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="">
                <div className="">
                    <div className="">
                        <Header />

                        <main className="">
                            {children}
                        </main>

                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    );
}
