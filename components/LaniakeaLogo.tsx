import Image from "next/image";

type Props = {
  darkText?: boolean;
  compact?: boolean;
  className?: string;
};

export function LaniakeaLogo({
  darkText = false,
  compact = false,
  className = ""
}: Props) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/laniakea-mark.svg"
        alt=""
        width={44}
        height={44}
        className="h-10 w-10 shrink-0"
        priority
      />
      {!compact && (
        <span className="leading-none">
          <span
            className={`block text-[1.02rem] font-semibold tracking-[0.22em] ${
              darkText ? "text-[#10131a]" : "text-white"
            }`}
          >
            LANIAKEA
          </span>
          <span
            className={`mt-1.5 block text-[0.48rem] font-bold uppercase tracking-[0.26em] ${
              darkText ? "text-[#5a6070]" : "text-white/[0.45]"
            }`}
          >
            A Vector Dev Company
          </span>
        </span>
      )}
    </span>
  );
}
