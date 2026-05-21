import { GRAMMAR_BOX } from "../data/workbookData";

export default function GrammarBox() {
  return (
    <div className="rounded-2xl overflow-hidden mb-6 shadow-lg" style={{ border: "2px solid #e9d5ff" }}>
      {/* Header */}
      <div className="p-4 flex items-center gap-3" style={{ background: "linear-gradient(135deg, #A855F7, #6366F1)" }}>
        <span className="text-2xl">💡</span>
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-white/80">Grammar Reference Box</p>
          <h3 className="font-black text-white text-lg">{GRAMMAR_BOX.title}</h3>
        </div>
      </div>

      <div className="p-4 grid md:grid-cols-3 gap-4 bg-white">
        {GRAMMAR_BOX.sections.map((section, i) => {
          const colours: Record<string, { bg: string; text: string; border: string }> = {
            purple: { bg: "#f5f0ff", text: "#7c3aed", border: "#c4b5fd" },
            pink: { bg: "#fff0f6", text: "#db2777", border: "#fbcfe8" },
            yellow: { bg: "#fffbeb", text: "#d97706", border: "#fde68a" },
          };
          const c = colours[section.colour] || colours.purple;

          return (
            <div
              key={i}
              className="rounded-xl p-4"
              style={{ background: c.bg, border: `1.5px solid ${c.border}` }}
            >
              <h4 className="font-black text-sm mb-2" style={{ color: c.text }}>
                {section.subtitle}
              </h4>
              {"form" in section && (
                <div
                  className="text-xs font-bold px-2 py-1 rounded-lg mb-2 inline-block"
                  style={{ background: c.border, color: c.text }}
                >
                  {section.form}
                </div>
              )}
              {"uses" in section && Array.isArray(section.uses) && (
                <ul className="text-xs text-gray-700 space-y-1 mb-2">
                  {section.uses.map((u, j) => (
                    <li key={j} className="flex gap-1.5">
                      <span style={{ color: c.text }}>▸</span>
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
              )}
              {"examples" in section && Array.isArray(section.examples) && (
                <div className="space-y-1">
                  {section.examples.map((ex, j) => (
                    <p key={j} className="text-xs italic text-gray-600 bg-white rounded-lg px-2 py-1">{ex}</p>
                  ))}
                </div>
              )}
              {"errors" in section && Array.isArray(section.errors) && (
                <ul className="text-xs space-y-1.5">
                  {section.errors.map((err, j) => (
                    <li key={j} className="text-gray-700 leading-snug">{err}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
