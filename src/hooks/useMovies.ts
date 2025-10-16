import { useState, useCallback, useEffect } from "react";
import { getFilmes, searchFilmes } from "../services/movies";
import type { MovieProps } from "../types/movie";

export const useMovies = (inView: boolean) => {
  const [filmes, setFilmes] = useState<MovieProps[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const fetchFilmes = useCallback(
    async (currentPage: number, query?: string) => {
      try {
        setIsLoading(true);
        setError(null);

        const data = query
          ? await searchFilmes({ query, page: currentPage })
          : await getFilmes({ page: currentPage });

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
        setError("Erro ao carregar filmes. Tente novamente mais tarde.");
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  // Carrega filmes iniciais
  useEffect(() => {
    fetchFilmes(1);
  }, [fetchFilmes]);

  // Infinite scroll
  useEffect(() => {
    if (inView && !isLoading && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchFilmes(nextPage, isSearching ? searchQuery : undefined);
    }
  }, [inView, isLoading, hasMore, page, fetchFilmes, isSearching, searchQuery]);

  const handleSearch = useCallback(
    (value: string) => {
      const trimmedValue = value.trim();

      if (trimmedValue) {
        setSearchQuery(trimmedValue);
        setIsSearching(true);
        setPage(1);
        setHasMore(true);
        fetchFilmes(1, trimmedValue);
      } else {
        setSearchQuery("");
        setIsSearching(false);
        setPage(1);
        setHasMore(true);
        fetchFilmes(1);
      }
    },
    [fetchFilmes]
  );

  return {
    filmes,
    isLoading,
    error,
    hasMore,
    searchQuery,
    setSearchQuery,
    handleSearch,
  };
};
