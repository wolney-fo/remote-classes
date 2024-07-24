import { CalendarBlank } from "@phosphor-icons/react/dist/ssr";
import Button from "./components/Button";
import Logo from "./components/Logo";
import Thumbnail from "./components/Thumbnail";
import Schedule from "./components/Schedule";
import { dayjs } from "@/lib/dayjs";
import getCurrentClass from "@/api/get-current-class";

export default async function Home() {
  const currentClass = await getCurrentClass();
  const now = new Date();

  return (
    <main className="flex items-center justify-center py-12 sm:py-0 sm:h-screen text-neutral-400">
      <div className="flex flex-col gap-7 w-11/12 max-w-[900px]">
        <div className="flex flex-col xs:flex-row items-center justify-between gap-4">
          <Logo />
          <div className="flex gap-2 items-center text-2xl">
            <span>{dayjs(now).format("dddd, MMMM D")}</span>
            <CalendarBlank size={24} weight="bold" />
          </div>
        </div>
        <Thumbnail
          thumbnailUrl={currentClass?.thumbnail_url}
          subject={currentClass?.title}
        />
        {currentClass && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-full">
            <Schedule
              from={dayjs()
                .hour(currentClass.starts_at_hour)
                .minute(currentClass.starts_at_minute)
                .format("LT")}
              to={dayjs()
                .hour(currentClass.ends_at_hour)
                .minute(currentClass.ends_at_minute)
                .format("LT")}
            />
            <Button href={currentClass.url}>Go to class</Button>
            <p className="text-md text-center sm:text-right">
              You will need permission to access the meeting link and watch the
              class
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
