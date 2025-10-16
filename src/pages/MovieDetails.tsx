import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFilme } from "../services/movies";
import type { MovieProps } from "../types/movie";
import {
  ArrowLeftOutlined,
  StarFilled,
  CalendarOutlined,
} from "@ant-design/icons";
import { Spin } from "antd";
import { getImageUrl } from "../utils/imageHelper";

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [filme, setFilme] = useState<MovieProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFilme = async () => {
      if (!id) return;

      try {
        setIsLoading(true);
        setError(null);
        const data = await getFilme(id);
        setFilme(data);
      } catch (error) {
        console.error("Erro ao carregar filme:", error);
        setError("Erro ao carregar detalhes do filme.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilme();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <Spin size="large" />
      </div>
    );
  }

  if (error || !filme) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <p className="text-xl mb-4">{error || "Filme não encontrado"}</p>
        <button
          onClick={() => navigate("/movies")}
          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Voltar para Home
        </button>
      </div>
    );
  }

  const imageUrl = getImageUrl(filme.poster_path, "w500");
  const backdropUrl = getImageUrl(filme.poster_path, "original");

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backdropUrl})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/90 to-black"></div>
        </div>

        <div className="relative container mx-auto px-4 py-8">
          <button
            onClick={() => navigate("/movies")}
            className="flex items-center gap-2 text-white hover:text-red-600 transition-colors mb-8"
          >
            <ArrowLeftOutlined />
            <span>Voltar</span>
          </button>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-80 flex-shrink-0">
              <img
                src={imageUrl}
                alt={filme.title}
                className="w-full rounded-lg shadow-2xl border-2 border-red-600"
              />
            </div>

            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {filme.title}
              </h1>

              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <StarFilled className="text-red-600 text-xl" />
                  <span className="text-2xl font-bold text-red-600">
                    {filme.vote_average.toFixed(1)}
                  </span>
                  <span className="text-gray-400">/10</span>
                </div>

                <div className="flex items-center gap-2 text-gray-300">
                  <CalendarOutlined className="text-red-600" />
                  <span>{new Date(filme.release_date).getFullYear()}</span>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-3 text-red-600">
                  Sinopse
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {filme.overview || "Sem descrição disponível."}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                  <span className="text-gray-400 block mb-1">
                    Data de Lançamento
                  </span>
                  <span className="text-white font-semibold">
                    {new Date(filme.release_date).toLocaleDateString("pt-BR")}
                  </span>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                  <span className="text-gray-400 block mb-1">Avaliação</span>
                  <span className="text-white font-semibold">
                    {filme.vote_average.toFixed(1)} / 10
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
