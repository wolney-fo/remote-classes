import { ClassesRepository } from "../repositories/classes-repository";
import { Class } from "@prisma/client";

interface CreateClassRequest {
  weekday: number;
  starts_at_hour: number;
  starts_at_minute: number;
  ends_at_hour: number;
  ends_at_minute: number;
  subjectId: number;
}

interface CreateClassResponse {
  _class: Class;
}

export class CreateClassUseCase {
  constructor(private classesRepository: ClassesRepository) {}

  async execute({
    weekday,
    starts_at_hour,
    starts_at_minute,
    ends_at_hour,
    ends_at_minute,
    subjectId,
  }: CreateClassRequest): Promise<CreateClassResponse> {
    const _class = await this.classesRepository.create({
      weekday,
      starts_at_hour,
      starts_at_minute,
      ends_at_hour,
      ends_at_minute,
      subjectId,
    });

    return { _class };
  }
}
