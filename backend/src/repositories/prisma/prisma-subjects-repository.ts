import { prisma } from "../../lib/prisma";
import { SubjectsRepository } from "../subjects-repository";
import { Prisma } from "@prisma/client";

export class PrismaSubjectsRepository implements SubjectsRepository {
  async findById(id: number) {
    const subject = await prisma.subject.findUnique({
      where: {
        id,
      },
    });

    return subject;
  }

  async create(data: Prisma.SubjectUncheckedCreateInput) {
    const subject = await prisma.subject.create({
      data,
    });

    return subject;
  }
}
