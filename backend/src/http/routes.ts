import { createSubject } from "./controllers/create-subject";
import { createClass } from "./controllers/create-class";
import { getCurrentClass } from "./controllers/get-current-class";
import { FastifyInstance } from "fastify";

export async function appRoutes(app: FastifyInstance) {
  app.post("/subjects", createSubject);

  app.post("/classes", createClass);

  app.get("/class", getCurrentClass);
}
