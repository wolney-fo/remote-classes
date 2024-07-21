import { Subject } from "@prisma/client";
import { SubjectsRepository } from "../repositories/subjects-repository";

interface CreateSubjectRequest {
  title: string;
  url: string;
  thumbnail_url: string;
}

interface CreateSubjectResponse {
  subject: Subject;
}

export class CreateSubjectUseCase {
  constructor(private subjectsRepository: SubjectsRepository) {}

  async execute({
    title,
    url,
    thumbnail_url,
  }: CreateSubjectRequest): Promise<CreateSubjectResponse> {
    const subject = await this.subjectsRepository.create({
      title,
      url,
      thumbnail_url,
    });

    return { subject };
  }
}
