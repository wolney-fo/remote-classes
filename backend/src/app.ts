import fastify from "fastify";
import { appRoutes } from "./http/routes";
import { ZodError } from "zod";
import { env } from "./env";
import { ResourceNotFoundError } from "./use-cases/errors/resource-not-found-error";

export const app = fastify();

app.register(appRoutes);

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: "Validation error.",
      issues: error.format(),
    });
  }

  if (error instanceof ResourceNotFoundError) {
    return reply.status(404).send({ message: "Resource not found." });
  }

  if (env.NODE_ENV !== "production") {
    console.error(error);
  }

  return reply.status(500).send({ message: "Internal server error." });
});
