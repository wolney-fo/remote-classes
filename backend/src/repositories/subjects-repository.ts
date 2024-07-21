import { Prisma, Subject } from "@prisma/client";

export interface SubjectsRepository {
  findById(id: number): Promise<Subject | null>;
  create(data: Prisma.SubjectUncheckedCreateInput): Promise<Subject>;
}
