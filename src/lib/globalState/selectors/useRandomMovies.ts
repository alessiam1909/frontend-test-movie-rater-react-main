import { useMemo } from "react";
import { MovieList } from "../../../api/types";
import { useGlobalState } from "../GlobalStateContext";

/**
 * Return 2 random movies
 */
export const useRandomMovies = () => {
  const { state } = useGlobalState();

  /**
   * ! NOTE TASK 2
   * si poteva semplificare il codice utilizzando il metodo sort per riordinare in maniera randomica l'array movies
   * evitando allo stesso tempo di avere due film uguali. Una volta ordinati in maniera csuale con il metodo slice
   * si prendono i primi due film dell'array.
   *
   * const result = useMemo(
   *  () => state.movies.sort(() => (Math.random() > 0.5 ? -1 : 1)).slice(0, 2),
   *  [state.movies],
   * );
   *
   * return result;
   *
   */

  //Utilizzo la funzione useMemo() perchè calcola un valore memorizzato in base a una dipendenza e lo restituisce solo se la dipendenza è cambiata.
  const randomMovies: MovieList = useMemo(() => {
    if (state.movies.length < 2) {
      return [];
    }
    // Calcola due film casuali dalla lista movies e garantisce che non siano uguali
    let movie1 = 0;
    let movie2 = 0;
    while (movie1 == movie2)
      (movie1 = Math.floor(Math.random() * state.movies.length)),
        (movie2 = Math.floor(Math.random() * state.movies.length));

    console.log([state.movies[movie1], state.movies[movie2]]);

    return [state.movies[movie1], state.movies[movie2]];
  }, [state.movies]);

  return randomMovies;
};
