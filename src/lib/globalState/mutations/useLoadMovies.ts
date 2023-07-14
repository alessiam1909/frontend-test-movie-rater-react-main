import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { MovieList } from "../../../api/types";
import { useGlobalState } from "../GlobalStateContext";
import { actions } from "../actions";
import { State } from "../types";

/**
 * Call GET /movies and dispatch response
 */
export const useLoadMovies = () => {
  const { dispatch } = useGlobalState();
  useEffect(() => {
    axios
      .get("/api/movies")
      .then((res: AxiosResponse<MovieList>) =>
        dispatch(actions.loadMovies(res.data)),
      )
      // implemento l'azione di errore nella chiamata axios
      .catch(() => {
        dispatch(actions.goTo(State.error));
      });
  }, [dispatch]);
};
