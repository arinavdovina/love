interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  emoji: string;
  colour: "pink" | "purple" | "indigo" | "mint" | "yellow" | "coral";
  time?: string;
}

const COLOUR_MAP = {
  pink: { bg: "#FF6B9D", light: "#fff0f6", border: "#ffd6e7" },
  purple: { bg: "#A855F7", light: "#f5f0ff", border: "#e9d5ff" },
  indigo: { bg: "#6366F1", light: "#eef2ff", border: "#c7d2fe" },
  mint: { bg: "#34D399", light: "#ecfdf5", border: "#a7f3d0" },
  yellow: { bg: "#FBBF24", light: "#fffbeb", border: "#fde68a" },
  coral: { bg: "#FF8C69", light: "#fff4f0", border: "#ffd5c8" },
};

export default function SectionHeader({ number, title, subtitle, emoji, colour, time }: SectionHeaderProps) {
  const c = COLOUR_MAP[colour];
  return (
    <div
      className="rounded-2xl p-5 mb-6 flex items-center gap-4"
      style={{ background: c.light, border: `2px solid ${c.border}` }}
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 font-black text-white shadow-lg"
        style={{ background: c.bg }}
      >
        {emoji}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="text-xs font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full text-white"
            style={{ background: c.bg }}
          >
            {number}
          </span>
          {time && (
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full text-gray-500" style={{ background: "#f3f4f6" }}>
              ⏱ {time}
            </span>
          )}
        </div>
        <h2 className="text-xl font-black mt-1" style={{ color: c.bg }}>
          {title}
        </h2>
        {subtitle && <p className="text-sm text-gray-500 mt-0.5 font-medium">{subtitle}</p>}
      </div>
    </div>
  );
}
