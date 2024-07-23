import { CalendarBlank } from "@phosphor-icons/react/dist/ssr";
import Button from "./components/Button";
import Logo from "./components/Logo";
import Thumbnail from "./components/Thumbnail";
import Schedule from "./components/Schedule";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function Home() {
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
          thumbnailUrl="https://images.unsplash.com/photo-1708162665956-98da095550ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          subject="Global Geography"
        />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-full">
          <Schedule from="08:00" to="08:50" />
          <Button href="https://google.com/" target="_blank">
            Go to class
          </Button>
          <p className="text-md text-center sm:text-right">
            You will need permission to access the meeting link and watch the
            class
          </p>
        </div>
      </div>
    </main>
  );
}
