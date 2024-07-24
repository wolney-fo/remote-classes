import { env } from "@/env";
import axios from "axios";

interface ApiResponseSuccess {
  currentClass: {
    title: string;
    url: string;
    thumbnail_url: string;
    starts_at_hour: number;
    starts_at_minute: number;
    ends_at_hour: number;
    ends_at_minute: number;
  };
}

interface ApiResponseError {
  message: string;
}

interface getCurrentClassResponse {
  title: string;
  url: string;
  thumbnail_url: string;
  starts_at_hour: number;
  starts_at_minute: number;
  ends_at_hour: number;
  ends_at_minute: number;
}

export default async function getCurrentClass(): Promise<getCurrentClassResponse | null> {
  try {
    const response = await axios.get<ApiResponseSuccess | ApiResponseError>(
      "/class",
      {
        baseURL: env.API_ENDPOINT,
      }
    );

    if ("message" in response.data) {
      return null;
    }

    const {
      title,
      url,
      thumbnail_url,
      starts_at_hour,
      starts_at_minute,
      ends_at_hour,
      ends_at_minute,
    } = response.data.currentClass;

    return {
      title,
      url,
      thumbnail_url,
      starts_at_hour,
      starts_at_minute,
      ends_at_hour,
      ends_at_minute,
    } as getCurrentClassResponse;
  } catch (error) {
    return null;
  }
}
