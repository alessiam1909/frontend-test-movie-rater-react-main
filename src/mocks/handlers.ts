import { rest } from "msw";
import { movies } from "./fixtures/movies";

export const handlers = [
  // TODO: Task 7 - simulate random error status 500
  rest.get("/api/movies", (req, res, ctx) =>
    res(ctx.status(200), ctx.json(movies)),
  ),

  rest.post("/api/vote", (req, res, ctx) => res(ctx.status(200))),
];
