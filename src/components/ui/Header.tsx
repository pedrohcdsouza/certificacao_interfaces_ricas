import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-black text-white shadow-lg">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-red-600 md:text-3xl">
                        MyNetflix
                    </h1>
                    <div>
                        <nav>
                            <Link
                                to="/movies"
                                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                            >
                                Filmes
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}