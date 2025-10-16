/**
 * Gera a URL completa da imagem do TMDB
 * @param path - Caminho da imagem retornado pela API
 * @param size - Tamanho da imagem (w500, original, etc)
 * @returns URL completa da imagem ou placeholder
 */
export const getImageUrl = (
  path: string | null | undefined,
  size: "w500" | "original" = "w500"
): string => {
  if (!path) return "https://placehold.co/400x600";
  return `https://image.tmdb.org/t/p/${size}${path}`;
};
