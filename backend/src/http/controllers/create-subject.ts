import { makeCreateSubjectUseCase } from "../../use-cases/factories/make-create-subject";
import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";

export async function createSubject(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const createSubjectBodySchema = z.object({
    title: z.string(),
    url: z.string().url(),
    thumbnail_url: z.string().url(),
  });

  const { title, url, thumbnail_url } = createSubjectBodySchema.parse(
    request.body
  );

  const createSubjectUseCase = makeCreateSubjectUseCase();

  const { subject } = await createSubjectUseCase.execute({
    title,
    url,
    thumbnail_url,
  });

  return reply.status(201).send({ subjectId: subject.id });
}
