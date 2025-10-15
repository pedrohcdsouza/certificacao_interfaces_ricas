import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-gradient-to-r from-purple-900 via-pink-800 to-red-900 text-white shadow-lg">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/movies" className="flex items-center space-x-2 hover:opacity-80 transition">
                        <span className="text-3xl">🎬</span>
                        <h1 className="text-2xl font-bold">MovieHub</h1>
                    </Link>
                    
                    <nav className="flex items-center space-x-6">
                        <Link to="/movies" className="hover:text-yellow-300 transition font-medium">
                            Filmes
                        </Link>
                        <a href="#" className="hover:text-yellow-300 transition font-medium">
                            Categorias
                        </a>
                        <a href="#" className="hover:text-yellow-300 transition font-medium">
                            Favoritos
                        </a>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full transition">
                            Entrar
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    )
}