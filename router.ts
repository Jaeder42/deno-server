import { Router } from "https://deno.land/x/oak/mod.ts";
import { echo } from "./controllers/echo.ts";
export const router = new Router();

router.get("/", (ctx, next) => {
  // handle the GET endpoint here
  ctx.response.body = "Hello World!";
});

router.get("/test", (ctx) => {
  ctx.response.body = "Testing indeed";
});

router.post("/echo", echo);
