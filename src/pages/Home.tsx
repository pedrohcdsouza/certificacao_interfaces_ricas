import { Movie } from "../components/ui/Movie";
import { useInView } from "react-intersection-observer";
import type { MovieProps } from "../types/movie";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useMovies } from "../hooks/useMovies";

export default function Home() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const {
    filmes,
    isLoading,
    error,
    hasMore,
    searchQuery,
    setSearchQuery,
    handleSearch,
  } = useMovies(inView);

  return (
    <div className="w-full p-4">
      <div className="max-w-md mx-auto mb-8">
        <Input
          placeholder="Buscar filmes..."
          prefix={<SearchOutlined className="text-gray-400" />}
          allowClear
          size="large"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onPressEnter={(e) => handleSearch(e.currentTarget.value)}
          onClear={() => handleSearch("")}
          className="rounded-full shadow-sm"
        />
      </div>

      <div className="flex flex-wrap gap-8 w-full align-items-center justify-center">
        {error && (
          <div className="w-full text-center p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {filmes && filmes.length > 0 && (
          <>
            {filmes.map((filme: MovieProps) => (
              <Movie key={filme.id} filme={filme} />
            ))}
            {hasMore && (
              <div ref={ref} style={{ height: "20px", margin: "20px 0" }}>
                {isLoading && <p>Carregando mais filmes...</p>}
              </div>
            )}
          </>
        )}
        {filmes.length === 0 && !isLoading && !error && (
          <p>Nenhum filme encontrado.</p>
        )}
      </div>
    </div>
  );
}
