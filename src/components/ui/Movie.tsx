import { useNavigate } from "react-router-dom";
import type { MovieProps } from "../../types/movie";
import { getImageUrl } from "../../utils/imageHelper";

export function Movie({ filme }: { filme: MovieProps }) {
  const navigate = useNavigate();
  const imageUrl = getImageUrl(filme.poster_path, "w500");

  const handleClick = () => {
    navigate(`/movies/${filme.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-red-600 rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 w-64 cursor-pointer"
    >
      <img
        src={imageUrl}
        alt={filme.title}
        className="w-full h-96 object-cover"
      />
      <div className="p-4">
        <h2
          className="font-bold text-lg mb-2 truncate text-gray-900"
          title={filme.title}
        >
          {filme.title}
        </h2>
        <div className="flex items-center justify-between text-sm text-gray-900">
          <span>{new Date(filme.release_date).getFullYear()}</span>
          <span className="flex items-center text-gray-900">
            ⭐ {filme.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
}
