import api from "../api";

const getFilmes = async (page: number) => {
    try {
        const { data } = await api.get("/movie/top_rated", {
            params: {
                language: "en-US",
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
                language: "en-US",
                page: page
            }
        });
        return data;
    } catch (error) {
        console.error("Error fetching movie:", error);
    }
}

export { getFilmes, getFilme };
