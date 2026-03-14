import { os } from "@orpc/server";
import { z } from "zod";

export const listUsersHandler = os.handler(async ({ context }) => {
  return "hello world list";
});

export const sayHelloHandler = os.handler(async ({ context }) => {
  return "hello world sayHello";
});
