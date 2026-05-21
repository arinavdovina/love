import { useState } from "react";
import SectionHeader from "../SectionHeader";
import ExerciseCard from "../ExerciseCard";
import GrammarBox from "../GrammarBox";
import {
  GUIDED_DISCOVERY_TEXT,
  CCQ_QUESTIONS,
  GRAMMAR_GAPFILL,
  BRACKETS_EXERCISE,
  ABCD_EXERCISE,
  SLASH_EXERCISE,
  ERROR_CORRECTION,
  REWRITE_SENTENCES,
  MATCHING_HALVES,
} from "../../data/workbookData";

interface Props {
  onScore: (pts: number) => void;
}

export default function GrammarSection({ onScore }: Props) {
  // CCQ
  const [ccqAnswers, setCcqAnswers] = useState<Record<number, string>>({});
  const [ccqChecked, setCcqChecked] = useState(false);
  const [ccqScore, setCcqScore] = useState(0);

  const correctCCQ = ["No", "Yes", "Yes"];

  const checkCCQ = () => {
    let sc = 0;
    CCQ_QUESTIONS.forEach((_, i) => {
      if (ccqAnswers[i] === correctCCQ[i]) sc++;
    });
    setCcqScore(sc);
    setCcqChecked(true);
    onScore(sc);
  };

  // Gap fill
  const [gapAnswers, setGapAnswers] = useState<Record<number, string>>({});
  const [gapChecked, setGapChecked] = useState(false);
  const [gapScore, setGapScore] = useState(0);

  const checkGap = () => {
    let sc = 0;
    GRAMMAR_GAPFILL.sentences.forEach((s, i) => {
      if ((gapAnswers[i] || "").trim().toLowerCase() === s.answer.toLowerCase()) sc++;
    });
    setGapScore(sc);
    setGapChecked(true);
    onScore(sc);
  };

  // Brackets
  const [bracketsAnswers, setBracketsAnswers] = useState<Record<number, string>>({});
  const [bracketsChecked, setBracketsChecked] = useState(false);
  const [bracketsScore, setBracketsScore] = useState(0);

  const checkBrackets = () => {
    let sc = 0;
    BRACKETS_EXERCISE.forEach((item, i) => {
      const userAns = (bracketsAnswers[i] || "").trim().toLowerCase();
      if (item.answers.some(a => userAns.includes(a.toLowerCase()))) sc++;
    });
    setBracketsScore(sc);
    setBracketsChecked(true);
    onScore(sc);
  };

  // ABCD
  const [abcdAnswers, setAbcdAnswers] = useState<Record<string, string>>({});
  const [abcdChecked, setAbcdChecked] = useState(false);
  const [abcdScore, setAbcdScore] = useState(0);

  const checkAbcd = () => {
    let sc = 0;
    let total = 0;
    ABCD_EXERCISE.forEach((q, qi) => {
      q.gaps.forEach((gap, gi) => {
        const key = `${qi}-${gi}`;
        total++;
        if (abcdAnswers[key] === gap.answer) sc++;
      });
    });
    setAbcdScore(sc);
    setAbcdChecked(true);
    onScore(sc);
  };

  // Slash
  const [slashAnswers, setSlashAnswers] = useState<Record<number, Record<number, string>>>({});
  const [slashChecked, setSlashChecked] = useState(false);
  const [slashScore, setSlashScore] = useState(0);

  const checkSlash = () => {
    let sc = 0;
    SLASH_EXERCISE.forEach((item, i) => {
      item.answers.forEach((ans, j) => {
        if ((slashAnswers[i]?.[j] || "").toLowerCase() === ans.toLowerCase()) sc++;
      });
    });
    setSlashScore(sc);
    setSlashChecked(true);
    onScore(sc);
  };

  // Error correction
  const [errAnswers, setErrAnswers] = useState<Record<number, string>>({});
  const [errChecked, setErrChecked] = useState(false);
  const [errScore, setErrScore] = useState(0);

  const checkErr = () => {
    let sc = 0;
    ERROR_CORRECTION.forEach((item, i) => {
      const userAns = (errAnswers[i] || "").trim().toLowerCase();
      if (userAns === item.correction.toLowerCase() || userAns.includes(item.correction.toLowerCase().split(" ")[0])) sc++;
    });
    setErrScore(sc);
    setErrChecked(true);
    onScore(sc);
  };

  // Rewrite
  const [rewriteAnswers, setRewriteAnswers] = useState<Record<number, string>>({});
  const [rewriteChecked, setRewriteChecked] = useState(false);

  const checkRewrite = () => {
    setRewriteChecked(true);
    onScore(3);
  };

  // Matching halves
  const [matchSelections, setMatchSelections] = useState<Record<number, number | null>>({});
  const [matchChecked, setMatchChecked] = useState(false);
  const [matchScore, setMatchScore] = useState(0);

  const checkMatch = () => {
    let sc = 0;
    MATCHING_HALVES.left.forEach((_, i) => {
      if (matchSelections[i] === MATCHING_HALVES.answers[i]) sc++;
    });
    setMatchScore(sc);
    setMatchChecked(true);
    onScore(sc);
  };

  return (
    <section>
      <SectionHeader
        number="SECTION 4"
        title="Grammar 📝"
        subtitle="Present Perfect vs Past Simple — master the difference!"
        emoji="📝"
        colour="purple"
        time="30 min"
      />

      {/* Exercise 14: Guided Discovery */}
      <ExerciseCard
        number={14}
        title="Guided Discovery 🔍"
        instruction="Look at these sentences from the blog and the chat. Think about the rules before reading the Grammar Box. Answer the CCQ questions below."
        time="3 min"
        accent="#A855F7"
      >
        <div
          className="rounded-xl p-4 mb-4 whitespace-pre-line text-sm font-medium text-gray-700 leading-loose"
          style={{ background: "#fafafa", border: "1.5px solid #e9d5ff", fontFamily: "monospace" }}
        >
          {GUIDED_DISCOVERY_TEXT}
        </div>

        <p className="font-black text-purple-600 mb-3 text-sm">💡 CCQ — Concept Check Questions:</p>
        <div className="space-y-3">
          {CCQ_QUESTIONS.map((q, i) => (
            <div key={i} className="rounded-xl p-4" style={{ background: "#f9fafb", border: "1.5px solid #e9d5ff" }}>
              <p className="font-semibold text-gray-700 text-sm mb-2">{i + 1}. {q.q}</p>
              <div className="flex gap-3">
                {["Yes", "No"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => !ccqChecked && setCcqAnswers(prev => ({ ...prev, [i]: opt }))}
                    disabled={ccqChecked}
                    className="px-5 py-1.5 rounded-lg font-black text-sm transition-all"
                    style={{
                      background: ccqChecked
                        ? opt === correctCCQ[i] ? "#d1fae5" : ccqAnswers[i] === opt ? "#fee2e2" : "#f3f4f6"
                        : ccqAnswers[i] === opt ? "#A855F7" : "#f3f4f6",
                      color: ccqChecked
                        ? opt === correctCCQ[i] ? "#065f46" : ccqAnswers[i] === opt ? "#991b1b" : "#374151"
                        : ccqAnswers[i] === opt ? "white" : "#374151",
                      border: `2px solid ${ccqAnswers[i] === opt ? "#A855F7" : "transparent"}`,
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {ccqChecked && (
                <p className="text-xs text-gray-500 mt-2 italic">💡 {q.hint}</p>
              )}
            </div>
          ))}
        </div>
        {!ccqChecked ? (
          <button
            onClick={checkCCQ}
            className="mt-4 px-6 py-2.5 rounded-xl text-white font-bold text-sm hover:scale-105 transition-all"
            style={{ background: "linear-gradient(135deg, #A855F7, #6366F1)" }}
          >
            Check Answers ✓
          </button>
        ) : (
          <div className="mt-3 rounded-xl p-3 flex items-center gap-3" style={{ background: "#f5f0ff" }}>
            <span className="text-xl">🎯</span>
            <p className="font-bold text-purple-700">Score: {ccqScore}/3</p>
          </div>
        )}
      </ExerciseCard>

      {/* Grammar Reference Box */}
      <GrammarBox />

      {/* Exercise 15: Gap fill */}
      <ExerciseCard
        number={15}
        title="Fill in the Gap — Choose from the Word List 📋"
        instruction="Fill each gap with the correct verb form from the box below. Each word is used once only."
        time="5 min"
        accent="#A855F7"
        score={{ earned: gapScore, max: GRAMMAR_GAPFILL.sentences.length }}
      >
        {/* Word box */}
        <div className="rounded-xl p-3 mb-4 flex flex-wrap gap-2" style={{ background: "#f5f0ff", border: "1.5px solid #e9d5ff" }}>
          <p className="w-full text-xs font-black text-purple-600 uppercase mb-1">Word List:</p>
          {GRAMMAR_GAPFILL.wordList.map((w) => (
            <span
              key={w}
              className="px-3 py-1 rounded-full text-xs font-black"
              style={{ background: "#e9d5ff", color: "#7c3aed" }}
            >
              {w}
            </span>
          ))}
        </div>

        <div className="space-y-3">
          {GRAMMAR_GAPFILL.sentences.map((s, i) => {
            const parts = s.text.split("___");
            const isCorrect = (gapAnswers[i] || "").trim().toLowerCase() === s.answer.toLowerCase();
            return (
              <div key={i} className="flex items-center gap-1 flex-wrap text-sm text-gray-700">
                <span className="font-black text-purple-600 mr-1">{i + 1}.</span>
                <span>{parts[0]}</span>
                <input
                  type="text"
                  value={gapAnswers[i] || ""}
                  onChange={(e) => setGapAnswers(prev => ({ ...prev, [i]: e.target.value }))}
                  disabled={gapChecked}
                  placeholder="________"
                  className="border-2 rounded-lg px-2 py-0.5 text-sm font-semibold outline-none transition-all"
                  style={{
                    minWidth: 140,
                    borderColor: gapChecked ? (isCorrect ? "#10b981" : "#ef4444") : "#c4b5fd",
                    background: gapChecked ? (isCorrect ? "#d1fae5" : "#fee2e2") : "white",
                  }}
                />
                {parts[1] && <span>{parts[1]}</span>}
                {gapChecked && !isCorrect && (
                  <span className="text-xs text-green-600 font-bold ml-1">→ {s.answer}</span>
                )}
              </div>
            );
          })}
        </div>
        {!gapChecked ? (
          <button
            onClick={checkGap}
            className="mt-4 px-6 py-2.5 rounded-xl text-white font-bold text-sm hover:scale-105 transition-all"
            style={{ background: "linear-gradient(135deg, #A855F7, #6366F1)" }}
          >
            Check Answers ✓
          </button>
        ) : (
          <div className="mt-3 rounded-xl p-3 flex items-center gap-3" style={{ background: "#f5f0ff" }}>
            <span className="text-xl">🎯</span>
            <p className="font-bold text-purple-700">Score: {gapScore}/{GRAMMAR_GAPFILL.sentences.length}</p>
          </div>
        )}
      </ExerciseCard>

      {/* Exercise 16: Brackets */}
      <ExerciseCard
        number={16}
        title="Gaps with Brackets ✏️"
        instruction="Use the verb in brackets in the correct tense (Present Perfect or Past Simple). Write the full verb form in the gap."
        time="5 min"
        accent="#A855F7"
        score={{ earned: bracketsScore, max: BRACKETS_EXERCISE.length }}
      >
        <div className="space-y-3">
          {BRACKETS_EXERCISE.map((item, i) => {
            return (
              <div key={i} className="rounded-xl p-3" style={{ background: "#f9fafb", border: "1.5px solid #e9d5ff" }}>
                <div className="flex items-start gap-2 flex-wrap text-sm text-gray-700">
                  <span className="font-black text-purple-600 flex-shrink-0">{i + 1}.</span>
                  <div className="flex-1">
                    {item.text.split("___").map((part, j) => (
                      <span key={j}>
                        {part}
                        {j < item.text.split("___").length - 1 && (
                          <input
                            type="text"
                            value={bracketsAnswers[i] || ""}
                            onChange={(e) => !bracketsChecked && setBracketsAnswers(prev => ({ ...prev, [i]: e.target.value }))}
                            disabled={bracketsChecked}
                            placeholder="___"
                            className="border-b-2 mx-1 px-1 text-sm font-semibold outline-none text-center"
                            style={{
                              borderColor: bracketsChecked
                                ? item.answers.some(a => (bracketsAnswers[i] || "").toLowerCase().includes(a.toLowerCase())) ? "#10b981" : "#ef4444"
                                : "#A855F7",
                              background: bracketsChecked
                                ? item.answers.some(a => (bracketsAnswers[i] || "").toLowerCase().includes(a.toLowerCase())) ? "#d1fae5" : "#fee2e2"
                                : "transparent",
                              width: 120,
                            }}
                          />
                        )}
                      </span>
                    ))}
                  </div>
                </div>
                {bracketsChecked && (
                  <p className="text-xs text-green-600 mt-1 font-semibold">
                    ✓ Answer: {item.answers.join(" / ")}
                  </p>
                )}
              </div>
            );
          })}
        </div>
        {!bracketsChecked ? (
          <button
            onClick={checkBrackets}
            className="mt-4 px-6 py-2.5 rounded-xl text-white font-bold text-sm hover:scale-105 transition-all"
            style={{ background: "linear-gradient(135deg, #A855F7, #6366F1)" }}
          >
            Check Answers ✓
          </button>
        ) : (
          <div className="mt-3 rounded-xl p-3 flex items-center gap-3" style={{ background: "#f5f0ff" }}>
            <span className="text-xl">🎯</span>
            <p className="font-bold text-purple-700">Score: {bracketsScore}/{BRACKETS_EXERCISE.length}</p>
          </div>
        )}
      </ExerciseCard>

      {/* Exercise 17: ABCD */}
      <ExerciseCard
        number={17}
        title="Multiple-Choice Cloze — A, B, C or D 🅰️"
        instruction="Choose the correct option (A, B, C, or D) for each gap. Only one answer is correct."
        time="4 min"
        accent="#A855F7"
        score={{ earned: abcdScore, max: 5 }}
      >
        <div className="space-y-5">
          {ABCD_EXERCISE.map((q, qi) => (
            <div key={qi} className="rounded-xl p-4" style={{ background: "#f9fafb", border: "1.5px solid #e9d5ff" }}>
              <p className="font-semibold text-gray-700 text-sm mb-3 whitespace-pre-line">
                <span className="font-black text-purple-600 mr-1">{qi + 1}.</span>
                {q.text}
              </p>
              {q.gaps.map((gap, gi) => {
                const key = `${qi}-${gi}`;
                return (
                  <div key={gi} className="mb-2">
                    {q.gaps.length > 1 && <p className="text-xs text-gray-400 mb-1">Gap {gi + 1}:</p>}
                    <div className="flex flex-wrap gap-2">
                      {gap.options.map((opt) => {
                        const isSelected = abcdAnswers[key] === opt;
                        const isCorrect = opt === gap.answer;
                        return (
                          <button
                            key={opt}
                            onClick={() => !abcdChecked && setAbcdAnswers(prev => ({ ...prev, [key]: opt }))}
                            disabled={abcdChecked}
                            className="px-4 py-1.5 rounded-lg font-bold text-sm transition-all"
                            style={{
                              background: abcdChecked
                                ? isCorrect ? "#d1fae5" : isSelected ? "#fee2e2" : "#f3f4f6"
                                : isSelected ? "#A855F7" : "#f3f4f6",
                              color: abcdChecked
                                ? isCorrect ? "#065f46" : isSelected ? "#991b1b" : "#374151"
                                : isSelected ? "white" : "#374151",
                              border: `2px solid ${isSelected || (abcdChecked && isCorrect) ? (abcdChecked ? (isCorrect ? "#10b981" : "#ef4444") : "#A855F7") : "transparent"}`,
                            }}
                          >
                            {opt} {abcdChecked && isCorrect && "✓"}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        {!abcdChecked ? (
          <button
            onClick={checkAbcd}
            className="mt-4 px-6 py-2.5 rounded-xl text-white font-bold text-sm hover:scale-105 transition-all"
            style={{ background: "linear-gradient(135deg, #A855F7, #6366F1)" }}
          >
            Check Answers ✓
          </button>
        ) : (
          <div className="mt-3 rounded-xl p-3 flex items-center gap-3" style={{ background: "#f5f0ff" }}>
            <span className="text-xl">🎯</span>
            <p className="font-bold text-purple-700">Score: {abcdScore}/5</p>
          </div>
        )}
      </ExerciseCard>

      {/* Exercise 18: Two options slash */}
      <ExerciseCard
        number={18}
        title="Two Options — Choose the Correct Form 🔀"
        instruction="Choose the correct option from each pair. Type the correct form or click to highlight it."
        time="3 min"
        accent="#A855F7"
        score={{ earned: slashScore, max: 7 }}
      >
        <div className="space-y-4">
          {SLASH_EXERCISE.map((item, i) => {
              // Parse options from text
            return (
              <div key={i} className="rounded-xl p-4" style={{ background: "#f9fafb", border: "1.5px solid #e9d5ff" }}>
                <p className="text-xs font-black text-purple-500 mb-2">Sentence {i + 1}</p>
                <div className="flex flex-wrap gap-2 items-center text-sm text-gray-700">
                  {item.text.split(/([A-Za-z ']+\/[A-Za-z ']+)/g).map((part, j) => {
                    if (part.includes("/")) {
                      const [opt1, opt2] = part.split("/").map(s => s.trim());
                      const gapIdx = Math.floor(j / 2);
                      const correctAns = item.answers[gapIdx] || "";
                      const selected = slashAnswers[i]?.[gapIdx];
                      return (
                        <span key={j} className="inline-flex gap-1">
                          {[opt1, opt2].map((opt) => (
                            <button
                              key={opt}
                              onClick={() => !slashChecked && setSlashAnswers(prev => ({
                                ...prev,
                                [i]: { ...(prev[i] || {}), [gapIdx]: opt }
                              }))}
                              disabled={slashChecked}
                              className="px-2 py-0.5 rounded-lg font-bold text-xs transition-all border-2"
                              style={{
                                background: slashChecked
                                  ? opt.toLowerCase() === correctAns.toLowerCase() ? "#d1fae5" : selected === opt ? "#fee2e2" : "#f3f4f6"
                                  : selected === opt ? "#A855F7" : "#f3f4f6",
                                borderColor: selected === opt || (slashChecked && opt.toLowerCase() === correctAns.toLowerCase()) ? "#A855F7" : "transparent",
                                color: slashChecked
                                  ? opt.toLowerCase() === correctAns.toLowerCase() ? "#065f46" : selected === opt ? "#991b1b" : "#374151"
                                  : selected === opt ? "white" : "#374151",
                              }}
                            >
                              {opt}
                            </button>
                          ))}
                        </span>
                      );
                    }
                    return <span key={j}>{part}</span>;
                  })}
                </div>
                {slashChecked && (
                  <p className="text-xs text-green-600 mt-1 italic">
                    ✓ Correct: {item.answers.join(" / ")}
                  </p>
                )}
              </div>
            );
          })}
        </div>
        {!slashChecked ? (
          <button
            onClick={checkSlash}
            className="mt-4 px-6 py-2.5 rounded-xl text-white font-bold text-sm hover:scale-105 transition-all"
            style={{ background: "linear-gradient(135deg, #A855F7, #6366F1)" }}
          >
            Check Answers ✓
          </button>
        ) : (
          <div className="mt-3 rounded-xl p-3 flex items-center gap-3" style={{ background: "#f5f0ff" }}>
            <span className="text-xl">🎯</span>
            <p className="font-bold text-purple-700">Score: {slashScore}/7</p>
          </div>
        )}
      </ExerciseCard>

      {/* Exercise 19: Error Correction */}
      <ExerciseCard
        number={19}
        title="Error Correction 🛠️"
        instruction="Each sentence contains ONE mistake. Find and correct it. Write the corrected sentence in full."
        time="5 min"
        accent="#A855F7"
        score={{ earned: errScore, max: ERROR_CORRECTION.length }}
      >
        <div className="space-y-3">
          {ERROR_CORRECTION.map((item, i) => {
            const isCorrect = (errAnswers[i] || "").trim().toLowerCase() === item.correction.toLowerCase();
            return (
              <div key={i} className="rounded-xl p-4" style={{ background: "#f9fafb", border: "1.5px solid #e9d5ff" }}>
                <p className="text-sm text-gray-700 font-semibold mb-2">
                  <span className="font-black text-purple-600 mr-1">{i + 1}.</span>
                  {item.sentence}
                </p>
                <input
                  type="text"
                  value={errAnswers[i] || ""}
                  onChange={(e) => setErrAnswers(prev => ({ ...prev, [i]: e.target.value }))}
                  disabled={errChecked}
                  placeholder="Write the corrected sentence…"
                  className="w-full rounded-xl px-3 py-2 text-sm border-2 outline-none transition-all font-medium"
                  style={{
                    borderColor: errChecked ? (isCorrect ? "#10b981" : "#ef4444") : "#c4b5fd",
                    background: errChecked ? (isCorrect ? "#d1fae5" : "#fee2e2") : "white",
                  }}
                />
                {errChecked && (
                  <p className="text-xs mt-1">
                    <span className="font-bold text-red-500">Error: </span>
                    <span className="text-gray-600">{item.error} → </span>
                    <span className="font-bold text-green-600">{item.correction}</span>
                  </p>
                )}
              </div>
            );
          })}
        </div>
        {!errChecked ? (
          <button
            onClick={checkErr}
            className="mt-4 px-6 py-2.5 rounded-xl text-white font-bold text-sm hover:scale-105 transition-all"
            style={{ background: "linear-gradient(135deg, #A855F7, #6366F1)" }}
          >
            Check Answers ✓
          </button>
        ) : (
          <div className="mt-3 rounded-xl p-3 flex items-center gap-3" style={{ background: "#f5f0ff" }}>
            <span className="text-xl">🎯</span>
            <p className="font-bold text-purple-700">Score: {errScore}/{ERROR_CORRECTION.length}</p>
          </div>
        )}
      </ExerciseCard>

      {/* Exercise 20: Rewrite */}
      <ExerciseCard
        number={20}
        title="Rewrite the Sentence 🔄"
        instruction="Rewrite each sentence using the hint provided. Keep the same meaning. Use the correct tense."
        note="Higher-Order Task (Bloom's: Create). Your teacher will discuss your answers."
        time="4 min"
        accent="#A855F7"
      >
        <div className="space-y-3">
          {REWRITE_SENTENCES.map((item, i) => (
            <div key={i} className="rounded-xl p-4" style={{ background: "#f9fafb", border: "1.5px solid #e9d5ff" }}>
              <p className="text-sm text-gray-700 font-semibold mb-1">
                <span className="font-black text-purple-600 mr-1">{i + 1}.</span>
                {item.original}
              </p>
              <p className="text-xs text-purple-400 italic mb-2">💡 Hint: {item.hint}</p>
              <input
                type="text"
                value={rewriteAnswers[i] || ""}
                onChange={(e) => setRewriteAnswers(prev => ({ ...prev, [i]: e.target.value }))}
                disabled={rewriteChecked}
                placeholder="Rewrite here…"
                className="w-full rounded-xl px-3 py-2 text-sm border-2 outline-none transition-all font-medium"
                style={{
                  borderColor: rewriteChecked ? "#a7f3d0" : "#c4b5fd",
                  background: rewriteChecked ? "#ecfdf5" : "white",
                }}
              />
              {rewriteChecked && (
                <p className="text-xs text-green-600 mt-1 italic">
                  💡 Model: <strong>{item.target}</strong>
                </p>
              )}
            </div>
          ))}
        </div>
        {!rewriteChecked ? (
          <button
            onClick={checkRewrite}
            className="mt-4 px-6 py-2.5 rounded-xl text-white font-bold text-sm hover:scale-105 transition-all"
            style={{ background: "linear-gradient(135deg, #A855F7, #6366F1)" }}
          >
            Show Model Answers
          </button>
        ) : (
          <p className="text-xs text-gray-500 mt-2 italic">✅ Compare your sentences to the models above.</p>
        )}
      </ExerciseCard>

      {/* Exercise 21: Matching Halves */}
      <ExerciseCard
        number={21}
        title="Matching Halves 🧩"
        instruction="Match each sentence beginning (Column A) with the correct ending (Column B). Select the correct ending number for each beginning."
        time="3 min"
        accent="#A855F7"
        score={{ earned: matchScore, max: 8 }}
      >
        <div className="grid md:grid-cols-2 gap-6">
          {/* Column A */}
          <div>
            <p className="font-black text-purple-600 mb-3 text-sm uppercase">Column A — Beginnings</p>
            <div className="space-y-2">
              {MATCHING_HALVES.left.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-6 text-xs font-black text-gray-400">{i + 1}.</span>
                  <div className="flex-1 rounded-xl px-3 py-2 text-sm font-semibold text-gray-700" style={{ background: "#f5f0ff" }}>
                    {item}
                  </div>
                  <select
                    value={matchSelections[i] ?? ""}
                    onChange={(e) => !matchChecked && setMatchSelections(prev => ({ ...prev, [i]: parseInt(e.target.value) }))}
                    disabled={matchChecked}
                    className="rounded-lg px-2 py-1 text-sm border-2 outline-none font-bold"
                    style={{
                      borderColor: matchChecked
                        ? matchSelections[i] === MATCHING_HALVES.answers[i] ? "#10b981" : "#ef4444"
                        : "#c4b5fd",
                      background: matchChecked
                        ? matchSelections[i] === MATCHING_HALVES.answers[i] ? "#d1fae5" : "#fee2e2"
                        : "white",
                      width: 55,
                    }}
                  >
                    <option value="">—</option>
                    {MATCHING_HALVES.right.map((_, j) => (
                      <option key={j} value={j}>{String.fromCharCode(65 + j)}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>

          {/* Column B */}
          <div>
            <p className="font-black text-indigo-600 mb-3 text-sm uppercase">Column B — Endings</p>
            <div className="space-y-2">
              {MATCHING_HALVES.right.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
                    style={{ background: "#eef2ff", color: "#3730a3" }}
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                  <div className="flex-1 rounded-xl px-3 py-2 text-sm font-medium text-gray-700" style={{ background: "#eef2ff" }}>
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {matchChecked && (
          <div className="mt-3 rounded-xl p-3" style={{ background: "#ecfdf5", border: "1.5px solid #a7f3d0" }}>
            <p className="text-xs font-bold text-green-700 mb-1">✓ Answer Key:</p>
            <div className="flex flex-wrap gap-2">
              {MATCHING_HALVES.answers.map((ans, i) => (
                <span key={i} className="text-xs font-bold px-2 py-0.5 rounded-lg" style={{ background: "#d1fae5", color: "#065f46" }}>
                  {i + 1} → {String.fromCharCode(65 + ans)}
                </span>
              ))}
            </div>
          </div>
        )}

        {!matchChecked ? (
          <button
            onClick={checkMatch}
            className="mt-4 px-6 py-2.5 rounded-xl text-white font-bold text-sm hover:scale-105 transition-all"
            style={{ background: "linear-gradient(135deg, #A855F7, #6366F1)" }}
          >
            Check Answers ✓
          </button>
        ) : (
          <div className="mt-3 rounded-xl p-3 flex items-center gap-3" style={{ background: "#f5f0ff" }}>
            <span className="text-xl">🎯</span>
            <p className="font-bold text-purple-700">Score: {matchScore}/8</p>
          </div>
        )}
      </ExerciseCard>
    </section>
  );
}
