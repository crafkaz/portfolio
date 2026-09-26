export function riseIn(delayMs: number) {
  return {
    animation: "rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
    animationDelay: `${delayMs}ms`,
    _motionReduce: { animation: "none" },
  } as const;
}
