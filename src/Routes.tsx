import React from "react";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Vote } from "./components/vote/Vote";
import { useGlobalState } from "./lib/globalState/GlobalStateContext";
import { useLoadMovies } from "./lib/globalState/mutations/useLoadMovies";
import { State } from "./lib/globalState/types";
import { TopTen } from "./components/dashboard/TopTen";
import { ServerError } from "./components/dashboard/ServerError";

export const Routes: React.FC = () => {
  const { state } = useGlobalState();

  // Load movies at bootstrap
  useLoadMovies();

  // added error page
  switch (state.current) {
    case State.vote:
      return <Vote />;
    case State.topTen:
      return <TopTen />;
    case State.error:
      return <ServerError />;
    case State.dashboard:
    default:
      return <Dashboard />;
  }
};
