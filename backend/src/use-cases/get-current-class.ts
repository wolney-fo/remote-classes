import { ClassesRepository } from "../repositories/classes-repository";
import { prisma } from "../lib/prisma";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

interface GetCurrentClassResponse {
  title: string;
  url: string;
  thumbnail_url: string;
  starts_at_hour: number;
  starts_at_minute: number;
  ends_at_hour: number;
  ends_at_minute: number;
}

export class GetCurrentClassUseCase {
  constructor(private classesRepository: ClassesRepository) {}

  async execute(): Promise<GetCurrentClassResponse> {
    const now = new Date();

    const currentDay = now.getDay();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    const currentClass = await prisma.class.findFirst({
      where: {
        weekday: currentDay,
        OR: [
          {
            AND: [
              { starts_at_hour: currentHour },
              { starts_at_minute: { lte: currentMinute } },
              { ends_at_hour: currentHour },
              { ends_at_minute: { gte: currentMinute } },
            ],
          },
          {
            AND: [
              { starts_at_hour: { lte: currentHour } },
              { ends_at_hour: { gte: currentHour } },
              {
                OR: [
                  {
                    AND: [
                      { starts_at_hour: currentHour },
                      { starts_at_minute: { lte: currentMinute } },
                    ],
                  },
                  {
                    AND: [
                      { ends_at_hour: currentHour },
                      { ends_at_minute: { gte: currentMinute } },
                    ],
                  },
                  {
                    AND: [
                      { starts_at_hour: { lte: currentHour } },
                      { ends_at_hour: { gte: currentHour } },
                      {
                        OR: [
                          { ends_at_hour: { gt: currentHour } },
                          { ends_at_minute: { gte: currentMinute } },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      include: {
        subject: {
          select: {
            title: true,
            thumbnail_url: true,
            url: true,
          },
        },
      },
    });

    if (!currentClass?.subject) {
      throw new ResourceNotFoundError();
    }

    const { title, url, thumbnail_url } = currentClass.subject;
    const { starts_at_hour, starts_at_minute, ends_at_hour, ends_at_minute } =
      currentClass;

    return {
      title,
      url,
      thumbnail_url,
      starts_at_hour,
      starts_at_minute,
      ends_at_hour,
      ends_at_minute,
    };
  }
}
