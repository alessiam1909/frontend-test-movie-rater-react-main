import { MovieList } from "../../api/types";
import { actions } from "./actions";

export enum State {
  dashboard,
  vote,
  topTen,
  error
}

export interface IAction<T, P> {
  type: T;
  payload: P;
}

export type actionNames = keyof typeof actions;

export type actionPayloads = ReturnType<(typeof actions)[actionNames]>;

export interface IGlobalState {
  current: State;
  movies: MovieList;
  /**
   * { id: numberOfVotes }
   */
  votes: Record<string, number>;
}
