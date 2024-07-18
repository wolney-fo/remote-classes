import { prisma } from "../../lib/prisma";
import { ClassesRepository } from "../classes-repository";
import { Prisma } from "@prisma/client";

export class PrismaClassesRepository implements ClassesRepository {
  async findById(id: number) {
    const _class = await prisma.class.findUnique({
      where: {
        id,
      },
    });

    return _class;
  }
  async create(data: Prisma.ClassUncheckedCreateInput) {
    const _class = await prisma.class.create({
      data,
    });

    return _class;
  }
}
