import type { ReactNode } from "react";
import { Check } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  bullets?: ReadonlyArray<string>;
  icon?: ReactNode; 
  bodyHeight?: string;
  className?: string;
};

export default function FeatureCard({
  title,
  description,
  bullets = [],
  icon,
  bodyHeight = "h-[240px]",
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={[
        "relative overflow-hidden flex flex-col items-center justify-center p-6 text-center",
        "bg-white shadow-md rounded-2xl transition-all duration-300",
        "hover:shadow-xl hover:scale-[1.02]",
        "before:absolute before:inset-0 before:bg-gradient-to-t before:from-gray-800 before:to-gray-600",
        "before:opacity-0 hover:before:opacity-90 before:transition-opacity before:duration-300",
        "cursor-pointer group",
        className,
      ].join(" ")}
      tabIndex={0}
      aria-label={title}
    >
      {/* Default content */}
      <div
        className={`relative z-10 group-hover:hidden flex flex-col items-center justify-center ${bodyHeight}`}
      >
        <h3 className="flex items-center gap-2 text-2xl font-semibold mb-3 text-gray-900">
          {icon && <span className="text-gray-700">{icon}</span>}
          {title}
        </h3>
        <p className="tracking-wide leading-relaxed text-gray-600 text-sm">
          {description}
        </p>
      </div>

      {/* Hover content */}
      <div
        className={`relative z-10 hidden group-hover:flex flex-col items-start justify-center gap-3 ${bodyHeight}`}
      >
        {bullets.map((b, i) => (
          <div key={i} className="flex items-center gap-2">
            <Check className="text-white w-5 h-5" />
            <p className="text-white font-medium tracking-wide">{b}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
