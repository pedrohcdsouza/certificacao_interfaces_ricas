export default function Footer() {
    return (
        <footer className="bg-black text-white border-t border-gray-800">
            <div className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-center">
                    <p className="text-gray-300 text-sm">
                        Desenvolvido por{' '}
                        <a 
                            href="https://github.com/pedrohcdsouza" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-600 hover:text-red-500 transition-colors duration-200 font-medium"
                        >
                            @pedrohcdsouza
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}