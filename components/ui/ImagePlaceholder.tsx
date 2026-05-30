import { ImageIcon } from "lucide-react";

type Props = {
  label?: string;
  className?: string;
  rounded?: boolean;
};

// Tasteful stand-in for warm photography. Swap with <Image /> when real
// assets are available.
export function ImagePlaceholder({
  label = "Photography placeholder",
  className = "",
  rounded = true,
}: Props) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${
        rounded ? "rounded-card" : ""
      } ${className}`}
      style={{
        background:
          "linear-gradient(135deg, #5b654b 0%, #515b42 45%, #474f3a 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 20%, rgba(243,240,232,0.5) 0, transparent 45%), radial-gradient(circle at 80% 75%, rgba(201,131,107,0.45) 0, transparent 50%)",
        }}
      />
      <div className="relative flex flex-col items-center gap-2 text-cream/70">
        <ImageIcon className="h-7 w-7" />
        <span className="text-xs font-medium uppercase tracking-[0.18em]">
          {label}
        </span>
      </div>
    </div>
  );
}
