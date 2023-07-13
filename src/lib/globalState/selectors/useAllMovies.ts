import { Movie } from "../../../api/types";
import { useGlobalState } from "../GlobalStateContext";

interface IRatedMovie extends Movie {
  votes: number;
}


// prima Task , creo una funzione che restituisca un array di film, contenenti anche la proprietà votes
export const useAllMovies = (): IRatedMovie[] => {
  const { state } = useGlobalState();

  const ratedMovies: IRatedMovie[] = []

  for(let i = 0; i < state.movies.length; i++){
    const movie = state.movies[i];

    ratedMovies.push({
      id: movie.id,
     author: movie.author,
      title: movie.title,
      year: movie.year,
      votes: state.votes[i]
    })
  }
  
  return ratedMovies

};
