import { HeartPulse, Plane } from "lucide-react";
import Link from "next/link";

export function Brand({
  compact = false,
  inverse = false,
}: {
  compact?: boolean;
  inverse?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Viki Healthy Travels home"
      className={`inline-flex w-fit items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue ${
        inverse ? "text-white" : "text-ink"
      }`}
    >
      <span className="relative grid size-10 shrink-0 place-items-center rounded-xl bg-blue text-white shadow-sm">
        <Plane size={22} strokeWidth={2} aria-hidden="true" />
        <HeartPulse
          size={12}
          strokeWidth={2.5}
          className="absolute -bottom-0.5 -right-0.5 rounded-full bg-white p-0.5 text-blue"
          aria-hidden="true"
        />
      </span>
      <span className="leading-none">
        <span
          className={`block text-[15px] font-bold tracking-[-0.035em] ${
            compact ? "text-blue" : ""
          }`}
        >
          Viki Healthy
        </span>
        <span
          className={`mt-1 block text-[10px] font-medium tracking-[0.23em] ${
            inverse ? "text-slate-300" : "text-blue"
          }`}
        >
          TRAVELS
        </span>
      </span>
    </Link>
  );
}
