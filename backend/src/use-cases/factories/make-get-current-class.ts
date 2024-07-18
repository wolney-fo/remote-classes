import { PrismaClassesRepository } from "../../repositories/prisma/prisma-classes-repository";
import { GetCurrentClassUseCase } from "../get-current-class";

export function makeGetCurrentClassUseCase() {
  const classesRepository = new PrismaClassesRepository();
  const useCase = new GetCurrentClassUseCase(classesRepository);

  return useCase;
}
