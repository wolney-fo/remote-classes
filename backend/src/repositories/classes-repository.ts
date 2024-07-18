import { Prisma, Class } from "@prisma/client";

export interface ClassesRepository {
  findById(id: number): Promise<Class | null>;
  create(data: Prisma.ClassUncheckedCreateInput): Promise<Class>;
}
