import { ClassesRepository } from "../repositories/classes-repository";
import { prisma } from "../lib/prisma";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

interface GetCurrentClassResponse {
  title: string;
  url: string;
  thumbnail_url: string;
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
        starts_at_hour: {
          lte: currentHour,
        },
        ends_at_hour: {
          gte: currentHour,
        },
        OR: [
          {
            starts_at_hour: {
              lt: currentHour,
            },
            ends_at_hour: {
              gt: currentHour,
            },
          },
          {
            starts_at_hour: {
              equals: currentHour,
            },
            starts_at_minute: {
              lte: currentMinute,
            },
          },
          {
            ends_at_hour: {
              equals: currentHour,
            },
            ends_at_minute: {
              gte: currentMinute,
            },
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

    return {
      title,
      url,
      thumbnail_url,
    };
  }
}
