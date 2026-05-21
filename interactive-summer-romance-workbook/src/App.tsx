import { useState } from "react";
import Header from "./components/Header";
import SpeakingWarmUp from "./components/sections/SpeakingWarmUp";
import VocabularySection from "./components/sections/VocabularySection";
import ReadingSection from "./components/sections/ReadingSection";
import GrammarSection from "./components/sections/GrammarSection";
import SpeakingSection from "./components/sections/SpeakingSection";

const SECTIONS = [
  { id: "warmup", label: "Warm-Up 🎙️", emoji: "🎙️" },
  { id: "vocab", label: "Vocabulary 💬", emoji: "💬" },
  { id: "reading", label: "Reading 📖", emoji: "📖" },
  { id: "grammar", label: "Grammar 📝", emoji: "📝" },
  { id: "speaking", label: "Speaking 🎤", emoji: "🎤" },
];

export default function App() {
  const [activeSection, setActiveSection] = useState("warmup");
  const [totalScore, setTotalScore] = useState(0);

  const addScore = (pts: number) => {
    setTotalScore(prev => prev + pts);
  };

  const maxScore = 120; // approximate total points

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", background: "#FFF5F8", minHeight: "100vh" }}>
      <Header totalScore={totalScore} maxScore={maxScore} />

      {/* Navigation tabs */}
      <div
        className="sticky top-0 z-30"
        style={{ background: "rgba(255,245,248,0.95)", backdropFilter: "blur(10px)", borderBottom: "2px solid rgba(255,107,157,0.15)" }}
      >
        <div className="max-w-5xl mx-auto px-4 py-2 flex gap-1 overflow-x-auto scrollbar-hide">
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveSection(sec.id)}
                className="flex-shrink-0 px-4 py-2 rounded-xl font-bold text-sm transition-all duration-200 whitespace-nowrap"
                style={{
                  background: isActive
                    ? "linear-gradient(135deg, #FF6B9D, #A855F7)"
                    : "rgba(168,85,247,0.08)",
                  color: isActive ? "white" : "#A855F7",
                  boxShadow: isActive ? "0 4px 12px rgba(255,107,157,0.3)" : "none",
                  transform: isActive ? "translateY(-1px)" : "translateY(0)",
                }}
              >
                {sec.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Progress indicator */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex gap-1.5">
            {SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setActiveSection(sec.id)}
                className="w-3 h-3 rounded-full transition-all duration-200"
                style={{
                  background: activeSection === sec.id
                    ? "linear-gradient(135deg, #FF6B9D, #A855F7)"
                    : "rgba(168,85,247,0.2)",
                  transform: activeSection === sec.id ? "scale(1.4)" : "scale(1)",
                }}
                title={sec.label}
              />
            ))}
          </div>
          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
            {SECTIONS.find(s => s.id === activeSection)?.label}
          </p>
        </div>

        {/* Section content */}
        <div className="slide-up" key={activeSection}>
          {activeSection === "warmup" && <SpeakingWarmUp />}
          {activeSection === "vocab" && <VocabularySection onScore={addScore} />}
          {activeSection === "reading" && <ReadingSection onScore={addScore} />}
          {activeSection === "grammar" && <GrammarSection onScore={addScore} />}
          {activeSection === "speaking" && <SpeakingSection onScore={addScore} />}
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-between mt-8 pt-6" style={{ borderTop: "2px solid rgba(168,85,247,0.1)" }}>
          <button
            onClick={() => {
              const idx = SECTIONS.findIndex(s => s.id === activeSection);
              if (idx > 0) setActiveSection(SECTIONS[idx - 1].id);
            }}
            disabled={activeSection === SECTIONS[0].id}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all disabled:opacity-30"
            style={{
              background: "rgba(168,85,247,0.1)",
              color: "#A855F7",
            }}
          >
            ← Previous Section
          </button>

          <button
            onClick={() => {
              const idx = SECTIONS.findIndex(s => s.id === activeSection);
              if (idx < SECTIONS.length - 1) setActiveSection(SECTIONS[idx + 1].id);
            }}
            disabled={activeSection === SECTIONS[SECTIONS.length - 1].id}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all disabled:opacity-30 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #FF6B9D, #A855F7)",
            }}
          >
            Next Section →
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-12 pb-8 text-center">
          <div
            className="rounded-2xl p-5 inline-block"
            style={{ background: "linear-gradient(135deg, #fff0f6, #f5f0ff)", border: "1.5px solid #ffd6e7" }}
          >
            <p className="font-black text-pink-500 mb-1">💘 Summer Romance & Dating</p>
            <p className="text-xs text-gray-500">B1 English Workbook · CEFR Aligned · PPP Methodology</p>
            <p className="text-xs text-gray-400 mt-1">Grammar · Vocabulary · Reading · Speaking · 90 minutes</p>
            <div className="flex justify-center gap-4 mt-3 text-xs font-bold text-purple-400">
              <span>Cambridge CELTA/DELTA Standards</span>
              <span>·</span>
              <span>Auto-checked exercises</span>
              <span>·</span>
              <span>Interactive Workbook</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
