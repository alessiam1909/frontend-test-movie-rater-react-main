import { rest } from "msw";
import { movies } from "./fixtures/movies";

export const handlers = [
  rest.get("/api/movies", (req, res, ctx) =>
    // simulo una situazione randomica di un error server side

    /**
     * ! NOTE TASK 7
     * La risposta andava resa randomicizzata e non statica
     *
     * const fail = Math.random() > 0.5;
     * return fail
     *  ? res(ctx.status(500), ctx.json([]))
     *  : res(ctx.status(200), ctx.json(movies));
     *
     */

    res(ctx.status(500), ctx.json(movies))
  ),

  rest.post("/api/vote", (req, res, ctx) => res(ctx.status(200))),
];
