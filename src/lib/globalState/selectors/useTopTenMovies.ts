import { useAllMovies } from "./useAllMovies";

/**
 * Return the 10 most voted movies
 */
export const useTopTenMovies = () => {
  const movies = useAllMovies();
  const topMovies = movies
    //filtra i film che non hanno voti
    .filter((movie) => movie.votes !== 0)
    //ordina i film secondo i loro voti in ordine decrescente
    .sort((movieA, movieB) => movieB.votes - movieA.votes)
    //ritorna solo i primi 10 film
    .slice(0, 10);

  return topMovies;
};
