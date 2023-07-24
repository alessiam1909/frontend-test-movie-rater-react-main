import { Movie } from "../../../api/types";
import { useGlobalState } from "../GlobalStateContext";

export interface IRatedMovie extends Movie {
  votes: number;
}

// prima Task , creo una funzione che restituisca un array di film, contenenti anche la proprietà votes
export const useAllMovies = (): IRatedMovie[] => {
  const { state } = useGlobalState();

  /**
   * ! NOTE TASK 1
   * si poteva utilizzare il metodo map per ciclare l'array di movies e aggiungere la proprietà votes
   * sfruttando il relativo id per identivicare i voti corrispondenti, utilizzando successivamente
   * lo spread operator per semplificare ancora di più la sintassi
   *
   * const movies = state.movies.map((movie) => ({
   *   ...movie,
   *   votes: state.votes[movie.id] || 0,
   * }));
   *
   * return movies;
   *
   */

  const ratedMovies: IRatedMovie[] = [];

  for (let i = 0; i < state.movies.length; i++) {
    const movie = state.movies[i];

    ratedMovies.push({
      id: movie.id,
      title: movie.title,
      author: movie.author,
      year: movie.year,
      votes: state.votes[i + 1] ?? 0,
    });
  }

  return ratedMovies;
};
