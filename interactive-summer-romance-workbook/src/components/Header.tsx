import { LESSON_META } from "../data/workbookData";

interface HeaderProps {
  totalScore: number;
  maxScore: number;
}

export default function Header({ totalScore, maxScore }: HeaderProps) {
  const pct = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;

  return (
    <header
      style={{
        background: "linear-gradient(135deg, #FF6B9D 0%, #A855F7 50%, #6366F1 100%)",
      }}
      className="relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-[-40px] right-[-40px] w-48 h-48 rounded-full opacity-20" style={{ background: "rgba(255,255,255,0.3)" }} />
      <div className="absolute bottom-[-30px] left-[-30px] w-32 h-32 rounded-full opacity-20" style={{ background: "rgba(255,255,255,0.2)" }} />
      <div className="absolute top-10 right-24 text-6xl opacity-30 select-none">💘</div>
      <div className="absolute top-4 left-1/2 text-4xl opacity-20 select-none">🌸</div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          {/* Title block */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-5xl">{LESSON_META.emoji}</span>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full text-white uppercase tracking-widest"
                    style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)" }}
                  >
                    B1 Level
                  </span>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full text-white uppercase tracking-widest"
                    style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)" }}
                  >
                    ⏱ 90 min
                  </span>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full text-white uppercase tracking-widest"
                    style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)" }}
                  >
                    Grammar · Vocab · Reading · Speaking
                  </span>
                </div>
                <h1 className="font-pacifico text-3xl md:text-4xl text-white mt-1 drop-shadow-lg">
                  {LESSON_META.title}
                </h1>
                <p className="text-white/80 text-sm font-semibold mt-0.5">{LESSON_META.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Score tracker */}
          <div
            className="rounded-2xl p-4 text-white min-w-[160px]"
            style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
          >
            <p className="text-xs font-bold uppercase tracking-wider mb-2 opacity-80">My Score</p>
            <div className="flex items-center gap-3">
              <div className="text-3xl font-black">{totalScore}</div>
              <div className="flex-1">
                <div className="text-xs opacity-70 mb-1">of {maxScore} pts</div>
                <div className="h-2 rounded-full bg-white/30 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${pct}%`, background: "rgba(255,255,255,0.9)" }}
                  />
                </div>
                <div className="text-xs mt-1 font-bold">
                  {pct >= 80 ? "🔥 Amazing!" : pct >= 60 ? "💪 Good job!" : pct > 0 ? "📚 Keep going!" : "Let's start!"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="mt-6 rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(6px)" }}>
          <p className="text-white font-bold text-sm mb-3 uppercase tracking-wider">🎯 By the end of this lesson I will be able to…</p>
          <div className="grid md:grid-cols-3 gap-3">
            {LESSON_META.objectives.map((obj, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-xl">{obj.icon}</span>
                <p className="text-white/90 text-sm leading-snug">{obj.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
