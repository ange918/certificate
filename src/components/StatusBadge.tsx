import type { Check } from "../data/types";

export function StatusBadge({ check }: { check: Check }) {
  if (check.status === "vérifié") return null;
  const label = check.status === "à vérifier" ? "À vérifier" : "Partiellement vérifié";
  return (
    <span className="inline-flex min-h-8 items-center border border-signal/40 bg-white px-3 text-[14px] font-semibold text-signal">
      {label}
    </span>
  );
}
