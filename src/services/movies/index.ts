import { api } from "../api";
import type { MovieProps } from "../../types/movie";

export interface MovieApiResponse {
  page: number;
  results: MovieProps[];
  total_pages: number;
  total_results: number;
}

const getFilmes = async ({
  page,
}: {
  page: number;
}): Promise<MovieApiResponse | undefined> => {
  try {
    const { data } = await api.get("/movie/top_rated", {
      params: {
        language: "pt-BR",
        page: page,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

const getFilme = async (id: string) => {
  try {
    const { data } = await api.get(`/movie/${id}`, {
      params: {
        language: "pt-BR",
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching movie:", error);
    throw error;
  }
};

const searchFilmes = async ({
  query,
  page,
}: {
  query: string;
  page: number;
}): Promise<MovieApiResponse | undefined> => {
  try {
    const { data } = await api.get("/search/movie", {
      params: {
        language: "pt-BR",
        query: query,
        page: page,
      },
    });
    return data;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};

export { getFilmes, getFilme, searchFilmes };
