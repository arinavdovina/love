interface ExerciseCardProps {
  number: number;
  title: string;
  instruction: string;
  note?: string;
  time?: string;
  accent?: string;
  children: React.ReactNode;
  score?: { earned: number; max: number };
}

export default function ExerciseCard({
  number,
  title,
  instruction,
  note,
  time,
  accent = "#A855F7",
  children,
  score,
}: ExerciseCardProps) {
  return (
    <div className="section-card mb-6">
      {/* Header row */}
      <div className="flex items-start gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm flex-shrink-0 shadow"
          style={{ background: accent }}
        >
          {number}
        </div>
        <div className="flex-1">
          <div className="flex items-center flex-wrap gap-2">
            <h3 className="font-black text-gray-800 text-base">{title}</h3>
            {time && (
              <span className="text-xs px-2 py-0.5 rounded-full font-bold text-gray-500 bg-gray-100">
                ⏱ {time}
              </span>
            )}
            {score && score.max > 0 && (
              <span
                className="text-xs px-2 py-0.5 rounded-full font-bold text-white ml-auto"
                style={{ background: accent }}
              >
                {score.earned}/{score.max} pts
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{instruction}</p>
          {note && (
            <p className="text-xs text-gray-400 mt-1 italic">{note}</p>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4" />

      {children}
    </div>
  );
}
