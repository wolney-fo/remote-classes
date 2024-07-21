import { PrismaClassesRepository } from "../../repositories/prisma/prisma-classes-repository";
import { CreateClassUseCase } from "../create-class";

export function makeCreateClassUseCase() {
  const classesRepository = new PrismaClassesRepository();
  const useCase = new CreateClassUseCase(classesRepository);

  return useCase;
}