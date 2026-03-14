import { call, os } from "@orpc/server";
import { listUsersHandler, sayHelloHandler } from "./queries/users";

export const usersRouter = {
  list: os.route({ method: "GET" }).handler(async ({ context }) => {
    return call(listUsersHandler, { context });
  }),

  sayHello: os.route({ method: "GET" }).handler(async ({ context }) => {
    return call(sayHelloHandler, { context });
  }),
};
