import { useState } from "react";
import SectionHeader from "../SectionHeader";
import ExerciseCard from "../ExerciseCard";
import { WARM_UP_QUESTIONS, FUN_FACTS } from "../../data/workbookData";

export default function SpeakingWarmUp() {
  const [factReactions, setFactReactions] = useState<Record<number, string>>({});
  const [checkedQ, setCheckedQ] = useState<Record<number, boolean>>({});

  const emojis = ["😱", "😂", "🤔", "😮", "💡", "❤️", "🙄", "🤩"];

  return (
    <section>
      <SectionHeader
        number="SECTION 1"
        title="Speaking Warm-Up 🎙️"
        subtitle="Let's get talking! Open your mind and don't be shy."
        emoji="🎙️"
        colour="coral"
        time="15 min"
      />

      {/* Exercise 1: Discussion Questions */}
      <ExerciseCard
        number={1}
        title="Warm-Up Discussion"
        instruction="Read each question and discuss with your partner. Tick the box when you've discussed it. There are no wrong answers!"
        time="5 min"
        accent="#FF8C69"
      >
        <div className="space-y-3">
          {WARM_UP_QUESTIONS.map((q, i) => (
            <div
              key={i}
              onClick={() => setCheckedQ(prev => ({ ...prev, [i]: !prev[i] }))}
              className="flex items-start gap-3 rounded-xl p-4 cursor-pointer transition-all duration-200"
              style={{
                background: checkedQ[i] ? "linear-gradient(135deg, #fff4f0, #ffe4d6)" : "#f9fafb",
                border: checkedQ[i] ? "2px solid #FF8C69" : "2px solid #e5e7eb",
              }}
            >
              <div
                className="w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5 transition-all"
                style={{
                  background: checkedQ[i] ? "#FF8C69" : "white",
                  border: "2px solid #FF8C69",
                }}
              >
                {checkedQ[i] && <span className="text-white text-xs font-black">✓</span>}
              </div>
              <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                <span className="font-black text-orange-500 mr-1">{i + 1}.</span>
                {q}
              </p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3 italic text-center">Click to mark as discussed ✓</p>
      </ExerciseCard>

      {/* Exercise 2: Fun Facts */}
      <ExerciseCard
        number={2}
        title="10 Fun Facts About Romance 💕"
        instruction="Read each fact with your partner. React with an emoji and share what you think! Do you know any other surprising facts?"
        time="10 min"
        accent="#FF8C69"
      >
        <div className="grid sm:grid-cols-2 gap-3">
          {FUN_FACTS.map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-4"
              style={{ background: "#fff4f0", border: "1.5px solid #ffd5c8" }}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{item.emoji}</span>
                <div className="flex-1">
                  <p className="text-sm text-gray-700 font-semibold leading-snug">{item.fact}</p>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    <p className="text-xs text-gray-400 font-medium mr-1">My reaction:</p>
                    {emojis.map((e) => (
                      <button
                        key={e}
                        onClick={() => setFactReactions(prev => ({ ...prev, [i]: e }))}
                        className="text-lg transition-transform hover:scale-125"
                        style={{
                          filter: factReactions[i] === e ? "none" : "grayscale(0.3)",
                          transform: factReactions[i] === e ? "scale(1.3)" : "scale(1)",
                        }}
                      >
                        {e}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ExerciseCard>
    </section>
  );
}
