import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = (ev) => {
  throw ev.redirect(302, "/test");
};
