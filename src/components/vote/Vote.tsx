import {
  Box,
  Button,
  Heading,
  List,
  ListItem,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import React, {useState} from "react";
import { useGoTo } from "../../lib/globalState/mutations/useGoTo";
import { useVote } from "../../lib/globalState/mutations/useVote";
import { useRandomMovies } from "../../lib/globalState/selectors/useRandomMovies";
import { State } from "../../lib/globalState/types";
import { Title } from "../layout/Title";

export const Vote: React.FC = () => {
  const movies = useRandomMovies();
  const [value, select, vote] = useVote();
  const goTo = useGoTo();
  // Aggiungo una variabile di stato per verificare film selezionato
  const [selectedMovie, setSelectedMovie] = useState(null);

  //creo un handle che setti il film selezionato all'input radio
  const handleMovieSelect = (movieId) => {
    setSelectedMovie(movieId);
    select(movieId);
  };

  const voteAndGo = () => {
    //eseguo la funzione per votare solo se c'è un film selezionato
    if(selectedMovie){
    vote();
    goTo(State.topTen);

  }
}

  return (
    <Box>
      <Title>Qual'è il migliore tra:</Title>
      <RadioGroup onChange={select} value={value}>
        <List>
          {movies.map((movie) => (
            <ListItem py={2} key={movie.id} onClick={() => handleMovieSelect(movie.id)}>
              <Radio value={movie.id}>
                <Heading fontSize="md">{movie.title}</Heading>
                <Box>
                  del {movie.year}, di {movie.author}
                </Box>
              </Radio>
            </ListItem>
          ))}
        </List>
      </RadioGroup>
      {/* Disabilito il bottone se non ci sono film selezionati */}
      <Button onClick={voteAndGo} mt={5} isDisabled={!selectedMovie}>
        Vota
      </Button>
    </Box>
  );
};
