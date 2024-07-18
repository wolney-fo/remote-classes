import { makeGetCurrentClassUseCase } from "../../use-cases/factories/make-get-current-class";
import { FastifyRequest, FastifyReply } from "fastify";

export async function getCurrentClass(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const getCurrentClassUseCase = makeGetCurrentClassUseCase();

  const currentClass = await getCurrentClassUseCase.execute();

  return reply.status(200).send({
    currentClass,
  });
}
