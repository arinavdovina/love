import { useState } from "react";
import SectionHeader from "../SectionHeader";
import ExerciseCard from "../ExerciseCard";
import {
  VOCAB_WORDS,
  ODD_ONE_OUT,
  VOCAB_MATCH,
  REPHRASE_SENTENCES,
  WORD_SORTER_WORDS,
  WORD_SORTER_CATEGORIES,
} from "../../data/workbookData";

interface Props {
  onScore: (pts: number) => void;
}

export default function VocabularySection({ onScore }: Props) {
  // ── Word mapping ──
  const [mapHover, setMapHover] = useState<number | null>(null);

  // ── Odd one out ──
  const [oddAnswers, setOddAnswers] = useState<Record<number, string>>({});
  const [oddChecked, setOddChecked] = useState(false);
  const [oddScore, setOddScore] = useState(0);

  const checkOdd = () => {
    let sc = 0;
    ODD_ONE_OUT.forEach((item, i) => {
      if (oddAnswers[i] === item.odd) sc++;
    });
    setOddScore(sc);
    setOddChecked(true);
    onScore(sc);
  };

  // ── Word matching ──
  const shuffledDefs = [...VOCAB_MATCH].sort(() => Math.random() - 0.5);
  const [defOrder] = useState(shuffledDefs);
  const [matchAnswers, setMatchAnswers] = useState<Record<number, string>>({});
  const [matchChecked, setMatchChecked] = useState(false);
  const [matchScore, setMatchScore] = useState(0);

  const checkMatch = () => {
    let sc = 0;
    VOCAB_MATCH.forEach((item, i) => {
      if (matchAnswers[i] === item.def) sc++;
    });
    setMatchScore(sc);
    setMatchChecked(true);
    onScore(sc);
  };

  // ── Word Sorter ──
  const [sorterItems, setSorterItems] = useState<string[]>([...WORD_SORTER_WORDS].sort(() => Math.random() - 0.5));
  const [sorterBuckets, setSorterBuckets] = useState<Record<number, string[]>>({ 0: [], 1: [], 2: [], 3: [] });
  const [sorterChecked, setSorterChecked] = useState(false);
  const [sorterScore, setSorterScore] = useState(0);
  const [dragWord, setDragWord] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState<number | null>(null);

  const dropIntoBucket = (bucketIdx: number) => {
    if (!dragWord) return;
    setSorterItems(prev => prev.filter(w => w !== dragWord));
    setSorterBuckets(prev => {
      const nb = { ...prev };
      // remove from other buckets
      Object.keys(nb).forEach(k => {
        nb[parseInt(k)] = nb[parseInt(k)].filter(w => w !== dragWord);
      });
      nb[bucketIdx] = [...nb[bucketIdx], dragWord!];
      return nb;
    });
    setDragWord(null);
    setDragOver(null);
  };

  const returnToPool = (word: string, bucketIdx: number) => {
    setSorterBuckets(prev => {
      const nb = { ...prev };
      nb[bucketIdx] = nb[bucketIdx].filter(w => w !== word);
      return nb;
    });
    setSorterItems(prev => [...prev, word]);
  };

  const checkSorter = () => {
    let sc = 0;
    WORD_SORTER_CATEGORIES.forEach((cat, i) => {
      const bucket = sorterBuckets[i] || [];
      cat.words.forEach(w => {
        if (bucket.includes(w)) sc++;
      });
    });
    setSorterScore(sc);
    setSorterChecked(true);
    onScore(sc);
  };

  // ── Rephrase ──
  const [rephraseAnswers, setRephraseAnswers] = useState<Record<number, string>>({});
  const [rephraseChecked, setRephraseChecked] = useState(false);

  const checkRephrase = () => {
    setRephraseChecked(true);
    onScore(2); // manual teacher check
  };

  const catColours = [
    { bg: "#fff0f6", border: "#ffd6e7", text: "#db2777", tag: "#FF6B9D" },
    { bg: "#f5f0ff", border: "#e9d5ff", text: "#7c3aed", tag: "#A855F7" },
    { bg: "#fff4f0", border: "#ffd5c8", text: "#c2410c", tag: "#FF8C69" },
    { bg: "#ecfdf5", border: "#a7f3d0", text: "#065f46", tag: "#34D399" },
  ];

  return (
    <section>
      <SectionHeader
        number="SECTION 2"
        title="Vocabulary 📖"
        subtitle="Dating & Romance — key words you actually need!"
        emoji="💬"
        colour="pink"
        time="20 min"
      />

      {/* Exercise 3: Word Web */}
      <ExerciseCard
        number={3}
        title="Lexical Mapping — Word Web"
        instruction="Look at the key vocabulary below. Do you know any of these words already? Which ones are new? Discuss with a partner."
        time="3 min"
        accent="#FF6B9D"
      >
        <div className="relative flex flex-wrap gap-3 justify-center py-4">
          {/* Centre */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-white font-black text-xs text-center leading-tight shadow-xl"
              style={{ background: "linear-gradient(135deg, #FF6B9D, #A855F7)" }}
            >
              ❤️<br />Summer<br />Romance
            </div>
          </div>
          {VOCAB_WORDS.map((v, i) => (
            <div
              key={i}
              onMouseEnter={() => setMapHover(i)}
              onMouseLeave={() => setMapHover(null)}
              className="relative rounded-2xl px-4 py-3 cursor-pointer transition-all duration-200 select-none"
              style={{
                background: mapHover === i ? "linear-gradient(135deg, #FF6B9D, #A855F7)" : "#fff0f6",
                border: `2px solid ${mapHover === i ? "#FF6B9D" : "#ffd6e7"}`,
                color: mapHover === i ? "white" : "#db2777",
                transform: mapHover === i ? "scale(1.05)" : "scale(1)",
                boxShadow: mapHover === i ? "0 8px 20px rgba(255,107,157,0.3)" : "none",
              }}
            >
              <p className="font-black text-sm">{v.word}</p>
              {mapHover === i && (
                <div
                  className="absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 rounded-xl p-3 text-xs leading-relaxed shadow-xl slide-up"
                  style={{ background: "white", border: "2px solid #FF6B9D", color: "#374151" }}
                >
                  <p className="font-bold text-pink-500 mb-1">{v.word}</p>
                  <p className="mb-1">{v.definition}</p>
                  <p className="italic text-gray-500">"{v.example}"</p>
                  <div
                    className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45"
                    style={{ background: "white", borderRight: "2px solid #FF6B9D", borderBottom: "2px solid #FF6B9D" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-2">💡 Hover over each word to see the definition and example</p>
      </ExerciseCard>

      {/* Exercise 4: Odd One Out */}
      <ExerciseCard
        number={4}
        title="Odd One Out 🔍"
        instruction="In each group, find the word that does NOT belong. Click on it to select it. Then explain WHY in the box below."
        time="5 min"
        accent="#FF6B9D"
        score={{ earned: oddScore, max: ODD_ONE_OUT.length }}
      >
        <div className="space-y-4">
          {ODD_ONE_OUT.map((group, i) => (
            <div key={i} className="rounded-xl p-4" style={{ background: "#f9fafb", border: "1.5px solid #e5e7eb" }}>
              <p className="text-xs font-bold text-gray-500 uppercase mb-2">Group {i + 1}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {group.words.map((word) => (
                  <button
                    key={word}
                    onClick={() => !oddChecked && setOddAnswers(prev => ({ ...prev, [i]: word }))}
                    disabled={oddChecked}
                    className="px-4 py-2 rounded-xl font-bold text-sm transition-all duration-200"
                    style={{
                      background:
                        oddChecked
                          ? word === group.odd
                            ? "#d1fae5"
                            : oddAnswers[i] === word && word !== group.odd
                            ? "#fee2e2"
                            : "#f3f4f6"
                          : oddAnswers[i] === word
                          ? "#FF6B9D"
                          : "#f3f4f6",
                      color:
                        oddChecked
                          ? word === group.odd
                            ? "#065f46"
                            : oddAnswers[i] === word && word !== group.odd
                            ? "#991b1b"
                            : "#374151"
                          : oddAnswers[i] === word
                          ? "white"
                          : "#374151",
                      border:
                        oddAnswers[i] === word
                          ? "2px solid #FF6B9D"
                          : "2px solid transparent",
                    }}
                  >
                    {word}
                    {oddChecked && word === group.odd && " ✓"}
                  </button>
                ))}
              </div>
              {oddChecked && (
                <p className="text-xs text-gray-500 italic mt-1">
                  💡 {group.reason}
                </p>
              )}
            </div>
          ))}
        </div>
        {!oddChecked ? (
          <button
            onClick={checkOdd}
            className="mt-4 px-6 py-2.5 rounded-xl text-white font-bold text-sm transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #FF6B9D, #A855F7)" }}
          >
            Check Answers ✓
          </button>
        ) : (
          <div className="mt-4 rounded-xl p-3 flex items-center gap-3" style={{ background: "#f5f0ff" }}>
            <span className="text-2xl">🎯</span>
            <p className="font-bold text-purple-700">Score: {oddScore}/{ODD_ONE_OUT.length} — {oddScore === ODD_ONE_OUT.length ? "Perfect! 🔥" : oddScore >= 4 ? "Great job! 💪" : "Keep practising! 📚"}</p>
          </div>
        )}
      </ExerciseCard>

      {/* Exercise 5: Word Match */}
      <ExerciseCard
        number={5}
        title="Word–Definition Matching 🔗"
        instruction="Match each word to its correct definition. Select from the dropdown menu."
        time="4 min"
        accent="#FF6B9D"
        score={{ earned: matchScore, max: VOCAB_MATCH.length }}
      >
        <div className="space-y-2">
          {VOCAB_MATCH.map((item, i) => (
            <div key={i} className="flex items-center gap-3 flex-wrap">
              <div
                className="px-3 py-1.5 rounded-lg font-black text-sm flex-shrink-0"
                style={{ background: "#fff0f6", color: "#db2777", border: "1.5px solid #ffd6e7", minWidth: 100 }}
              >
                {item.word}
              </div>
              <span className="text-gray-400 font-bold">→</span>
              <select
                disabled={matchChecked}
                value={matchAnswers[i] || ""}
                onChange={(e) => setMatchAnswers(prev => ({ ...prev, [i]: e.target.value }))}
                className="flex-1 rounded-lg px-3 py-1.5 text-sm font-semibold border-2 outline-none"
                style={{
                  borderColor: matchChecked
                    ? matchAnswers[i] === item.def ? "#10b981" : "#ef4444"
                    : "#e9d5ff",
                  background: matchChecked
                    ? matchAnswers[i] === item.def ? "#d1fae5" : "#fee2e2"
                    : "white",
                  color: "#374151",
                }}
              >
                <option value="">— choose a definition —</option>
                {defOrder.map((d, j) => (
                  <option key={j} value={d.def}>{d.def}</option>
                ))}
              </select>
              {matchChecked && (
                <span className="text-lg">{matchAnswers[i] === item.def ? "✅" : "❌"}</span>
              )}
            </div>
          ))}
        </div>
        {!matchChecked ? (
          <button
            onClick={checkMatch}
            className="mt-4 px-6 py-2.5 rounded-xl text-white font-bold text-sm transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #FF6B9D, #A855F7)" }}
          >
            Check Answers ✓
          </button>
        ) : (
          <div className="mt-4 rounded-xl p-3 flex items-center gap-3" style={{ background: "#f5f0ff" }}>
            <span className="text-2xl">🎯</span>
            <p className="font-bold text-purple-700">Score: {matchScore}/{VOCAB_MATCH.length}</p>
          </div>
        )}
      </ExerciseCard>

      {/* Exercise 6: Word Sorter */}
      <ExerciseCard
        number={6}
        title="Word Sorter 🗂️"
        instruction="Drag each word from the pool into the correct category box. Click on a word in a box to return it to the pool."
        time="5 min"
        accent="#FF6B9D"
        score={{ earned: sorterScore, max: 16 }}
      >
        {/* Word pool */}
        <div
          className="rounded-xl p-3 mb-4 flex flex-wrap gap-2"
          style={{ background: "#f9fafb", border: "2px dashed #e5e7eb" }}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => { /* dropping back to pool is via click */ }}
        >
          <p className="w-full text-xs font-bold text-gray-400 uppercase mb-1">Word Pool</p>
          {sorterItems.map((word) => (
            <div
              key={word}
              draggable
              onDragStart={() => setDragWord(word)}
              onDragEnd={() => setDragWord(null)}
              className="drag-item px-3 py-1.5 rounded-lg font-bold text-sm cursor-grab"
              style={{
                background: "linear-gradient(135deg, #FF6B9D, #A855F7)",
                color: "white",
                opacity: dragWord === word ? 0.5 : 1,
              }}
            >
              {word}
            </div>
          ))}
          {sorterItems.length === 0 && (
            <p className="text-xs text-gray-400 italic">All words placed! ✓</p>
          )}
        </div>

        {/* Category buckets */}
        <div className="grid sm:grid-cols-2 gap-3">
          {WORD_SORTER_CATEGORIES.map((cat, idx) => {
            const c = catColours[idx];
            return (
              <div
                key={idx}
                className="rounded-xl p-3 transition-all duration-200"
                style={{
                  background: dragOver === idx ? c.border : c.bg,
                  border: `2px dashed ${dragOver === idx ? c.text : c.border}`,
                }}
                onDragOver={(e) => { e.preventDefault(); setDragOver(idx); }}
                onDragLeave={() => setDragOver(null)}
                onDrop={() => dropIntoBucket(idx)}
              >
                <p className="font-black text-xs mb-2" style={{ color: c.text }}>
                  {cat.label}
                </p>
                <div className="flex flex-wrap gap-2 min-h-8">
                  {(sorterBuckets[idx] || []).map((word) => {
                    const isCorrect = cat.words.includes(word);
                    return (
                      <div
                        key={word}
                        onClick={() => !sorterChecked && returnToPool(word, idx)}
                        className="px-2.5 py-1 rounded-lg font-bold text-xs cursor-pointer transition-all"
                        style={{
                          background: sorterChecked
                            ? isCorrect ? "#d1fae5" : "#fee2e2"
                            : c.border,
                          color: sorterChecked
                            ? isCorrect ? "#065f46" : "#991b1b"
                            : c.text,
                          border: `1.5px solid ${sorterChecked ? (isCorrect ? "#10b981" : "#ef4444") : c.text}`,
                        }}
                        title={sorterChecked ? "" : "Click to return to pool"}
                      >
                        {word} {sorterChecked && (isCorrect ? "✓" : "✗")}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {!sorterChecked ? (
          <button
            onClick={checkSorter}
            className="mt-4 px-6 py-2.5 rounded-xl text-white font-bold text-sm transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #FF6B9D, #A855F7)" }}
          >
            Check Answers ✓
          </button>
        ) : (
          <div className="mt-4 rounded-xl p-3 flex items-center gap-3" style={{ background: "#f5f0ff" }}>
            <span className="text-2xl">🎯</span>
            <p className="font-bold text-purple-700">Score: {sorterScore}/16</p>
          </div>
        )}
      </ExerciseCard>

      {/* Exercise 7: Rephrase */}
      <ExerciseCard
        number={7}
        title="Rephrase Using the Word Given ✍️"
        instruction="Rewrite each sentence using the word in brackets without changing the meaning. The number of words you can add is flexible."
        note="This is a production task — your teacher will check these in class."
        time="3 min"
        accent="#FF6B9D"
      >
        <div className="space-y-3">
          {REPHRASE_SENTENCES.map((item, i) => (
            <div key={i} className="rounded-xl p-4" style={{ background: "#f9fafb", border: "1.5px solid #e5e7eb" }}>
              <p className="text-sm text-gray-700 mb-1 font-semibold">{i + 1}. {item.sentence}</p>
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className="px-2 py-0.5 rounded-lg text-xs font-black"
                  style={{ background: "#fff0f6", color: "#db2777", border: "1.5px solid #ffd6e7" }}
                >
                  {item.word.toUpperCase()}
                </span>
                <input
                  type="text"
                  placeholder="Rewrite the sentence here…"
                  value={rephraseAnswers[i] || ""}
                  onChange={(e) => setRephraseAnswers(prev => ({ ...prev, [i]: e.target.value }))}
                  className="flex-1 rounded-lg px-3 py-1.5 text-sm border-2 outline-none font-medium"
                  style={{ borderColor: rephraseChecked ? "#a7f3d0" : "#e9d5ff", background: rephraseChecked ? "#ecfdf5" : "white" }}
                />
              </div>
              {rephraseChecked && (
                <p className="text-xs text-green-600 mt-1 italic">💡 Suggested: {item.answer}</p>
              )}
            </div>
          ))}
        </div>
        {!rephraseChecked ? (
          <button
            onClick={checkRephrase}
            className="mt-4 px-6 py-2.5 rounded-xl text-white font-bold text-sm hover:scale-105 transition-all"
            style={{ background: "linear-gradient(135deg, #FF6B9D, #A855F7)" }}
          >
            Show Suggested Answers
          </button>
        ) : (
          <p className="text-xs text-gray-500 mt-3 italic">✅ Compare your answers to the suggestions above. Discuss any differences with your teacher.</p>
        )}
      </ExerciseCard>
    </section>
  );
}
