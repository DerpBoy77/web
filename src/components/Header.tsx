import Link from 'next/link';

interface HeaderProps {
    currentPage?: string;
}

export default function Header({ currentPage = "" }: HeaderProps) {
    return (
        <header className="w-full py-4 px-8 flex justify-between items-center shadow-md bg-white sticky top-0 z-50">
            {/* <Image src="/logo.png" alt="Kavi Hangbro Logo" width={150} height={50} /> */}
            <div className="text-2xl font-bold tracking-wide text-gray-900">Kavi Hangbro</div>
            <nav className="hidden md:flex items-center space-x-4 text-base font-medium">
                <Link
                    href="/"
                    className={currentPage === "home" ? "text-pink-500 font-semibold" : "text-gray-700 hover:text-pink-500"}
                >
                    Home
                </Link>
                <a
                    href="/about"
                    className={currentPage === "about" ? "text-pink-500 font-semibold" : "text-gray-700 hover:text-pink-500"}
                >
                    About
                </a>
                <a
                    href="/catalogue"
                    className={currentPage === "catalogue" ? "text-pink-500 font-semibold" : "text-gray-700 hover:text-pink-500"}
                >
                    Catalogue
                </a>
                <a
                    href="/enquiry"
                    className={currentPage === "enquiry" ? "text-pink-500 font-semibold" : "text-gray-700 hover:text-pink-500"}
                >
                    Enquiry
                </a>
                <a
                    href="/contact"
                    className="bg-pink-500 text-white font-semibold rounded-full px-5 py-2 shadow-md hover:bg-pink-600 transition"
                >
                    CONTACT
                </a>
            </nav>
        </header>
    );
}
