import { useEffect, useState } from "react";
import { getFilmes } from "../services/movies";
import { Movie } from "../components/ui/Movie";
import { useInView } from "react-intersection-observer";

export default function Home() {

    const [ filmes, setFilmes ] = useState<any[]>([]);
    const [ page, setPage ] = useState(1);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ hasMore, setHasMore ] = useState(true);
    const { ref, inView } = useInView({ threshold: 0.5 });

    const fetchFilmes = async (currentPage: number) => {
        try {
            setIsLoading(true);
            const data = await getFilmes({ page: currentPage });
            
            if (data && data.results) {
                if (currentPage === 1) {
                    setFilmes(data.results);
                } else {
                    setFilmes((prevFilmes) => [...prevFilmes, ...data.results]);
                }
                
                if (data.page >= data.total_pages || data.results.length === 0) {
                    setHasMore(false);
                }
            }
        } catch (error) {
            console.error("Erro ao carregar filmes:", error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchFilmes(1);
    }, []);

    useEffect(() => {
        if (inView && !isLoading && hasMore) {
            const nextPage = page + 1;
            setPage(nextPage);
            fetchFilmes(nextPage);
        }
    }, [inView, isLoading, hasMore, page]);

    return (
        <>
            {filmes && filmes.length > 0 && (
                <>
                    {filmes.map((filme: any) => (
                        <Movie key={filme.id} filme={filme} />
                    ))}
                    {hasMore && (
                        <div ref={ref} style={{ height: '20px', margin: '20px 0' }}>
                            {isLoading && <p>Carregando mais filmes...</p>}
                        </div>
                    )}
                </>
            )}
            {filmes.length === 0 && !isLoading && (
                <p>Nenhum filme encontrado.</p>
            )}
        </>
    );
}