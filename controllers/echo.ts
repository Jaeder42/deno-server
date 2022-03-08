import { Context } from "https://deno.land/x/oak@v10.4.0/context.ts";

export const echo = async (ctx: Context) => {
  console.log(ctx.request.body());
  const body = await ctx.request.body();
  const value = await body.value;
  ctx.response.body = value
};
