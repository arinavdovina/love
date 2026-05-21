import { useState } from "react";
import SectionHeader from "../SectionHeader";
import ExerciseCard from "../ExerciseCard";
import {
  LANGUAGE_BOX_SPEAKING,
  ROLE_PLAY_CARDS,
  SPEAKING_RUBRIC,
  HOMEWORK,
} from "../../data/workbookData";

interface Props {
  onScore: (pts: number) => void;
}

export default function SpeakingSection({ onScore }: Props) {
  // Role play notes
  const [myOwnDialogue, setMyOwnDialogue] = useState<string>("");

  // Self-assessment
  const [rubricScores, setRubricScores] = useState<Record<number, number>>({});
  const [goalText, setGoalText] = useState("");
  const [reflectionDone, setReflectionDone] = useState(false);

  // Profile task
  const [profileData, setProfileData] = useState({
    name: "",
    age: "",
    location: "",
    interests: "",
    lookingFor: "",
    dealbreaker: "",
    greenFlag: "",
    funFact: "",
  });
  const [profileSaved, setProfileSaved] = useState(false);

  const handleReflectionSave = () => {
    const total = Object.values(rubricScores).reduce((a, b) => a + b, 0);
    onScore(Math.floor(total / SPEAKING_RUBRIC.length));
    setReflectionDone(true);
  };

  const boxColours = [
    { bg: "#fff0f6", border: "#ffd6e7", text: "#db2777", label: "#FF6B9D" },
    { bg: "#ecfdf5", border: "#a7f3d0", text: "#065f46", label: "#34D399" },
    { bg: "#fee2e2", border: "#fca5a5", text: "#991b1b", label: "#ef4444" },
    { bg: "#f5f0ff", border: "#e9d5ff", text: "#7c3aed", label: "#A855F7" },
  ];

  return (
    <section>
      <SectionHeader
        number="SECTION 5"
        title="Speaking 🎙️"
        subtitle="Time to talk! Use your language — be confident, have fun."
        emoji="💬"
        colour="mint"
        time="20 min"
      />

      {/* Language Box */}
      <div className="rounded-2xl overflow-hidden mb-6 shadow-lg" style={{ border: "2px solid #a7f3d0" }}>
        <div className="p-4 flex items-center gap-3" style={{ background: "linear-gradient(135deg, #34D399, #059669)" }}>
          <span className="text-2xl">💡</span>
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-white/80">Language Support Box</p>
            <h3 className="font-black text-white text-lg">{LANGUAGE_BOX_SPEAKING.title}</h3>
          </div>
          <span className="ml-auto text-white/70 text-xs font-bold">Keep this open during your role play!</span>
        </div>
        <div className="p-4 grid sm:grid-cols-2 gap-4 bg-white">
          {LANGUAGE_BOX_SPEAKING.sections.map((sec, i) => {
            const c = boxColours[i] || boxColours[0];
            return (
              <div key={i} className="rounded-xl p-3" style={{ background: c.bg, border: `1.5px solid ${c.border}` }}>
                <p className="font-black text-sm mb-2" style={{ color: c.text }}>{sec.label}</p>
                <ul className="space-y-1">
                  {sec.phrases.map((phrase, j) => (
                    <li key={j} className="text-xs text-gray-700 flex gap-1.5">
                      <span style={{ color: c.label }}>▸</span>
                      <span className="italic">"{phrase}"</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Exercise 22: Red/Green Flags discussion */}
      <ExerciseCard
        number={22}
        title="Red Flags vs Green Flags — Discuss! 🚩💚"
        instruction="Look at each behaviour below. Is it a 🚩 Red Flag or 💚 Green Flag? Click to choose, then discuss with a partner — do you agree?"
        time="5 min"
        accent="#34D399"
      >
        <RedGreenFlagsActivity />
      </ExerciseCard>

      {/* Exercise 23: Dating Profile — Create task */}
      <ExerciseCard
        number={23}
        title="Create Your Dating Profile 💅"
        instruction="Fill in the profile for a fictional character you invent. Make them interesting and realistic! Use vocabulary from today's lesson."
        note="Higher-Order Task (Bloom's: Create)"
        time="5 min"
        accent="#34D399"
      >
        <div
          className="rounded-2xl overflow-hidden shadow-lg"
          style={{
            background: "linear-gradient(135deg, #fff0f6, #f5f0ff)",
            border: "2px solid #ffd6e7",
          }}
        >
          {/* Profile header */}
          <div
            className="p-4 text-center"
            style={{ background: "linear-gradient(135deg, #FF6B9D, #A855F7)" }}
          >
            <div className="w-16 h-16 rounded-full mx-auto mb-2 bg-white/30 flex items-center justify-center text-4xl">
              {profileData.name ? profileData.name[0]?.toUpperCase() || "?" : "?"}
            </div>
            <p className="text-white font-black text-xl">
              {profileData.name || "Your Character"}{profileData.age ? `, ${profileData.age}` : ""}
            </p>
            <p className="text-white/80 text-sm">{profileData.location || "📍 Location"}</p>
          </div>

          {/* Profile fields */}
          <div className="p-4 space-y-3">
            {[
              { key: "name", label: "Name", icon: "👤", placeholder: "e.g. Sam, Alex, Jordan…" },
              { key: "age", label: "Age", icon: "🎂", placeholder: "e.g. 17" },
              { key: "location", label: "Location", icon: "📍", placeholder: "e.g. London, Barcelona, Seoul…" },
              { key: "interests", label: "Hobbies & Interests", icon: "🎯", placeholder: "e.g. music, hiking, K-drama, coffee shops…" },
              { key: "lookingFor", label: "I'm looking for…", icon: "💫", placeholder: "e.g. someone to explore the city with this summer" },
              { key: "greenFlag", label: "My biggest green flag is…", icon: "💚", placeholder: "e.g. I always text back / I remember small details" },
              { key: "dealbreaker", label: "My dealbreaker is…", icon: "🚩", placeholder: "e.g. ghosting / bad vibes" },
              { key: "funFact", label: "Fun fact about me:", icon: "✨", placeholder: "e.g. I have a crush on autumn rain" },
            ].map(({ key, label, icon, placeholder }) => (
              <div key={key}>
                <label className="text-xs font-black text-gray-500 uppercase mb-0.5 flex items-center gap-1">
                  {icon} {label}
                </label>
                <input
                  type={key === "age" ? "number" : "text"}
                  value={profileData[key as keyof typeof profileData]}
                  onChange={(e) => setProfileData(prev => ({ ...prev, [key]: e.target.value }))}
                  disabled={profileSaved}
                  placeholder={placeholder}
                  className="w-full rounded-xl px-3 py-2 text-sm border-2 outline-none transition-all font-medium"
                  style={{ borderColor: "#e9d5ff", background: profileSaved ? "#f5f0ff" : "white" }}
                />
              </div>
            ))}
          </div>

          {!profileSaved ? (
            <button
              onClick={() => setProfileSaved(true)}
              className="w-full py-3 font-black text-white text-sm transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #FF6B9D, #A855F7)" }}
            >
              💅 Save Profile
            </button>
          ) : (
            <div className="p-3 text-center">
              <p className="text-xs font-bold text-purple-600">✅ Profile saved! Now share it with your partner and ask each other about your characters.</p>
            </div>
          )}
        </div>
      </ExerciseCard>

      {/* Exercise 24: Role Play */}
      <ExerciseCard
        number={24}
        title="Role Play — Ask Someone Out! 🎭"
        instruction="Work with a partner. Take one card each. Read your scenario and use the Language Box above. Have a 3–4 minute conversation."
        time="7 min"
        accent="#34D399"
      >
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {ROLE_PLAY_CARDS.map((card) => {
            const isA = card.id === "A";
            return (
              <div
                key={card.id}
                className="rounded-2xl p-5"
                style={{
                  background: isA ? "#fff0f6" : "#f5f0ff",
                  border: `2px solid ${isA ? "#ffd6e7" : "#e9d5ff"}`,
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xl font-black text-white"
                    style={{ background: isA ? "#FF6B9D" : "#A855F7" }}
                  >
                    {card.emoji}
                  </div>
                  <div>
                    <p className="font-black text-sm" style={{ color: isA ? "#db2777" : "#7c3aed" }}>
                      {card.title}
                    </p>
                    <p
                      className="text-xs font-bold px-2 py-0.5 rounded-full inline-block"
                      style={{ background: isA ? "#ffd6e7" : "#e9d5ff", color: isA ? "#db2777" : "#7c3aed" }}
                    >
                      Card {card.id}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">{card.scenario}</p>
                <div className="space-y-1">
                  {card.prompts.map((p, j) => (
                    <p key={j} className="text-xs text-gray-600 flex gap-1.5">
                      <span style={{ color: isA ? "#FF6B9D" : "#A855F7" }}>→</span>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* My own dialogue */}
        <div className="rounded-xl p-4" style={{ background: "#f9fafb", border: "1.5px solid #e5e7eb" }}>
          <p className="font-black text-gray-700 text-sm mb-2">📝 After the role play, write the key exchanges you used (3–4 lines):</p>
          <textarea
            value={myOwnDialogue}
            onChange={(e) => setMyOwnDialogue(e.target.value)}
            placeholder="A: Hey, I've had such a good time talking to you...\nB: Me too! It's been really fun.\nA: Would you like to grab coffee sometime?\nB: ..."
            rows={5}
            className="w-full rounded-xl px-4 py-3 text-sm border-2 outline-none resize-none"
            style={{ borderColor: "#a7f3d0", background: "white" }}
          />
        </div>
      </ExerciseCard>

      {/* Exercise 25: Self-reflection */}
      <ExerciseCard
        number={25}
        title="Self-Assessment & Reflection ⭐"
        instruction="After your speaking task, rate yourself honestly (1 = needs work, 5 = excellent). Then write ONE improvement goal."
        time="3 min"
        accent="#34D399"
      >
        <div className="space-y-4">
          {SPEAKING_RUBRIC.map((crit, i) => (
            <div
              key={i}
              className="rounded-xl p-4"
              style={{ background: "#f9fafb", border: "1.5px solid #e5e7eb" }}
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="font-black text-gray-800 text-sm">{crit.criterion}</p>
                  <p className="text-xs text-gray-500">{crit.description}</p>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => !reflectionDone && setRubricScores(prev => ({ ...prev, [i]: star }))}
                      disabled={reflectionDone}
                      className="text-2xl transition-all duration-150 hover:scale-125"
                      style={{
                        filter: (rubricScores[i] || 0) >= star ? "none" : "grayscale(1) opacity(0.4)",
                        transform: (rubricScores[i] || 0) >= star ? "scale(1.1)" : "scale(1)",
                      }}
                    >
                      ⭐
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="rounded-xl p-4" style={{ background: "#ecfdf5", border: "1.5px solid #a7f3d0" }}>
            <p className="font-black text-green-700 text-sm mb-2">🎯 My improvement goal for next class:</p>
            <textarea
              value={goalText}
              onChange={(e) => setGoalText(e.target.value)}
              disabled={reflectionDone}
              placeholder="Next time I will try to… / I need to practise… / I want to improve…"
              rows={2}
              className="w-full rounded-xl px-3 py-2 text-sm border-2 outline-none resize-none"
              style={{ borderColor: "#a7f3d0", background: "white" }}
            />
          </div>
        </div>
        {!reflectionDone ? (
          <button
            onClick={handleReflectionSave}
            className="mt-4 px-6 py-2.5 rounded-xl text-white font-bold text-sm hover:scale-105 transition-all"
            style={{ background: "linear-gradient(135deg, #34D399, #059669)" }}
          >
            Save Self-Assessment ✓
          </button>
        ) : (
          <div className="mt-3 rounded-xl p-3 flex items-center gap-3" style={{ background: "#ecfdf5" }}>
            <span className="text-2xl">🌟</span>
            <p className="font-bold text-green-700">
              Total: {Object.values(rubricScores).reduce((a, b) => a + b, 0)}/{SPEAKING_RUBRIC.length * 5} — Great reflection! Keep that goal in mind.
            </p>
          </div>
        )}
      </ExerciseCard>

      {/* Homework */}
      <div
        className="rounded-2xl overflow-hidden shadow-xl"
        style={{ background: "linear-gradient(135deg, #1e1b4b, #3730a3)", border: "2px solid #4338ca" }}
      >
        <div className="p-5">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">📱</span>
            <div>
              <p className="text-xs font-black text-indigo-300 uppercase tracking-widest">Homework</p>
              <h3 className="font-pacifico text-white text-xl">{HOMEWORK.title}</h3>
              <p className="text-indigo-300 text-xs">⏱ {HOMEWORK.time} · Due next class</p>
            </div>
          </div>
          <p className="text-white/90 text-sm leading-relaxed mb-4">{HOMEWORK.task}</p>
          <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.1)" }}>
            <p className="text-indigo-200 font-black text-xs uppercase mb-2">✅ Self-Checklist before submitting:</p>
            <div className="space-y-1.5">
              {HOMEWORK.checklist.map((item, i) => (
                <HomeworkCheckItem key={i} text={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeworkCheckItem({ text }: { text: string }) {
  const [checked, setChecked] = useState(false);
  return (
    <div
      onClick={() => setChecked(!checked)}
      className="flex items-center gap-2 cursor-pointer group"
    >
      <div
        className="w-5 h-5 rounded-md flex-shrink-0 flex items-center justify-center transition-all"
        style={{
          background: checked ? "#34D399" : "rgba(255,255,255,0.15)",
          border: `2px solid ${checked ? "#34D399" : "rgba(255,255,255,0.3)"}`,
        }}
      >
        {checked && <span className="text-white text-xs font-black">✓</span>}
      </div>
      <p className="text-sm text-white/80 group-hover:text-white transition-colors" style={{ textDecoration: checked ? "line-through" : "none", opacity: checked ? 0.6 : 1 }}>
        {text}
      </p>
    </div>
  );
}

// ── Red/Green Flags mini activity ──
const FLAGS_DATA = [
  { behaviour: "Always texts back quickly", isGreen: true },
  { behaviour: "Cancels plans at the last minute — every time", isGreen: false },
  { behaviour: "Remembers small things you mentioned", isGreen: true },
  { behaviour: "Gets angry when you talk to other friends", isGreen: false },
  { behaviour: "Respects your 'no' without arguing", isGreen: true },
  { behaviour: "Reads your messages but never replies", isGreen: false },
  { behaviour: "Makes you laugh every conversation", isGreen: true },
  { behaviour: "Tells you who you can and can't talk to", isGreen: false },
  { behaviour: "Shares their snacks with you 🍕", isGreen: true },
  { behaviour: "Makes fun of the things you care about", isGreen: false },
];

function RedGreenFlagsActivity() {
  const [answers, setAnswers] = useState<Record<number, boolean | null>>({});
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);

  const checkFlags = () => {
    let sc = 0;
    FLAGS_DATA.forEach((item, i) => {
      if (answers[i] === item.isGreen) sc++;
    });
    setScore(sc);
    setChecked(true);
  };

  return (
    <div>
      <div className="grid sm:grid-cols-2 gap-2 mb-4">
        {FLAGS_DATA.map((item, i) => {
          const selected = answers[i];
          return (
            <div
              key={i}
              className="rounded-xl p-3"
              style={{
                background: checked
                  ? item.isGreen ? "#ecfdf5" : "#fff0f0"
                  : "#f9fafb",
                border: `1.5px solid ${checked ? (item.isGreen ? "#10b981" : "#ef4444") : "#e5e7eb"}`,
              }}
            >
              <p className="text-sm font-semibold text-gray-700 mb-2">{item.behaviour}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => !checked && setAnswers(prev => ({ ...prev, [i]: true }))}
                  disabled={checked}
                  className="flex-1 py-1 rounded-lg text-xs font-black transition-all"
                  style={{
                    background: selected === true
                      ? (checked ? (item.isGreen ? "#10b981" : "#ef4444") : "#34D399")
                      : (checked && item.isGreen ? "#d1fae5" : "#f0fdf4"),
                    color: selected === true ? "white" : "#065f46",
                    border: `2px solid ${selected === true ? "#10b981" : "#a7f3d0"}`,
                  }}
                >
                  💚 Green Flag
                </button>
                <button
                  onClick={() => !checked && setAnswers(prev => ({ ...prev, [i]: false }))}
                  disabled={checked}
                  className="flex-1 py-1 rounded-lg text-xs font-black transition-all"
                  style={{
                    background: selected === false
                      ? (checked ? (!item.isGreen ? "#10b981" : "#ef4444") : "#ef4444")
                      : (checked && !item.isGreen ? "#d1fae5" : "#fff5f5"),
                    color: selected === false ? "white" : "#991b1b",
                    border: `2px solid ${selected === false ? "#ef4444" : "#fca5a5"}`,
                  }}
                >
                  🚩 Red Flag
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {!checked ? (
        <button
          onClick={checkFlags}
          className="px-6 py-2.5 rounded-xl text-white font-bold text-sm hover:scale-105 transition-all"
          style={{ background: "linear-gradient(135deg, #34D399, #059669)" }}
        >
          Check Answers ✓
        </button>
      ) : (
        <div className="rounded-xl p-3 flex items-center gap-3" style={{ background: "#ecfdf5", border: "1.5px solid #a7f3d0" }}>
          <span className="text-2xl">🎯</span>
          <p className="font-bold text-green-700">Score: {score}/{FLAGS_DATA.length} — {score === 10 ? "Perfect! You know your flags! 🔥" : score >= 7 ? "Great awareness! 💪" : "Think carefully about each one! 🤔"}</p>
        </div>
      )}
    </div>
  );
}
