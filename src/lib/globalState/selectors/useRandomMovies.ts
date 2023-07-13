import { MovieList } from "../../../api/types";
import { useGlobalState } from "../GlobalStateContext";
import React, { useMemo } from "react";

/**
 * Return 2 random movies
 */
export const useRandomMovies = () => {
  const { state } = useGlobalState();


  //Utilizzo la funzione useMemo() perchè calcola un valore memorizzato in base a una dipendenza e lo restituisce solo se la dipendenza è cambiata. 
  const randomMovies: MovieList = useMemo(() => {

    if(state.movies.length < 2){
      return [];
    }
  // Calcola due film casuali dalla lista movies e garantisce che non siano uguali
    let movie1 = 0;
    let movie2 = 0;
    while(movie1 == movie2)(
      movie1 = Math.floor(Math.random() * state.movies.length),
      movie2 = Math.floor(Math.random() * state.movies.length)
    )

    console.log([state.movies[movie1], state.movies[movie2]])

    return [state.movies[movie1], state.movies[movie2]];

  }, [state.movies])

  return randomMovies;

};
