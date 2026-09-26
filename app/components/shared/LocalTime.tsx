import { useSyncExternalStore } from "react";

type LocalTimeProps = {
  timeZone: string;
};

function subscribe(onTick: () => void) {
  const timer = window.setInterval(onTick, 15_000);
  return () => window.clearInterval(timer);
}

// The server snapshot is a placeholder so hydration never compares two clocks.
export function LocalTime({ timeZone }: LocalTimeProps) {
  const time = useSyncExternalStore(
    subscribe,
    () =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23",
        timeZone,
      }).format(new Date()),
    () => null,
  );

  return <time>{time ?? "--:--"}</time>;
}
