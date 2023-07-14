import { rest } from "msw";
import { movies } from "./fixtures/movies";


export const handlers = [
  rest.get("/api/movies", (req, res, ctx) =>

    // simulo una situazione randomica di un error server side
      res(ctx.status(500), ctx.json(movies))
  ),

  rest.post("/api/vote", (req, res, ctx) => res(ctx.status(200))),
];
