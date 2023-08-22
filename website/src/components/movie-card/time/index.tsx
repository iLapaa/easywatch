import { ClockIcon } from "@radix-ui/react-icons";

interface ITimeProps {
  time: number;
}

export default function Time({ time }: ITimeProps) {
  return (
    <div className="flex items-center justify-center">
      <ClockIcon className="me-1" />
      <p className="mt-0.5 text-xs">{time}m</p>
    </div>
  );
}
