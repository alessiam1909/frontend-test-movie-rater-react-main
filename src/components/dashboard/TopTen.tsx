import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, ListItem, OrderedList, Progress } from "@chakra-ui/react";
import { State } from "../../lib/globalState/types";
import { useGoTo } from "../../lib/globalState/mutations/useGoTo";
import React from "react";
import { useTopTenMovies } from "../../lib/globalState/selectors/useTopTenMovies";
import { Title } from "../layout/Title";

export const TopTen: React.FC = () => {
  const movies = useTopTenMovies();
  const goTo = useGoTo();

  return (
    <Box>
      <Title>Top ten</Title>
      <div
        style={{
          maskImage: "linear-gradient(black 30%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(black 30%, transparent 100%)",
          padding: "10px",
        }}
      >
        <OrderedList>
          {movies.map((movie) => (
            <ListItem key={movie.id}>
              <Box style={{ display: "flex", alignItems: "center" }}>
                <Progress
                  value={movie.votes * 10}
                  width="10%"
                  colorScheme="red"
                  size="sm"
                />
                {movie.title} ({movie.votes} voti)
              </Box>
            </ListItem>
          ))}
        </OrderedList>
      </div>
      <Button onClick={() => goTo(State.vote)} mt={5}>
        Vota
      </Button>
    </Box>
  );
};
