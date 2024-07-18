import { makeCreateClassUseCase } from "../../use-cases/factories/make-create-class";
import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";

export async function createClass(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const createClassBodySchema = z.object({
    weekday: z.coerce.number(),
    starts_at_hour: z.coerce.number(),
    starts_at_minute: z.coerce.number(),
    ends_at_hour: z.coerce.number(),
    ends_at_minute: z.coerce.number(),
    subjectId: z.coerce.number(),
  });

  const {
    weekday,
    starts_at_hour,
    starts_at_minute,
    ends_at_hour,
    ends_at_minute,
    subjectId,
  } = createClassBodySchema.parse(request.body);

  const createClassUseCase = makeCreateClassUseCase();

  await createClassUseCase.execute({
    weekday,
    starts_at_hour,
    starts_at_minute,
    ends_at_hour,
    ends_at_minute,
    subjectId,
  });

  return reply.status(204).send();
}
