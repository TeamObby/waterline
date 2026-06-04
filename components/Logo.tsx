import Image from "next/image";

export function Logo({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "md" | "lg";
}) {
  const mark = size === "lg" ? "h-12" : "h-10";
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/waterline-logo-white.png"
        alt="WaterLine logo"
        width={1691}
        height={930}
        priority={size === "md"}
        className={`${mark} w-auto`}
      />
    </span>
  );
}
