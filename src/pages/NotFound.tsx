import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
            <div className="text-center px-4">
                <div className="mb-8">
                    <h1 className="text-8xl font-bold text-red-600 mb-4 md:text-9xl">
                        404
                    </h1>
                    <h2 className="text-2xl font-semibold text-gray-300 mb-2 md:text-3xl">
                        Página não encontrada
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
                        Oops! A página que você está procurando não existe ou foi movida.
                    </p>
                </div>
                
                <div className="space-y-4">
                    <Link 
                        to="/movies" 
                        className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
                    >
                        Voltar ao início
                    </Link>
                    
                </div>
            </div>
        </div>
    )
    
}