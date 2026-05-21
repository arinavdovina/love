import { useState } from "react";
import SectionHeader from "../SectionHeader";
import ExerciseCard from "../ExerciseCard";
import { READING_TEXT, TRUE_FALSE_NG, VOCAB_IN_CONTEXT, DIALOGUE } from "../../data/workbookData";

interface Props {
  onScore: (pts: number) => void;
}

export default function ReadingSection({ onScore }: Props) {
  // Pre-reading
  const [predictions, setPredictions] = useState<string[]>(["", "", ""]);
  const [predictionDone, setPredictionDone] = useState(false);

  // TF/NG
  const [tfAnswers, setTfAnswers] = useState<Record<number, string>>({});
  const [tfLines, setTfLines] = useState<Record<number, string>>({});
  const [tfChecked, setTfChecked] = useState(false);
  const [tfScore, setTfScore] = useState(0);

  // Vocab in context
  const [vocabAnswers, setVocabAnswers] = useState<Record<number, string>>({});
  const [vocabChecked, setVocabChecked] = useState(false);

  // Dialogue analysis
  const [ppAnswers, setPpAnswers] = useState<Record<number, string>>({});
  const [ppChecked, setPpChecked] = useState(false);

  const tfOptions = ["TRUE", "FALSE", "NOT GIVEN"];
  const tfColours: Record<string, { bg: string; border: string; text: string }> = {
    TRUE: { bg: "#ecfdf5", border: "#10b981", text: "#065f46" },
    FALSE: { bg: "#fee2e2", border: "#ef4444", text: "#991b1b" },
    "NOT GIVEN": { bg: "#fefce8", border: "#eab308", text: "#713f12" },
  };

  const checkTF = () => {
    let sc = 0;
    TRUE_FALSE_NG.forEach((item, i) => {
      if (tfAnswers[i] === item.answer) sc++;
    });
    setTfScore(sc);
    setTfChecked(true);
    onScore(sc);
  };

  const checkVocab = () => {
    setVocabChecked(true);
    onScore(3);
  };

  return (
    <section>
      <SectionHeader
        number="SECTION 3"
        title="Reading 📖"
        subtitle="A teen blog story — read, understand, and analyse!"
        emoji="📖"
        colour="indigo"
        time="25 min"
      />

      {/* Exercise 8: Pre-reading prediction */}
      <ExerciseCard
        number={8}
        title="Pre-Reading: Predict the Content 🔮"
        instruction="Before reading, look at the title, subheading, and three key words. Write what you think the text will be about."
        time="2 min"
        accent="#6366F1"
      >
        <div className="rounded-xl p-4 mb-4" style={{ background: "#eef2ff", border: "1.5px solid #c7d2fe" }}>
          <p className="font-black text-indigo-700 text-base">Title: <span className="italic">"A Summer to Remember"</span></p>
          <p className="font-semibold text-indigo-600 text-sm">Source: <em>SummerDiaries.net</em> — teen lifestyle blog</p>
          <div className="flex gap-2 mt-2 flex-wrap">
            {["dating app", "street food market", "green flags"].map((w) => (
              <span key={w} className="px-3 py-1 rounded-full text-xs font-black" style={{ background: "#c7d2fe", color: "#3730a3" }}>
                🔑 {w}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          {["I think this text is about…", "I predict that [character name] will…", "One thing I expect to happen is…"].map((prompt, i) => (
            <div key={i}>
              <p className="text-xs font-bold text-gray-500 mb-1">{prompt}</p>
              <input
                type="text"
                value={predictions[i]}
                onChange={(e) => {
                  const np = [...predictions];
                  np[i] = e.target.value;
                  setPredictions(np);
                }}
                placeholder="Write your prediction…"
                className="w-full rounded-xl px-4 py-2 text-sm border-2 outline-none transition-all"
                style={{ borderColor: "#c7d2fe", background: "white" }}
              />
            </div>
          ))}
        </div>
        <button
          onClick={() => setPredictionDone(true)}
          className="mt-3 px-4 py-2 rounded-xl text-sm font-bold text-white transition-all hover:scale-105"
          style={{ background: "#6366F1" }}
        >
          {predictionDone ? "✓ Saved — now read the text!" : "Save Predictions"}
        </button>
      </ExerciseCard>

      {/* Exercise 9: Reading text */}
      <ExerciseCard
        number={9}
        title="Read the Blog Post 📰"
        instruction="Read the text carefully. You have 5 minutes. Notice the highlighted words — you will need them for Exercise 11."
        time="5 min"
        accent="#6366F1"
      >
        <div
          className="rounded-xl p-5 text-sm leading-relaxed text-gray-700"
          style={{ background: "#fafafa", border: "1.5px solid #e5e7eb" }}
        >
          {/* Blog header */}
          <div
            className="rounded-xl p-3 mb-4 flex items-center gap-3"
            style={{ background: "linear-gradient(135deg, #eef2ff, #f5f0ff)", border: "1.5px solid #c7d2fe" }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #6366F1, #A855F7)" }}
            >
              📝
            </div>
            <div>
              <p className="font-black text-indigo-700">SummerDiaries.net</p>
              <p className="text-xs text-gray-500">Teen Lifestyle Blog · Posted July 2024</p>
            </div>
            <div className="ml-auto flex gap-1 text-lg">❤️ 847 &nbsp; 💬 124</div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: READING_TEXT }}
            className="reading-text"
          />
        </div>
      </ExerciseCard>

      {/* Exercise 10: True/False/Not Given */}
      <ExerciseCard
        number={10}
        title="True / False / Not Given ✅❌❓"
        instruction="Read each statement. Circle TRUE, FALSE, or NOT GIVEN. Then write the paragraph number as evidence."
        note="Remember: 'Not Given' means the text doesn't mention this information — neither confirms nor denies it."
        time="7 min"
        accent="#6366F1"
        score={{ earned: tfScore, max: TRUE_FALSE_NG.length }}
      >
        <div className="space-y-3">
          {TRUE_FALSE_NG.map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-4"
              style={{
                background: tfChecked
                  ? tfAnswers[i] === item.answer ? "#ecfdf5" : "#fee2e2"
                  : "#f9fafb",
                border: tfChecked
                  ? tfAnswers[i] === item.answer ? "1.5px solid #10b981" : "1.5px solid #ef4444"
                  : "1.5px solid #e5e7eb",
              }}
            >
              <p className="font-semibold text-gray-800 text-sm mb-2">
                <span className="font-black text-indigo-600 mr-1">{i + 1}.</span>
                {item.statement}
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {tfOptions.map((opt) => {
                  const c = tfColours[opt];
                  const isSelected = tfAnswers[i] === opt;
                  const isCorrect = opt === item.answer;
                  return (
                    <button
                      key={opt}
                      onClick={() => !tfChecked && setTfAnswers(prev => ({ ...prev, [i]: opt }))}
                      disabled={tfChecked}
                      className="px-3 py-1 rounded-lg text-xs font-black transition-all"
                      style={{
                        background: tfChecked && isCorrect ? c.bg : isSelected ? c.bg : "white",
                        border: `2px solid ${isSelected || (tfChecked && isCorrect) ? c.border : "#e5e7eb"}`,
                        color: isSelected || (tfChecked && isCorrect) ? c.text : "#374151",
                      }}
                    >
                      {opt} {tfChecked && isCorrect && "✓"}
                    </button>
                  );
                })}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 font-medium">📍 Evidence (paragraph):</span>
                <input
                  type="text"
                  placeholder="Para ___"
                  value={tfLines[i] || ""}
                  onChange={(e) => setTfLines(prev => ({ ...prev, [i]: e.target.value }))}
                  disabled={tfChecked}
                  className="px-2 py-0.5 rounded-lg text-xs border-2 outline-none w-24"
                  style={{ borderColor: "#c7d2fe" }}
                />
              </div>
              {tfChecked && (
                <p className="text-xs mt-1 italic" style={{ color: tfAnswers[i] === item.answer ? "#065f46" : "#991b1b" }}>
                  {tfAnswers[i] === item.answer ? "✓ Correct!" : `✗ Answer: ${item.answer}`} — {item.line}
                </p>
              )}
            </div>
          ))}
        </div>
        {!tfChecked ? (
          <button
            onClick={checkTF}
            className="mt-4 px-6 py-2.5 rounded-xl text-white font-bold text-sm hover:scale-105 transition-all"
            style={{ background: "linear-gradient(135deg, #6366F1, #A855F7)" }}
          >
            Check Answers ✓
          </button>
        ) : (
          <div className="mt-4 rounded-xl p-3 flex items-center gap-3" style={{ background: "#eef2ff" }}>
            <span className="text-2xl">🎯</span>
            <p className="font-bold text-indigo-700">Score: {tfScore}/{TRUE_FALSE_NG.length} — {tfScore >= 7 ? "Excellent! 🔥" : tfScore >= 5 ? "Well done! 💪" : "Keep reading carefully! 📖"}</p>
          </div>
        )}
      </ExerciseCard>

      {/* Exercise 11: Vocabulary in context */}
      <ExerciseCard
        number={11}
        title="Vocabulary from Context 🔍"
        instruction="Look at the four highlighted words in the reading text. Use the context to guess what each word means. Write your own definition."
        time="4 min"
        accent="#6366F1"
      >
        <div className="space-y-4">
          {VOCAB_IN_CONTEXT.map((item, i) => (
            <div key={i} className="rounded-xl p-4" style={{ background: "#f9fafb", border: "1.5px solid #e5e7eb" }}>
              <p className="text-xs font-black text-indigo-600 uppercase mb-1">Word {i + 1}:</p>
              <p className="font-black text-gray-800 mb-1">
                "<mark>{item.word}</mark>"
              </p>
              <p className="text-xs text-gray-500 italic mb-2">Context: "…{item.context}…"</p>
              <textarea
                value={vocabAnswers[i] || ""}
                onChange={(e) => setVocabAnswers(prev => ({ ...prev, [i]: e.target.value }))}
                placeholder="I think this word means…"
                disabled={vocabChecked}
                rows={2}
                className="w-full rounded-xl px-3 py-2 text-sm border-2 outline-none transition-all resize-none"
                style={{ borderColor: vocabChecked ? "#a7f3d0" : "#c7d2fe", background: vocabChecked ? "#ecfdf5" : "white" }}
              />
              {vocabChecked && (
                <p className="text-xs text-green-600 mt-1 font-semibold">
                  💡 Definition: {item.meaning}
                </p>
              )}
            </div>
          ))}
        </div>
        {!vocabChecked ? (
          <button
            onClick={checkVocab}
            className="mt-4 px-6 py-2.5 rounded-xl text-white font-bold text-sm hover:scale-105 transition-all"
            style={{ background: "linear-gradient(135deg, #6366F1, #A855F7)" }}
          >
            Show Definitions ✓
          </button>
        ) : (
          <p className="text-xs text-gray-500 mt-2 italic">✅ Compare your definitions! The more similar, the better your reading skills.</p>
        )}
      </ExerciseCard>

      {/* Exercise 12: Dialogue */}
      <ExerciseCard
        number={12}
        title="Read the Dialogue 💬"
        instruction="Read the DM conversation between Leo and Maya. Underline at least 3 examples of Present Perfect or Past Simple, then answer the analysis questions below."
        time="7 min"
        accent="#6366F1"
      >
        {/* Chat interface */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: "#f3e8ff", border: "1.5px solid #e9d5ff" }}
        >
          {/* Chat header */}
          <div
            className="p-3 flex items-center gap-3"
            style={{ background: "linear-gradient(135deg, #A855F7, #6366F1)" }}
          >
            <div className="w-9 h-9 rounded-full bg-white/30 flex items-center justify-center text-lg">😊</div>
            <div>
              <p className="text-white font-black text-sm">Leo & Maya</p>
              <p className="text-white/70 text-xs">iMessage · Online</p>
            </div>
            <div className="ml-auto text-white/60 text-xs">🔒 Private</div>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
            {DIALOGUE.exchanges.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.speaker === "Leo" ? "justify-start" : "justify-end"}`}
              >
                <div className={msg.speaker === "Leo" ? "chat-bubble-left" : "chat-bubble-right"}>
                  <p className="text-xs font-black mb-0.5 opacity-70">{msg.speaker}</p>
                  <p className="text-sm font-medium">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Analysis questions */}
        <div className="mt-4 space-y-3">
          {[
            "Find TWO examples of Present Perfect in the dialogue. Write them here:",
            "Find ONE example of Past Simple. Why is Past Simple used there?",
            "Leo says 'I've never been to that market before.' What does 'never' tell us about his experience?",
          ].map((q, i) => (
            <div key={i}>
              <p className="text-sm font-semibold text-gray-700 mb-1">{String.fromCharCode(65 + i)}. {q}</p>
              <textarea
                value={ppAnswers[i] || ""}
                onChange={(e) => setPpAnswers(prev => ({ ...prev, [i]: e.target.value }))}
                placeholder="Your answer…"
                disabled={ppChecked}
                rows={2}
                className="w-full rounded-xl px-3 py-2 text-sm border-2 outline-none resize-none transition-all"
                style={{ borderColor: ppChecked ? "#a7f3d0" : "#c7d2fe", background: ppChecked ? "#ecfdf5" : "white" }}
              />
            </div>
          ))}
        </div>
        {!ppChecked ? (
          <button
            onClick={() => { setPpChecked(true); onScore(3); }}
            className="mt-3 px-6 py-2.5 rounded-xl text-white font-bold text-sm hover:scale-105 transition-all"
            style={{ background: "linear-gradient(135deg, #6366F1, #A855F7)" }}
          >
            Show Model Answers
          </button>
        ) : (
          <div className="mt-3 rounded-xl p-3 space-y-2 text-xs" style={{ background: "#ecfdf5", border: "1.5px solid #a7f3d0" }}>
            <p className="font-bold text-green-700">💡 Model Answers:</p>
            <p><strong>A.</strong> "I've never been to that market before" / "I've been there a few times" / "I already checked"</p>
            <p><strong>B.</strong> "I had such a good time last night" — Past Simple because 'last night' is a finished, specific time.</p>
            <p><strong>C.</strong> 'Never' means he has zero experience of this — he has not done it at any point in his life before now.</p>
          </div>
        )}
      </ExerciseCard>

      {/* Post-reading opinion */}
      <ExerciseCard
        number={13}
        title="Post-Reading Opinion 💭"
        instruction="Answer this question with your own opinion. Use at least 2 sentences."
        time="2 min"
        accent="#6366F1"
      >
        <div
          className="rounded-xl p-4 mb-3"
          style={{ background: "linear-gradient(135deg, #eef2ff, #f5f0ff)", border: "1.5px solid #c7d2fe" }}
        >
          <p className="font-black text-indigo-700">🤔 Do you think Maya and Leo's story sounds realistic? What would YOU do differently in their situation?</p>
        </div>
        <textarea
          placeholder="I think… / In my opinion… / Personally, I would…"
          rows={4}
          className="w-full rounded-xl px-4 py-3 text-sm border-2 outline-none resize-none"
          style={{ borderColor: "#c7d2fe", background: "white" }}
        />
        <p className="text-xs text-gray-400 mt-1">💡 Try to use: <em>I think… / I believe… / In my opinion… / If I were Maya, I would…</em></p>
      </ExerciseCard>
    </section>
  );
}
