import { api } from "../api";

const getFilmes = async ({ page }: { page: number }) => {
    try {
        
        const { data } = await api.get("/movie/top_rated", {
            params: {
                language: "pt-BR",
                page: page
            }
        });
        return data;
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
}

const getFilme = async (page: number, id: string) => {
    try {
        const { data } = await api.get(`/movie/${id}`, {
            params: {
                language: "pt-BR",
                page: page
            }
        });
        return data;
    } catch (error) {
        console.error("Error fetching movie:", error);
    }
}

export { getFilmes, getFilme };
