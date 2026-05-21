// ─── WORKBOOK DATA ─── Summer Romance & Dating | B1 | 90 min ───

export const LESSON_META = {
  title: "Summer Romance & Dating",
  subtitle: "Unit 7 · B1 · 90 minutes",
  emoji: "💘",
  objectives: [
    { bloom: "Apply", icon: "📝", text: "use the Present Perfect and Past Simple correctly to describe romantic experiences and events (Apply)" },
    { bloom: "Analyse", icon: "🔍", text: "identify meaning and collocations of dating vocabulary and use words in natural context (Analyse)" },
    { bloom: "Create", icon: "🎤", text: "produce a short conversation to ask someone on a date using target language and polite expressions (Create)" },
  ],
};

// ─── SECTION 1: SPEAKING WARM-UP ────────────────────────────────
export const WARM_UP_QUESTIONS = [
  "Have you ever watched a romantic film or series this summer? What happened in it?",
  "Do you think it's easier to meet new people online or in real life? Why?",
  "What's your idea of a perfect first date? Where would you go?",
  "What makes someone interesting to talk to — looks, humour, or something else?",
  "Would you ever ask someone out by text, or would you do it face to face? Why?",
];

export const FUN_FACTS = [
  { fact: "The average person falls in love about 7 times before getting married.", emoji: "💕" },
  { fact: "A study found that it takes only 4 minutes to decide if you like someone.", emoji: "⏱️" },
  { fact: "Holding hands with someone you like actually reduces stress hormones.", emoji: "🤝" },
  { fact: "The word 'flirt' originally meant to move quickly — like a butterfly!", emoji: "🦋" },
  { fact: "In France, kissing on both cheeks as a greeting is totally normal — even with strangers!", emoji: "🇫🇷" },
  { fact: "Research shows that people smile 50% more when they're talking to someone they fancy.", emoji: "😊" },
  { fact: "The first 'dating app' was created in 1965 — long before smartphones!", emoji: "📱" },
  { fact: "Making someone laugh is one of the top things people look for in a partner.", emoji: "😂" },
  { fact: "'Butterflies in your stomach' is a real physical feeling caused by adrenaline.", emoji: "🦋" },
  { fact: "A study found that couples who met online have slightly longer relationships on average.", emoji: "💻" },
];

// ─── SECTION 2: VOCABULARY ──────────────────────────────────────
export const VOCAB_WORDS = [
  { word: "crush", definition: "a strong romantic feeling for someone you are not in a relationship with", example: "I've had a crush on him all summer." },
  { word: "ask out", definition: "to invite someone on a romantic date", example: "He finally asked her out after weeks of chatting." },
  { word: "flirt", definition: "to behave in a playful, romantic way with someone", example: "She was flirting with him at the beach party." },
  { word: "ghosting", definition: "suddenly stopping all communication with someone without explanation", example: "He started ghosting her after their second date." },
  { word: "text back", definition: "to reply to someone's message", example: "Why hasn't she texted back yet?" },
  { word: "butterflies", definition: "a nervous, excited feeling in your stomach (usually about someone you like)", example: "I get butterflies every time I see him." },
  { word: "red flag", definition: "a sign that something is wrong or that a person might not be a good partner", example: "Ignoring your messages is a total red flag." },
  { word: "green flag", definition: "a positive sign that someone is a good, trustworthy person", example: "He remembered my favourite song — total green flag!" },
  { word: "vibe", definition: "the general feeling or atmosphere that a person or place gives off", example: "The vibe between them was amazing from the start." },
  { word: "match", definition: "(on a dating app) two people who both like each other's profiles", example: "I got a match on the app but haven't messaged yet." },
  { word: "date", definition: "a romantic meeting between two people", example: "We went on our first date to the local café." },
  { word: "fall for", definition: "to develop strong romantic feelings for someone", example: "She started to fall for him over the summer." },
];

export const WORD_SORTER_WORDS = [
  "crush", "ghosting", "flirt", "butterflies", "red flag", "green flag",
  "vibe", "ask out", "match", "text back", "fall for", "date",
  "connection", "jealous", "romantic", "awkward",
];

export const WORD_SORTER_CATEGORIES = [
  { label: "💬 Actions / Verbs", words: ["flirt", "ask out", "text back", "fall for"] },
  { label: "😍 Positive Signs", words: ["green flag", "butterflies", "vibe", "connection"] },
  { label: "🚩 Warning Signs", words: ["red flag", "ghosting", "jealous", "awkward"] },
  { label: "💘 Dating Nouns", words: ["crush", "match", "date", "romantic"] },
];

export const ODD_ONE_OUT = [
  { words: ["crush", "match", "partner", "ghosting"], odd: "ghosting", reason: "The others describe a romantic connection/person; 'ghosting' describes a negative action." },
  { words: ["flirt", "text back", "ask out", "fall for"], odd: "text back", reason: "The others are specifically romantic actions; 'text back' is a general communication action." },
  { words: ["butterflies", "nervous", "excited", "ghosting"], odd: "ghosting", reason: "The others describe feelings; 'ghosting' describes a behaviour." },
  { words: ["red flag", "green flag", "vibe", "warning sign"], odd: "vibe", reason: "The others are specifically evaluative signs; 'vibe' is a more general atmosphere word." },
  { words: ["romantic", "awkward", "jealous", "connection"], odd: "connection", reason: "The others are adjectives; 'connection' is a noun." },
  { words: ["date", "match", "crush", "ghosting"], odd: "ghosting", reason: "The others can be positive or neutral dating terms; 'ghosting' is always negative." },
];

export const VOCAB_MATCH = [
  { word: "ask out", def: "to invite someone on a romantic date" },
  { word: "butterflies", def: "a nervous excited feeling about someone you like" },
  { word: "red flag", def: "a sign that a person might not be good for you" },
  { word: "ghosting", def: "cutting off all contact without explanation" },
  { word: "vibe", def: "the feeling or atmosphere a person gives off" },
  { word: "fall for", def: "to develop romantic feelings for someone" },
  { word: "green flag", def: "a positive sign someone is trustworthy" },
  { word: "crush", def: "strong feelings for someone you're not dating" },
];

export const REPHRASE_SENTENCES = [
  { sentence: "She stopped talking to him without any explanation.", word: "ghosting", answer: "She started ghosting him." },
  { sentence: "He invited her to go for coffee with him.", word: "asked out", answer: "He asked her out for coffee." },
  { sentence: "I feel really nervous and excited when I see him.", word: "butterflies", answer: "I get butterflies when I see him." },
  { sentence: "He is not good at talking to people he likes.", word: "awkward", answer: "He is awkward around people he likes." },
  { sentence: "I started to have strong feelings for her.", word: "fall for", answer: "I started to fall for her." },
  { sentence: "The way he remembered my birthday was a positive sign.", word: "green flag", answer: "Remembering my birthday was a total green flag." },
];

// ─── SECTION 3: READING ─────────────────────────────────────────
export const READING_TEXT = `
<p class="mb-3"><strong>A Summer to Remember</strong></p>
<p class="mb-3"><em>From a teen lifestyle blog — <strong>SummerDiaries.net</strong></em></p>

<p class="mb-3">This summer, <strong>Maya</strong> did something she had never done before — she downloaded a dating app. She was seventeen and felt a little <mark data-word="nervous">nervous</mark> at first, but her friend Jade told her it was totally normal. "Everyone's doing it," Jade said. "Just be yourself."</p>

<p class="mb-3">Maya set up her profile on a Tuesday afternoon. She included her favourite music (indie pop and K-pop), her love of hiking, and a photo from the school trip to Barcelona. Within a few hours, she had already received several <mark data-word="matches">matches</mark>. One of them caught her eye immediately — a boy called Leo, who had written in his bio: <em>"Looking for someone to explore the city with this summer. No ghosting, please."</em></p>

<p class="mb-3">They started chatting on Wednesday. Leo was funny and always <mark data-word="texted back">texted back</mark> within minutes — a definite green flag. By Friday, he had already suggested meeting at the local street food market. Maya felt the <mark data-word="butterflies">butterflies</mark> in her stomach straight away. <em>"I've never felt like this about anyone so quickly,"</em> she told Jade.</p>

<p class="mb-3">At the market, they talked for three hours. Leo remembered every little detail she had mentioned in their messages — her favourite food, her dog's name, her dream to travel to Japan. He wasn't on his phone the whole time. These were all massive <mark data-word="green flags">green flags</mark>. By the end of the evening, Maya had completely <mark data-word="fallen for">fallen for</mark> him. She had met someone who made her feel comfortable, respected, and excited at the same time.</p>

<p class="mb-3">The next morning, Leo sent her a message: <em>"I had an amazing time. Would you like to go out again?"</em> Maya smiled at her screen and immediately texted back: <em>"I'd love to."</em></p>

<p class="mb-3">Their story was just beginning — and it felt like the start of the best summer she had ever had.</p>
`;

export const TRUE_FALSE_NG = [
  { statement: "Maya downloaded a dating app for the first time this summer.", answer: "TRUE", line: "Para 1: 'she had never done before — she downloaded a dating app'" },
  { statement: "Maya's friend Jade told her dating apps were dangerous.", answer: "FALSE", line: "Para 1: Jade said 'it was totally normal'" },
  { statement: "Maya included a photo from a trip to Rome in her profile.", answer: "FALSE", line: "Para 2: 'a photo from the school trip to Barcelona'" },
  { statement: "Leo's bio mentioned that he didn't like ghosting.", answer: "TRUE", line: "Para 2: 'No ghosting, please'" },
  { statement: "Leo and Maya first met at a cinema.", answer: "FALSE", line: "Para 3: 'meeting at the local street food market'" },
  { statement: "Leo had forgotten the details Maya mentioned online.", answer: "FALSE", line: "Para 4: 'Leo remembered every little detail'" },
  { statement: "Maya had been on many dates before meeting Leo.", answer: "NOT GIVEN", line: "The text doesn't mention Maya's past dating experience." },
  { statement: "The next morning Leo asked Maya out again.", answer: "TRUE", line: "Para 5: 'Would you like to go out again?'" },
];

export const VOCAB_IN_CONTEXT = [
  { word: "nervous", context: "She felt a little nervous at first, but her friend told her it was totally normal.", meaning: "worried or anxious about something new" },
  { word: "matches", context: "she had already received several matches", meaning: "people who liked her profile back on the app" },
  { word: "texted back", context: "Leo was funny and always texted back within minutes", meaning: "replied to her messages quickly" },
  { word: "fallen for", context: "Maya had completely fallen for him", meaning: "developed strong romantic feelings for someone" },
];

// ─── SECTION 4: GRAMMAR ─────────────────────────────────────────
export const GRAMMAR_BOX = {
  title: "Present Perfect vs Past Simple",
  sections: [
    {
      subtitle: "Present Perfect",
      colour: "purple",
      form: "have/has + past participle",
      uses: [
        "Life experiences (without a specific time): I've downloaded a dating app.",
        "Recent events with present result: He has texted back! (I'm happy now)",
        "With: ever, never, already, yet, just, for, since",
      ],
      examples: [
        "Have you ever been on a date? ✅",
        "I've already matched with someone. ✅",
        "She hasn't texted back yet. ✅",
      ],
    },
    {
      subtitle: "Past Simple",
      colour: "pink",
      form: "verb + -ed / irregular form",
      uses: [
        "Completed actions at a specific time in the past",
        "With: yesterday, last summer, in 2023, ago, when",
      ],
      examples: [
        "We met at the market last Friday. ✅",
        "He sent her a message yesterday. ✅",
        "She felt butterflies on their first date. ✅",
      ],
    },
    {
      subtitle: "⚠️ Common Errors",
      colour: "yellow",
      errors: [
        "❌ I have seen him yesterday → ✅ I saw him yesterday (finished time = Past Simple)",
        "❌ Did you ever try a dating app? → ✅ Have you ever tried a dating app? (experience = Present Perfect)",
        "❌ She has called me last night → ✅ She called me last night",
      ],
    },
  ],
};

// Guided Discovery
export const GUIDED_DISCOVERY_TEXT = `Look at these sentences from the blog post and the chat. 
Then answer the questions below.

1. "I've never felt like this about anyone so quickly." (Maya, Friday)
2. "She downloaded the app for the first time this summer." (blog, Tuesday)
3. "He has already suggested a date." (blog, Friday)
4. "They met at the street food market last Friday." (blog)`;

export const CCQ_QUESTIONS = [
  { q: "In sentence 1, do we know exactly WHEN Maya felt like this?", a: "No", hint: "No specific time is given → Present Perfect" },
  { q: "In sentence 2, is Tuesday finished? Is it still Tuesday now?", a: "Yes", hint: "The time is finished → Past Simple" },
  { q: "In sentence 3, does 'already' suggest the action happened before now?", a: "Yes", hint: "Already + present result → Present Perfect" },
];

// Gap-fill grammar
export const GRAMMAR_GAPFILL = {
  wordList: ["have never met", "sent", "fell", "have already matched", "texted back", "went", "has just arrived", "haven't seen"],
  sentences: [
    { text: "Maya and Leo ___ at the street food market last Friday.", answer: "went", display: "went" },
    { text: "She ___ him since the weekend — she's a little worried.", answer: "haven't seen", display: "haven't seen" },
    { text: "Leo ___ her a message the morning after their date.", answer: "sent", display: "sent" },
    { text: "She ___ anyone like Leo before — he's different.", answer: "have never met", display: "have never met" },
    { text: "Look! Leo ___. His message just popped up!", answer: "has just arrived", display: "has just arrived" },
    { text: "I ___ with three people on the app, but I only like one.", answer: "have already matched", display: "have already matched" },
    { text: "Maya ___ for Leo the moment she saw his profile.", answer: "fell", display: "fell" },
    { text: "He always ___ within five minutes — total green flag.", answer: "texted back", display: "texted back" },
  ],
};

// Brackets exercise
export const BRACKETS_EXERCISE = [
  { text: "Maya ___ (feel) butterflies when she first ___ (read) Leo's message.", answers: ["felt", "read"] },
  { text: "He ___ (send) her a voice note — how cute is that?!", answers: ["has sent"] },
  { text: "They ___ (not meet) in person yet, but they chat every day.", answers: ["haven't met"] },
  { text: "I ___ (download) the app last month, and I already ___ (go) on two dates.", answers: ["downloaded", "have gone"] },
  { text: "She ___ (ever / try) a dating app before this summer?", answers: ["Has she ever tried"] },
  { text: "We ___ (talk) for three hours at the market — time flew!", answers: ["talked"] },
  { text: "He ___ (not text back) yet, and it's been two days. Ugh.", answers: ["hasn't texted back"] },
  { text: "She ___ (just / tell) her friend about the date — she's so excited!", answers: ["has just told"] },
];

// Multiple choice ABCD
export const ABCD_EXERCISE = [
  {
    text: "A: Have you ever ___ someone on a dating app?\nB: Yes! I ___ someone amazing last summer.",
    gaps: [
      { options: ["A. met", "B. meet", "C. meeting", "D. have met"], answer: "A. met" },
      { options: ["A. have met", "B. met", "C. meet", "D. am meeting"], answer: "B. met" },
    ],
  },
  {
    text: "I ___ (1) three matches today, but I ___ (2) back to anyone yet.",
    gaps: [
      { options: ["A. got", "B. have got", "C. get", "D. had got"], answer: "B. have got" },
      { options: ["A. didn't write", "B. haven't written", "C. don't write", "D. hadn't written"], answer: "B. haven't written" },
    ],
  },
  {
    text: "She ___ him on the first day of summer camp, and now they're inseparable.",
    gaps: [
      { options: ["A. has met", "B. meets", "C. met", "D. have met"], answer: "C. met" },
    ],
  },
  {
    text: "He looks familiar. I think I ___ him somewhere before.",
    gaps: [
      { options: ["A. saw", "B. have seen", "C. see", "D. had seen"], answer: "B. have seen" },
    ],
  },
];

// Two options slash
export const SLASH_EXERCISE = [
  { text: "A: Did you ever / Have you ever been on a blind date? B: Yes! I went / have gone on one last spring.", answers: ["Have you ever", "went"] },
  { text: "She sent / has sent him a message an hour ago, but he didn't / hasn't replied yet.", answers: ["sent", "hasn't replied"] },
  { text: "We met / have met at the beach — it was / has been last July.", answers: ["met", "was"] },
  { text: "I already texted / have already texted him, but he didn't / hasn't texted back.", answers: ["have already texted", "hasn't texted back"] },
  { text: "A: How long did you know / have you known her? B: We first spoke / have first spoken in June.", answers: ["have you known", "spoke"] },
  { text: "He never asked / has never asked anyone out before — this is his first time!", answers: ["has never asked"] },
];

// Error correction
export const ERROR_CORRECTION = [
  { sentence: "I have met him at the park yesterday.", error: "have met → met", correction: "I met him at the park yesterday." },
  { sentence: "Did you ever felt nervous before a date?", error: "felt → feel / Did → Have", correction: "Have you ever felt nervous before a date?" },
  { sentence: "She has sent him a text last night.", error: "has sent → sent", correction: "She sent him a text last night." },
  { sentence: "We didn't go on a date yet.", error: "didn't go → haven't gone", correction: "We haven't gone on a date yet." },
  { sentence: "He never texted back since three days.", error: "since → for", correction: "He hasn't texted back for three days." },
  { sentence: "Have you seen him last summer?", error: "Have you seen → Did you see", correction: "Did you see him last summer?" },
  { sentence: "I've fall for her the moment I saw her profile.", error: "fall → fallen", correction: "I've fallen for her the moment I saw her profile." },
  { sentence: "They are together since June.", error: "are → have been", correction: "They have been together since June." },
];

// Rewrite sentences
export const REWRITE_SENTENCES = [
  { original: "This is the first time he has ever asked anyone out.", target: "He has never asked anyone out before.", hint: "Use: He has never..." },
  { original: "She sent him a message. That was yesterday.", target: "She sent him a message yesterday.", hint: "Use Past Simple with 'yesterday'" },
  { original: "We started dating in June. We are still together.", target: "We have been dating since June.", hint: "Use: have been + since" },
  { original: "I don't have his number. I lost it.", target: "I have lost his number.", hint: "Use: present result" },
  { original: "The last time they met was two weeks ago.", target: "They haven't met for two weeks.", hint: "Use: haven't + for" },
  { original: "She started using the app a month ago. She's still using it.", target: "She has been using the app for a month.", hint: "Use: have been + for" },
];

// Matching halves
export const MATCHING_HALVES = {
  left: [
    "I've never met",
    "She sent him a voice note",
    "Have you ever been",
    "They haven't spoken",
    "He has just matched",
    "We went on our first date",
    "She has already told",
    "Did you feel",
  ],
  right: [
    "since they argued last week.",
    "anyone as interesting as Leo before.",
    "butterflies when you first saw him?",
    "last Saturday at the beach café.",
    "on a blind date before?",
    "with someone new — exciting!",
    "an hour ago — he loved it.",
    "all her friends about the date.",
  ],
  answers: [1, 6, 4, 0, 5, 3, 7, 2],
};

// ─── SECTION 5: DIALOGUE ────────────────────────────────────────
export const DIALOGUE = {
  title: "DM Conversation 💬",
  context: "Leo and Maya are messaging after their first date.",
  exchanges: [
    { speaker: "Leo", text: "Hey! I had such a good time last night. Have you got home safely?" },
    { speaker: "Maya", text: "Yes! Just got back. I had an amazing time too 😊" },
    { speaker: "Leo", text: "I've never been to that street food market before — I loved it." },
    { speaker: "Maya", text: "Really? I've been there a few times but it was different with you 🥺" },
    { speaker: "Leo", text: "So... have you ever tried sushi? There's a great place near the park." },
    { speaker: "Maya", text: "I've tried it once but I wasn't sure. Would love to try it again though!" },
    { speaker: "Leo", text: "Perfect! How about this Saturday?" },
    { speaker: "Maya", text: "This Saturday works for me 🙌 What time?" },
    { speaker: "Leo", text: "Let's say 7 pm? I already checked — they open late." },
    { speaker: "Maya", text: "Amazing! See you Saturday then 💫" },
    { speaker: "Leo", text: "Can't wait. I'll text you the address later!" },
    { speaker: "Maya", text: "Sounds great. Oh — and Leo? Last night was really special. Thank you 💕" },
  ],
};

// ─── SECTION 6: SPEAKING ────────────────────────────────────────
export const LANGUAGE_BOX_SPEAKING = {
  title: "Useful Expressions for Asking Someone Out",
  sections: [
    {
      label: "Asking",
      phrases: [
        "Would you like to go for [coffee / a walk] sometime?",
        "I was wondering if you'd like to hang out this weekend?",
        "Are you free on [Saturday]? I know a great place.",
        "Would you be interested in going to [place] together?",
      ],
    },
    {
      label: "Accepting ✅",
      phrases: [
        "That sounds great! I'd love to.",
        "Why not? Let's do it!",
        "I'd really like that.",
      ],
    },
    {
      label: "Declining Politely 🚫",
      phrases: [
        "That's really sweet, but I don't think I can.",
        "I'm sorry, I'm actually busy that day.",
        "I appreciate it, but I think we're better as friends.",
      ],
    },
    {
      label: "Reacting & Keeping the Conversation Going",
      phrases: [
        "Really? That's so cool!",
        "I didn't know that about you!",
        "What kind of music/food/places do you like?",
        "We should definitely do that again!",
      ],
    },
  ],
};

export const ROLE_PLAY_CARDS = [
  {
    id: "A",
    emoji: "😊",
    title: "Student A — The one asking",
    scenario: "You are at a summer beach party. You've been chatting with Student B all evening. You really like them. Try to ask them out. Use the language box for help.",
    prompts: [
      "Start the conversation naturally.",
      "Find something you have in common.",
      "Ask them out for something specific (time + place).",
      "React to their answer politely.",
    ],
    colour: "pink",
  },
  {
    id: "B",
    emoji: "🌟",
    title: "Student B — Responding",
    scenario: "You're at a summer beach party. Student A has been talking to you all night. You think they're nice. Decide: will you accept or politely decline?",
    prompts: [
      "Keep the conversation going at first.",
      "Drop hints about your interests.",
      "Accept or decline politely.",
      "If you accept — suggest a detail (bring a friend, change the time, etc.)",
    ],
    colour: "purple",
  },
];

export const SPEAKING_RUBRIC = [
  { criterion: "Fluency", description: "Spoke without long pauses; kept the conversation going", max: 5 },
  { criterion: "Grammar Accuracy", description: "Used Present Perfect and Past Simple correctly", max: 5 },
  { criterion: "Vocabulary Range", description: "Used target vocabulary naturally (red/green flags, butterflies, etc.)", max: 5 },
  { criterion: "Communication", description: "Was polite, clear, and respectful — maintained the interaction", max: 5 },
];

// ─── HOMEWORK ────────────────────────────────────────────────────
export const HOMEWORK = {
  title: "📱 Write Your Story",
  time: "15 minutes",
  task: "Write a short post (80–100 words) for a teen blog called SummerDiaries.net. Describe a moment when you (or a character you invent) met someone interesting this summer. Use at least 5 words from the vocabulary list and at least 3 examples of Present Perfect or Past Simple. Give your post a catchy title!",
  checklist: [
    "I used at least 5 vocabulary words from today's lesson",
    "I used Present Perfect at least once correctly",
    "I used Past Simple at least twice correctly",
    "My post has a title and is 80–100 words",
    "I described feelings as well as events",
  ],
};

// ─── ANSWER KEYS ─────────────────────────────────────────────────
export const ANSWER_KEY_NOTES = {
  gapFill: "Check answers against the word list. Multiple placements may be possible — discuss with teacher.",
  brackets: "Marking: 1 mark per correct form. Accept contracted forms (e.g., haven't = have not).",
  errCorr: "Award 1 mark for identifying the error, 1 mark for the correct form.",
};
