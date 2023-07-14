import { IRatedMovie, useAllMovies } from "./useAllMovies"

/**
 * Return the 10 most voted movies
 */

export const useTopTenMovies = () => {
  //Viene richiamata la funzione useAllMovies per ottenere l'elenco completo dei film
  const movies = useAllMovies();
  // Dichiaro un array che conterrà i primi dieci film con il numero di voti più alto
  const top10: IRatedMovie[] = [];


  // Dichiaro due variabili vote e addMovie per tenere traccia del numero di voti massimo e del film da aggiungere a top10
  let vote = 0;
  let addMovie;

  // Eseguo un ciclo for che itera per un massimo di dieci volte, corrispondente al numero di film desiderato in top10
  for(let i = 0; i < 10; i++){
    movies.forEach(movie => {
      //Per ogni film, viene controllato se ha un numero di voti superiore al valore corrente di vote e se non è già incluso in top10. Se si, il numero di voti massimo viene aggiornato a quello del film corrente e il film viene assegnato ad addMovie
      if((movie.votes > vote) && (!top10.includes(movie))){
        vote = movie.votes
        addMovie = movie
      }
    })


    //Dopo il completamento del ciclo forEach, viene verificato se vote è rimasto uguale a 0
    if(vote == 0){
      let votes = 0;
      //Se vote è uguale a 0, viene eseguito un ciclo while che continua fino a quando top10 ha dieci film.
      while(top10.length <= 10){
        if(!top10.includes(movies[votes])){
          top10.push(movies[votes]);
        }
        votes++;
      }
    }else{

      //Se vote non è uguale a 0, significa che è stato trovato un film con un numero di voti superiore a quelli presenti in top10. In questo caso, viene aggiunto il film corrispondente (addMovie) a top10 e vote viene reimpostato a 0 per la ricerca del prossimo film con un numero di voti superiore
      vote = 0
      top10.push(addMovie)
      addMovie = ""
    }
  }

  // ritorno l'array dei 10 film migliori creato
  return top10;

}
