import { Clock } from "@phosphor-icons/react/dist/ssr";

interface ScheduleProps {
  from: string;
  to: string;
}

export default function Schedule(props: ScheduleProps) {
  return (
    <div className="flex gap-2 w-full sm:max-w-64">
      <div className="p-8 bg-neutral-950 border border-neutral-700 rounded">
        <Clock size={36} weight="bold" />
      </div>
      <div className="flex flex-col gap-2 w-full min-w-36 justify-between">
        <div className="flex items-center text-2xl bg-neutral-950 border border-neutral-700 rounded w-full h-full px-4 py-1">
          FROM {props.from}
        </div>
        <div className="flex items-center text-2xl bg-neutral-950 border border-neutral-700 rounded w-full h-full px-4 py-1">
          TO {props.to}
        </div>
      </div>
    </div>
  );
}
