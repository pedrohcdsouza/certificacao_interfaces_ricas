export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-auto">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1">
                        <div className="flex items-center space-x-2 mb-3">
                            <span className="text-3xl">🎬</span>
                            <h3 className="text-xl font-bold text-white">MovieHub</h3>
                        </div>
                        <p className="text-sm">
                            Seu destino para descobrir os melhores filmes e séries.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-3">Links Rápidos</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-yellow-400 transition">Filmes Populares</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition">Lançamentos</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition">Em Cartaz</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition">Top Rated</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-3">Categorias</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-yellow-400 transition">Ação</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition">Comédia</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition">Drama</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition">Ficção Científica</a></li>
                        </ul>
                    </div>

                    {/* Redes Sociais */}
                    <div>
                        <h4 className="text-white font-semibold mb-3">Siga-nos</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-yellow-400 transition text-2xl">📘</a>
                            <a href="#" className="hover:text-yellow-400 transition text-2xl">📸</a>
                            <a href="#" className="hover:text-yellow-400 transition text-2xl">🐦</a>
                            <a href="#" className="hover:text-yellow-400 transition text-2xl">▶️</a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
                    <p>© 2025 MovieHub. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}