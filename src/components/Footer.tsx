export default function Footer() {
    return (
        <footer className="w-full py-8 px-4 bg-gray-800 text-center text-xs sm:text-sm text-gray-300">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-2 sm:gap-4 mb-4">
                    <span>695, Pace City 2, Gurugram, Haryana, India</span>
                    <span className="hidden sm:inline">|</span>
                    <span>Phone +91 9910233400</span>
                    <span className="hidden sm:inline">|</span>
                    <span>Email: kavihangbro@gmail.com</span>
                </div>
                <div className="mt-4">Copyright © 2025 Kavi Hangbro</div>
            </div>
        </footer>
    );
}
