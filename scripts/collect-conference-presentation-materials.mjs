import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const generatedAt = new Date().toISOString();
const accessDate = generatedAt.slice(0, 10);

const outputDataFile = "data/agent-harness-conference-presentation-materials.json";
const outputReferenceFile = "data/reference-index/agent-harness-conference-sources.json";
const outputReportFile = "reports/presentations/00-agent-harness-conference-presentation-patterns.md";
const outputCatalogFile = "reports/presentations/conference-source-catalog.md";
const outputPlaybookFile = "reports/presentations/codex-conference-talk-playbook.md";

const sourcePages = [
  {
    id: "anthropic-events",
    title: "Anthropic Events",
    event: "Anthropic developer events",
    source: "Anthropic",
    url: "https://www.anthropic.com/events",
    materialType: "event-index",
    format: "html",
    summary: "Anthropic event index for Claude developer conferences, webinars, and builder events.",
    tags: ["official", "claude-code", "developer-conference", "workshop"]
  },
  {
    id: "code-with-claude",
    title: "Code with Claude developer conference",
    event: "Code with Claude",
    source: "Anthropic",
    url: "https://claude.com/code-with-claude",
    materialType: "conference-page",
    format: "html",
    summary: "Developer conference built around hands-on workshops, live demos, and direct conversations with Claude teams.",
    tags: ["official", "claude-code", "hands-on-workshop", "live-demo", "office-hours"]
  },
  {
    id: "code-with-claude-2025-news",
    title: "Introducing Code with Claude",
    event: "Code with Claude 2025",
    source: "Anthropic",
    url: "https://www.anthropic.com/news/Introducing-code-with-claude",
    materialType: "announcement",
    format: "html",
    summary: "Official launch note for Code with Claude, centered on real-world implementation and best practices for Anthropic APIs, CLI tools, and MCP.",
    tags: ["official", "claude-code", "mcp", "best-practice", "real-world-implementation"]
  },
  {
    id: "code-with-claude-youtube-playlist",
    title: "Code w/ Claude Developer Conference playlist",
    event: "Code with Claude 2025",
    source: "Anthropic YouTube",
    url: "https://www.youtube.com/playlist?list=PLf2m23nhTg1P5BsOHUOXyQz5RhfUSSVUi",
    materialType: "recording-playlist",
    format: "video-playlist",
    summary: "Official playlist for Code with Claude, Anthropic's first developer conference.",
    tags: ["official", "claude-code", "recording", "developer-conference", "workshop"]
  },
  {
    id: "origin-story-claude-code-inbound-2025",
    title: "The Origin Story of Claude Code",
    event: "INBOUND 2025",
    source: "HubSpot Live YouTube",
    url: "https://www.youtube.com/watch?v=Mt0j7IS4qE4",
    materialType: "recording",
    format: "video",
    summary: "Conference talk in which Dario Amodei discusses how Claude Code began as an internal Anthropic experiment and spread through the company.",
    tags: ["claude-code", "origin-story", "internal-adoption", "recording", "conference-method"]
  },
  {
    id: "claude-code-in-an-hour",
    title: "Claude Code in an Hour: A Developer's Intro",
    event: "Anthropic webinar",
    source: "Anthropic",
    url: "https://www.anthropic.com/webinars/claude-code-in-an-hour-a-developers-intro",
    materialType: "webinar",
    format: "html-video",
    summary: "Webinar positioning Claude Code through under-the-hood explanation, end-to-end live demo, and practical best practices.",
    tags: ["official", "claude-code", "live-demo", "developer-education"]
  },
  {
    id: "builder-summit-bengaluru",
    title: "Builder Summit Bengaluru",
    event: "Anthropic Builder Summit",
    source: "Anthropic",
    url: "https://www.anthropic.com/events/builder-summit-bengaluru",
    materialType: "conference-page",
    format: "html",
    summary: "Builder summit with Claude Code advanced techniques and live demos from teams using Claude Code in their own workflows.",
    tags: ["official", "claude-code", "advanced-techniques", "live-demo", "workflow"]
  },
  {
    id: "responsible-agents",
    title: "Agentic AI in Action: Building Useful, Safe and Reliable Agents",
    event: "Anthropic responsible agents event",
    source: "Anthropic",
    url: "https://www.anthropic.com/events/agentic-ai-in-action",
    materialType: "event-page",
    format: "html",
    summary: "Responsible agent event focused on useful, safe, and reliable agentic AI.",
    tags: ["official", "agent-safety", "reliability", "responsible-ai"]
  },
  {
    id: "codex-at-devday",
    title: "How Codex ran OpenAI DevDay 2025",
    event: "OpenAI DevDay 2025",
    source: "OpenAI Developers",
    url: "https://developers.openai.com/blog/codex-at-devday",
    materialType: "technical-blog",
    format: "html",
    summary: "Official OpenAI case study showing Codex used for demos, booth prototypes, documentation, code review, parallel work, and event execution.",
    tags: ["official", "codex", "devday", "case-study", "parallel-work", "demo-production"]
  },
  {
    id: "openai-devday",
    title: "OpenAI DevDay",
    event: "OpenAI DevDay 2025",
    source: "OpenAI",
    url: "https://openai.com/devday/",
    materialType: "conference-page",
    format: "html",
    summary: "OpenAI developer conference page. The page is used as metadata-only because direct fetch access may vary by network.",
    tags: ["official", "devday", "agentkit", "codex", "developer-conference"]
  },
  {
    id: "devday-keynote-2025",
    title: "OpenAI DevDay 2025 keynote",
    event: "OpenAI DevDay 2025",
    source: "OpenAI YouTube",
    url: "https://www.youtube.com/watch?v=hS1YqcewH0c",
    materialType: "recording",
    format: "video",
    summary: "Official keynote recording for OpenAI DevDay 2025.",
    tags: ["official", "devday", "keynote", "agentkit", "codex"]
  },
  {
    id: "codex-devday-talk",
    title: "DevDay talk about Codex",
    event: "OpenAI DevDay 2025",
    source: "OpenAI YouTube",
    url: "https://www.youtube.com/watch?v=Gr41tYOzE20",
    materialType: "recording",
    format: "video",
    summary: "OpenAI DevDay session linked from the Codex DevDay case study.",
    tags: ["official", "codex", "developer-workflow", "recording"]
  },
  {
    id: "ai-engineer-home",
    title: "AI Engineer World's Fair",
    event: "AI Engineer World's Fair",
    source: "AI Engineer",
    url: "https://www.ai.engineer/",
    materialType: "conference-index",
    format: "html",
    summary: "Conference hub for AI Engineer events and code-focused conferences.",
    tags: ["ai-engineering", "conference", "agents", "evals", "mcp"]
  },
  {
    id: "ai-engineer-2026-worldsfair",
    title: "AI Engineer World's Fair 2026",
    event: "AI Engineer World's Fair 2026",
    source: "AI Engineer",
    url: "https://www.ai.engineer/worldsfair",
    materialType: "conference-page",
    format: "html",
    summary: "Large technical AI conference with tracks, workshops, expo, and practitioner talks from engineers shipping AI systems.",
    tags: ["ai-engineering", "workshop", "agent-reliability", "evals", "mcp"]
  },
  {
    id: "ai-engineer-2026-schedule",
    title: "AI Engineer World's Fair 2026 schedule",
    event: "AI Engineer World's Fair 2026",
    source: "AI Engineer",
    url: "https://www.ai.engineer/schedule",
    materialType: "schedule",
    format: "nextjs-json-html",
    summary: "Open schedule page with session and speaker data advertised as open data.",
    tags: ["schedule", "open-data", "harness-engineering", "agentic-engineering", "evals", "context-engineering"]
  },
  {
    id: "ai-engineer-code-summit-2025",
    title: "AI Engineer Code Summit 2025",
    event: "AI Engineer Code Summit 2025",
    source: "AI Engineer",
    url: "https://www.ai.engineer/2025",
    materialType: "conference-page",
    format: "html",
    summary: "Dedicated code-focused AI Engineer event with coding-agent and practical engineering emphasis.",
    tags: ["ai-engineering", "coding-agents", "developer-tools", "practitioner-talks"]
  },
  {
    id: "claude-code-evolution-agentic-coding",
    title: "Claude Code & evolution of agentic coding",
    event: "AI Engineer",
    source: "AI Engineer YouTube",
    url: "https://www.youtube.com/watch?v=Lue8K2jqfKk",
    materialType: "recording",
    format: "video",
    summary: "AI Engineer recording focused on Claude Code and the evolution of agentic coding.",
    tags: ["claude-code", "agentic-coding", "developer-workflow", "recording"]
  },
  {
    id: "ai-engineer-wf-2025-day1",
    title: "AI Engineer World's Fair 2025 Day 1 keynotes and MCP",
    event: "AI Engineer World's Fair 2025",
    source: "AI Engineer YouTube",
    url: "https://www.youtube.com/watch?v=z4zXicOAF28",
    materialType: "recording",
    format: "video",
    summary: "AI Engineer World's Fair recording covering keynotes and MCP-oriented content.",
    tags: ["mcp", "keynote", "ai-engineering", "recording"]
  },
  {
    id: "interrupt-2026",
    title: "Interrupt 2026: The Agent Conference",
    event: "Interrupt 2026",
    source: "LangChain",
    url: "https://interrupt.langchain.com/",
    materialType: "conference-page",
    format: "html",
    summary: "LangChain's agent conference centered on teams shipping AI agents in production.",
    tags: ["agent-conference", "production-agents", "langchain", "evals", "multi-agent"]
  },
  {
    id: "interrupt-2026-recordings",
    title: "Interrupt 2026 recordings",
    event: "Interrupt 2026",
    source: "LangChain",
    url: "https://interrupt.langchain.com/recordings",
    materialType: "recording-index",
    format: "html-video",
    summary: "Recording index for Interrupt 2026, advertised as 23 talks from teams shipping agents in production.",
    tags: ["agent-conference", "recordings", "production-agents", "evals", "sandboxes"]
  },
  {
    id: "interrupt-2026-overview",
    title: "Everything we shipped at Interrupt",
    event: "Interrupt 2026",
    source: "LangChain",
    url: "https://www.langchain.com/blog/interrupt-2026-overview",
    materialType: "event-recap",
    format: "html",
    summary: "LangChain recap including production agent lifecycle, sandboxes, Deep Agents, Open SWE, and event shipments.",
    tags: ["event-recap", "agent-lifecycle", "sandbox", "open-swe", "production-agents"]
  },
  {
    id: "interrupt-2025-recap",
    title: "Interrupt 2025 recap",
    event: "Interrupt 2025",
    source: "LangChain",
    url: "https://www.langchain.com/blog/interrupt-2025-recap",
    materialType: "event-recap",
    format: "html",
    summary: "LangChain recap from the prior Interrupt conference.",
    tags: ["event-recap", "agents", "langchain", "production-lessons"]
  },
  {
    id: "interrupt-2025-keynote",
    title: "Interrupt 2025 keynote",
    event: "Interrupt 2025",
    source: "LangChain YouTube",
    url: "https://www.youtube.com/watch?v=DrygcOI-kG8",
    materialType: "recording",
    format: "video",
    summary: "Interrupt 2025 keynote recording.",
    tags: ["keynote", "recording", "agents", "langchain"]
  },
  {
    id: "github-universe-schedule-2025",
    title: "Your guide to GitHub Universe 2025: The schedule just launched",
    event: "GitHub Universe 2025",
    source: "GitHub Blog",
    url: "https://github.blog/news-insights/company-news/your-guide-to-github-universe-2025-the-schedule-just-launched/",
    materialType: "schedule-announcement",
    format: "html",
    summary: "GitHub Universe schedule announcement covering vibe coding, automation at scale, and AI-driven security.",
    tags: ["github-universe", "agentic-development", "automation", "security", "conference-method"]
  },
  {
    id: "github-agent-hq",
    title: "Introducing Agent HQ: Any agent, any way you work",
    event: "GitHub Universe 2025",
    source: "GitHub Blog",
    url: "https://github.blog/news-insights/company-news/welcome-home-agents/",
    materialType: "announcement",
    format: "html",
    summary: "Universe 2025 announcement for a unified workflow to orchestrate multiple coding agents.",
    tags: ["github-universe", "agent-orchestration", "multi-agent", "codex", "claude"]
  },
  {
    id: "github-universe-take-stage",
    title: "GitHub Universe is back: We want you to take the stage",
    event: "GitHub Universe",
    source: "GitHub Blog",
    url: "https://github.blog/news-insights/company-news/github-universe-is-back-we-want-you-to-take-the-stage/",
    materialType: "cfp-guide",
    format: "html",
    summary: "GitHub's guidance for stronger technical session proposals.",
    tags: ["cfp", "presentation-craft", "conference-method", "storytelling"]
  },
  {
    id: "github-universe-introvert-guide",
    title: "How to navigate GitHub Universe or any tech conference if you're an introvert",
    event: "GitHub Universe",
    source: "GitHub Blog",
    url: "https://github.blog/news-insights/company-news/how-to-navigate-github-universe-or-any-tech-conference-if-youre-an-introvert/",
    materialType: "conference-guide",
    format: "html",
    summary: "Practical conference navigation advice emphasizing preparation, session choice, and smaller interactions.",
    tags: ["conference-method", "developer-experience", "community"]
  },
  {
    id: "github-universe-2026",
    title: "GitHub Universe 2026",
    event: "GitHub Universe 2026",
    source: "GitHub",
    url: "https://githubuniverse.com/",
    materialType: "conference-page",
    format: "html",
    summary: "GitHub Universe virtual and recorded-session conference page.",
    tags: ["github-universe", "recordings", "developer-conference", "ai-agents"]
  },
  {
    id: "agentics-day-eu-2026",
    title: "Agentics Day: MCP + Agents Europe 2026",
    event: "KubeCon + CloudNativeCon Europe 2026",
    source: "Linux Foundation Events",
    url: "https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/co-located-events/agentics-day-mcp-agents/",
    materialType: "co-located-event",
    format: "html-video",
    summary: "CNCF-hosted co-located event dedicated to MCP and agents, with keynotes and breakout videos.",
    tags: ["cncf", "mcp", "agents", "cloud-native", "recordings"]
  },
  {
    id: "agentics-day-deep-dive",
    title: "KubeCon + CloudNativeCon Europe 2026 co-located event deep dive: Agentics Day",
    event: "KubeCon + CloudNativeCon Europe 2026",
    source: "CNCF",
    url: "https://www.cncf.io/blog/2026/02/20/kubecon-cloudnativecon-europe-2026-co-located-event-deep-dive-agentics-day-mcp-agents/",
    materialType: "event-deep-dive",
    format: "html",
    summary: "CNCF preview explaining Agentics Day as a half-day, community-driven MCP and agents event focused on real implementations, lessons, and deployment considerations.",
    tags: ["cncf", "mcp", "agents", "real-world-implementation", "deployment"]
  },
  {
    id: "agentics-day-na",
    title: "Agentics Day: MCP + Agents North America",
    event: "KubeCon + CloudNativeCon North America",
    source: "Linux Foundation Events",
    url: "https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/co-located-events/agentics-day-mcp-agents/",
    materialType: "co-located-event",
    format: "html",
    summary: "CNCF-hosted Agentics Day North America page for MCP and production AI agent practices.",
    tags: ["cncf", "mcp", "agents", "production-practice"]
  },
  {
    id: "oss-summit-korea-2025-cncf",
    title: "Exploring AI, observability and community at OSS Summit Korea 2025",
    event: "Open Source Summit Korea 2025",
    source: "CNCF",
    url: "https://www.cncf.io/blog/2025/12/09/exploring-ai-observability-and-community-at-oss-summit-korea-2025/",
    materialType: "event-recap",
    format: "html",
    summary: "CNCF recap of OSS Summit Korea 2025 highlighting AI, observability, community, and Korean open-source momentum.",
    tags: ["korea", "cncf", "observability", "ai", "community"]
  },
  {
    id: "oss-summit-korea-2025-schedule",
    title: "Open Source Summit Korea 2025 schedule",
    event: "Open Source Summit Korea 2025",
    source: "Linux Foundation Events",
    url: "https://events.linuxfoundation.org/archive/2025/open-source-summit-korea/",
    materialType: "schedule",
    format: "html",
    summary: "Archived schedule for the first Open Source Summit hosted in South Korea.",
    tags: ["korea", "open-source", "schedule", "ai"]
  },
  {
    id: "openssf-community-day-korea-2025",
    title: "OpenSSF Community Day Korea 2025 agenda",
    event: "OpenSSF Community Day Korea 2025",
    source: "OpenSSF",
    url: "https://openssf.org/blog/2025/09/05/openssf-community-day-korea-2025-agenda-live/",
    materialType: "agenda",
    format: "html",
    summary: "OpenSSF Korea event agenda spanning supply-chain security, AI/ML security, SBOM quality, policy, and practical OSS tooling.",
    tags: ["korea", "security", "ai-security", "supply-chain", "conference-method"]
  },
  {
    id: "vellum-ai-engineer-takeaways",
    title: "Big ideas from the AI Engineer World's Fair",
    event: "AI Engineer World's Fair 2025",
    source: "Vellum",
    url: "https://www.vellum.ai/blog/top-takeaways-from-the-ai-engineer-worlds-fair",
    materialType: "event-analysis",
    format: "html",
    summary: "Independent takeaway post identifying themes including agent reliability, MCP, infra, evals, GraphRAG, AI product, SWE agents, security, and voice.",
    tags: ["event-analysis", "agent-reliability", "mcp", "evals", "swe-agents"]
  },
  {
    id: "arcade-interrupt-guide",
    title: "LangChain Interrupt 2026 guide: must-see sessions",
    event: "Interrupt 2026",
    source: "Arcade.dev",
    url: "https://www.arcade.dev/blog/langchain-interrupt-2026-guide/",
    materialType: "event-guide",
    format: "html",
    summary: "Independent guide framing Interrupt 2026 around evals, multi-agent architectures, and tradeoffs of moving past demo phase.",
    tags: ["event-guide", "evals", "multi-agent", "production-agents", "beyond-demo"]
  }
];

const categoryRules = [
  ["harness-engineering", /harness|agent harness|skills|yaml|filesystem|workflow|orchestrat/i],
  ["coding-agents", /codex|claude code|coding agent|agentic coding|swe|developer|code/i],
  ["mcp-tooling", /\bmcp\b|model context protocol|tool/i],
  ["evals-observability", /eval|evaluation|observability|monitor|trace|quality|testing/i],
  ["sandbox-security", /sandbox|security|safe|risk|permission|guardrail|supply-chain|sbom/i],
  ["context-memory", /context|memory|continual|personal|knowledge|retrieval/i],
  ["production-agent", /production|deploy|lifecycle|enterprise|scale|customer|case study|real-world/i],
  ["conference-method", /workshop|keynote|office hour|cfp|agenda|schedule|recording|community|conference/i],
  ["presentation-craft", /story|proposal|stage|talk|presentation|demo/i],
  ["live-demo", /live demo|demo|prototype|built|debug/i]
];

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

function decodeHtml(text) {
  return String(text || "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\\u0026/g, "&");
}

function stripHtml(text) {
  return decodeHtml(String(text || "").replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

function slug(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 100);
}

function categoriesFor(...parts) {
  const haystack = parts.filter(Boolean).join("\n");
  const categories = categoryRules
    .filter(([, pattern]) => pattern.test(haystack))
    .map(([category]) => category);
  return [...new Set(categories.length ? categories : ["conference-method"])];
}

function qualitySignals(material) {
  const signals = [];
  if (/Anthropic|OpenAI|GitHub|CNCF|LangChain|Linux Foundation|OpenSSF|AI Engineer/i.test(material.source || "")) {
    signals.push("primary-or-conference-organizer-source");
  }
  if (/schedule|recording|webinar|conference|co-located-event|technical-blog/i.test(material.materialType || "")) {
    signals.push("direct-event-artifact");
  }
  if (safeArray(material.tags).some((tag) => /live-demo|workshop|hands-on|recording|open-data|evals|sandbox|mcp/i.test(tag))) {
    signals.push("actionable-format-signal");
  }
  if (material.event) signals.push("event-context-available");
  return signals;
}

async function fetchText(url) {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "ai-coding-research-browser/1.0 (+https://github.com/Hawardshin/ai-coding-agent-open-source-analysis)"
      }
    });
    if (!res.ok) {
      return { ok: false, status: res.status, text: "" };
    }
    return { ok: true, status: res.status, text: await res.text() };
  } catch (error) {
    return { ok: false, status: 0, text: "", error: String(error?.message || error) };
  }
}

function extractNextData(html) {
  const match = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
  if (!match) return null;
  try {
    return JSON.parse(match[1]);
  } catch {
    try {
      return JSON.parse(decodeHtml(match[1]));
    } catch {
      return null;
    }
  }
}

function extractScheduleSessions(nextData) {
  const pageProps = nextData?.props?.pageProps || {};
  const candidates = [
    pageProps.sessions,
    pageProps.schedule?.sessions,
    pageProps.data?.sessions,
    pageProps.dehydratedState?.queries?.flatMap?.((query) => query.state?.data?.sessions || [])
  ];
  return candidates.find((candidate) => Array.isArray(candidate) && candidate.length) || [];
}

function normalizeAiEngineerSession(session, index, eventName, scheduleUrl) {
  const title = stripHtml(session.title || session.name || `Untitled session ${index + 1}`);
  const description = stripHtml(session.description || session.abstract || session.summary || "");
  const track = stripHtml(session.trackTopic?.name || session.track?.name || session.trackTopic || session.track || "");
  const speakers = safeArray(session.speakers || session.sessionSpeakers)
    .map((speaker) => speaker.name || speaker.speaker?.name)
    .filter(Boolean);
  const room = stripHtml(session.roomNumber?.name || session.room?.name || session.room || "");
  const startsAt = session.startsAt || session.startTime || session.start || null;
  const tags = [
    "ai-engineer",
    "schedule-session",
    track && slug(track)
  ].filter(Boolean);
  return {
    id: `ai-engineer-${slug(eventName)}-${session.id || slug(title) || index}`,
    title,
    event: eventName,
    source: "AI Engineer",
    url: scheduleUrl,
    materialType: "schedule-session",
    format: "nextjs-json-html",
    summary: description || `AI Engineer session${track ? ` in ${track}` : ""}.`,
    speakers,
    track,
    room,
    startsAt,
    tags,
    categories: categoriesFor(title, description, track, tags.join(" "))
  };
}

function normalizeInterruptRecording(match, index) {
  const url = decodeHtml(match[1]);
  const title = stripHtml(match[2]);
  return {
    id: `interrupt-2026-recording-${index + 1}-${slug(title)}`,
    title,
    event: "Interrupt 2026",
    source: "LangChain",
    url,
    materialType: "recording",
    format: "video",
    summary: `Interrupt 2026 on-demand recording: ${title}.`,
    tags: ["interrupt-2026", "recording", "production-agents"],
    categories: categoriesFor(title, "production agents evals sandboxes lifecycle")
  };
}

async function collectAiEngineerSchedule(url, eventName) {
  const fetched = await fetchText(url);
  if (!fetched.text) return { fetched, materials: [] };
  const nextData = extractNextData(fetched.text);
  const sessions = extractScheduleSessions(nextData);
  let materials = sessions.map((session, index) => normalizeAiEngineerSession(session, index, eventName, url));

  if (!materials.length) {
    const fallbackTitles = [...fetched.text.matchAll(/<span[^>]*font-semibold[^>]*>([\s\S]*?)<\/span>/g)]
      .map((match) => stripHtml(match[1]))
      .filter((title) => title && title.length > 6);
    materials = [...new Set(fallbackTitles)].map((title, index) => ({
      id: `ai-engineer-${slug(eventName)}-fallback-${index + 1}-${slug(title)}`,
      title,
      event: eventName,
      source: "AI Engineer",
      url,
      materialType: "schedule-session",
      format: "html",
      summary: `AI Engineer schedule session extracted from visible HTML: ${title}.`,
      tags: ["ai-engineer", "schedule-session", "fallback-html"],
      categories: categoriesFor(title)
    }));
  }

  return { fetched, materials };
}

async function collectInterruptRecordings() {
  const url = "https://interrupt.langchain.com/recordings";
  const fetched = await fetchText(url);
  if (!fetched.text) return { fetched, materials: [] };
  const matches = [...fetched.text.matchAll(/<a href="(https?:\/\/(?:www\.)?(?:youtube\.com|youtu\.be)[^"]+)"[\s\S]*?<div[^>]*class="[^"]*t-paragraph-2-rg[^"]*"[^>]*>([\s\S]*?)<\/div>/g)];
  const seen = new Set();
  const materials = [];
  for (const match of matches) {
    const title = stripHtml(match[2]);
    const key = `${match[1]}::${title}`;
    if (!title || seen.has(key)) continue;
    seen.add(key);
    materials.push(normalizeInterruptRecording(match, materials.length));
  }
  return { fetched, materials };
}

function addCommonMetadata(material, index) {
  const categories = material.categories || categoriesFor(
    material.title,
    material.summary,
    safeArray(material.tags).join(" "),
    material.materialType,
    material.event
  );
  return {
    id: material.id || `conference-material-${index + 1}-${slug(material.title)}`,
    title: material.title,
    event: material.event || null,
    source: material.source || null,
    url: material.url || null,
    materialType: material.materialType || "reference",
    format: material.format || null,
    summary: material.summary || "",
    speakers: safeArray(material.speakers),
    track: material.track || null,
    room: material.room || null,
    startsAt: material.startsAt || null,
    tags: safeArray(material.tags),
    categories,
    accessDate,
    licenseStatus: "metadata-only; public source link captured; reuse rights not assumed",
    downloadEligibility: "metadata-only unless the source explicitly grants reuse or provides open schedule data",
    conversionPath: "link and summary are indexed; do not mirror raw slides or recordings without separate rights verification",
    designTags: [...new Set([...safeArray(material.tags), ...categories])],
    qualitySignals: qualitySignals({ ...material, categories })
  };
}

function scoreMaterial(material) {
  let score = 0;
  const text = [
    material.title,
    material.summary,
    material.event,
    material.source,
    material.materialType,
    safeArray(material.tags).join(" "),
    safeArray(material.categories).join(" ")
  ].join("\n");
  if (/official|primary|organizer|OpenAI|Anthropic|GitHub|CNCF|LangChain|AI Engineer/i.test(text)) score += 30;
  if (/codex|claude code|coding agent|agentic coding|harness/i.test(text)) score += 35;
  if (/\bmcp\b|eval|sandbox|security|context|memory|observability|production/i.test(text)) score += 20;
  if (/live-demo|workshop|recording|webinar|open-data/i.test(text)) score += 15;
  if (/schedule-session/i.test(material.materialType || "")) score += 5;
  return score;
}

function dedupeMaterials(materials) {
  const byKey = new Map();
  for (const material of materials) {
    const key = material.url && !/schedule$|\/schedule/i.test(material.url)
      ? `${material.url}::${material.title}`
      : `${material.source}::${material.event}::${material.title}`;
    const existing = byKey.get(key);
    if (!existing || scoreMaterial(material) > scoreMaterial(existing)) {
      byKey.set(key, material);
    }
  }
  return [...byKey.values()];
}

function categoryCounts(materials) {
  return materials.reduce((acc, material) => {
    for (const category of safeArray(material.categories)) {
      acc[category] = (acc[category] || 0) + 1;
    }
    return acc;
  }, {});
}

function sourceCounts(materials) {
  return materials.reduce((acc, material) => {
    const source = material.source || "Unknown";
    acc[source] = (acc[source] || 0) + 1;
    return acc;
  }, {});
}

function topMaterials(materials, limit = 30) {
  return [...materials]
    .sort((a, b) => scoreMaterial(b) - scoreMaterial(a) || a.title.localeCompare(b.title))
    .slice(0, limit);
}

function markdownLink(material) {
  return material.url ? `[${material.title}](${material.url})` : material.title;
}

function renderReport(materials, fetchLog) {
  const counts = categoryCounts(materials);
  const sources = sourceCounts(materials);
  const top = topMaterials(materials, 35);
  const failedFetches = fetchLog.filter((item) => !item.ok);
  const aiEngineerSessions = materials.filter((item) => item.source === "AI Engineer" && item.materialType === "schedule-session");
  const interruptRecordings = materials.filter((item) => item.event === "Interrupt 2026" && item.materialType === "recording");

  return `# Agent Harness Conference and Presentation Patterns

Generated: ${generatedAt}

## Scope

- Indexed materials: ${materials.length}
- AI Engineer schedule sessions retained after dedupe: ${aiEngineerSessions.length}
- Interrupt 2026 recordings retained after dedupe: ${interruptRecordings.length}
- Source groups: ${Object.keys(sources).length}
- License policy: metadata-only. Raw slides, videos, and copied page text are not mirrored unless reuse rights are separately verified.

## Category Counts

${Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([category, count]) => `- ${category}: ${count}`).join("\n")}

## High-Value Sources

${top.map((material) => `- ${markdownLink(material)} — ${material.source || "Unknown"}; ${material.materialType}; ${safeArray(material.categories).slice(0, 4).join(", ")}`).join("\n")}

## What Good Agent-Engineering Talks Are Doing

1. They make the harness visible before the model output. The strongest sessions explain the repo contract, tool boundary, MCP servers, sandbox, eval loop, and approval model before showing a generated diff.
2. They combine live demos with reproducible fallbacks. Claude Code, Codex, and AI Engineer references all reward live work, but reliable talks need a recorded run, frozen input repo, and expected output diff ready.
3. They present a real production loop: build, test, deploy, monitor, then iterate. Interrupt's agent lifecycle framing is useful because it moves past one-off demos into operational ownership.
4. They publish session metadata and artifacts. AI Engineer's open schedule-data posture is a good pattern for making a conference searchable and for letting downstream researchers build topical maps.
5. They separate tracks by operating concern rather than product brand. Useful buckets are harness engineering, context engineering, evals, sandbox/security, MCP/tooling, memory, computer use, and production case studies.
6. They show failure modes explicitly. Agent demos become credible when they include a bad run, a blocked permission, an eval failure, a red-team case, or a rollback path.
7. They pair keynotes with hands-on workshops. Code with Claude and AI Engineer both point toward a two-layer format: keynote for direction, laptops-open workshop for adoption.
8. They make governance concrete. CNCF/OpenSSF-style sessions are valuable because they force agent talks to cover identity, supply chain, SBOMs, policy, isolation, and observability.
9. They give operators a checklist. Case-study talks should end with prompts, config files, repo layout, telemetry fields, escalation policies, and cost/latency numbers.
10. They turn conference Q&A into follow-up artifacts. Office hours, recaps, recordings, and public catalogs make the knowledge persist after the event.

## Codex/Claude Code Presentation Recipe

- Open with a specific engineering job: stale test suite, migration, dependency upgrade, security patch, docs restructure, or multi-repo investigation.
- Show the harness contract: AGENTS.md or CLAUDE.md, sandbox mode, approval policy, MCP/tool list, scripts available to the agent, and the exact command used to run it.
- Run a short task live and keep the trace visible: user request, plan, tool calls, file diff, tests, and final handoff.
- Include one failed attempt and the guardrail that catches it: denied command, failing test, eval threshold, prompt-injection attempt, or secret scan.
- Publish the reproducible bundle: prompt, fixture repo, expected patch, eval script, event trace, slides, and a README with environment setup.
- Close with operational guidance: when to use cloud agents vs local CLI, how to parallelize tasks, how to review generated patches, and when humans must remain in the loop.

## Source Health

${fetchLog.map((item) => `- ${item.url}: ${item.ok ? `OK ${item.status}` : `FETCH ISSUE ${item.status || ""}`}`.trim()).join("\n")}

${failedFetches.length ? `\nFetch issues are retained as source metadata rather than blocking the catalog. A browser or official search result may still expose the page.\n` : ""}
`;
}

function renderCatalog(materials) {
  const rows = materials
    .sort((a, b) => (a.event || "").localeCompare(b.event || "") || a.title.localeCompare(b.title))
    .map((material) => `| ${material.event || ""} | ${material.source || ""} | ${markdownLink(material)} | ${material.materialType} | ${safeArray(material.categories).join(", ")} |`)
    .join("\n");

  return `# Conference Source Catalog

Generated: ${generatedAt}

This catalog stores source metadata only. It is intended as a searchable reference index for talks, conference schedules, recordings, webinars, and event-analysis posts related to Claude Code, Codex, agent harnesses, MCP, evals, sandboxing, and production agent workflows.

| Event | Source | Material | Type | Categories |
| --- | --- | --- | --- | --- |
${rows}
`;
}

function renderPlaybook(materials) {
  const examples = topMaterials(materials, 20);
  return `# Codex Conference Talk Playbook

Generated: ${generatedAt}

## Recommended Talk Structure

1. Problem framing: name the engineering bottleneck and the human workflow it blocks.
2. Harness framing: show AGENTS.md, Codex config, sandbox/approval policy, MCP servers, and test commands.
3. Live run: execute a constrained task, show the tool trace, and keep the diff small enough to review on screen.
4. Verification: run tests, evals, secret scans, or policy checks before claiming success.
5. Failure case: show a rejected command, an eval miss, or a prompt-injection attempt and the mitigation.
6. Production bridge: describe how the same workflow becomes CI, GitHub Action, code review, scheduled maintenance, or cloud-delegated work.
7. Reproducible artifact: publish the prompt, fixture repo, expected output, event logs, and setup notes.

## Slide/Demo Assets to Prepare

- One fixture repository with a known failing test and a documented expected patch.
- One AGENTS.md or CLAUDE.md file that makes coding-agent behavior explicit.
- One trace export with model messages, tool calls, file diffs, and test output.
- One eval or policy gate that can fail visibly.
- One cost/latency table and one human-review checklist.
- One backup screen recording of the successful run.

## Reference Examples

${examples.map((material) => `- ${markdownLink(material)} — ${material.summary}`).join("\n")}
`;
}

function ensureDirs() {
  for (const dir of ["data", "data/reference-index", "reports/presentations"]) {
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  }
}

const fetchLog = [];
const dynamicMaterials = [];

const aiEngineer2026 = await collectAiEngineerSchedule("https://www.ai.engineer/schedule", "AI Engineer World's Fair 2026");
fetchLog.push({ url: "https://www.ai.engineer/schedule", ok: aiEngineer2026.fetched.ok, status: aiEngineer2026.fetched.status, extracted: aiEngineer2026.materials.length });
dynamicMaterials.push(...aiEngineer2026.materials);

const aiEngineer2025 = await collectAiEngineerSchedule("https://www.ai.engineer/summit/2025/schedule", "AI Engineer Summit 2025");
fetchLog.push({ url: "https://www.ai.engineer/summit/2025/schedule", ok: aiEngineer2025.fetched.ok, status: aiEngineer2025.fetched.status, extracted: aiEngineer2025.materials.length });
dynamicMaterials.push(...aiEngineer2025.materials);

const interrupt = await collectInterruptRecordings();
fetchLog.push({ url: "https://interrupt.langchain.com/recordings", ok: interrupt.fetched.ok, status: interrupt.fetched.status, extracted: interrupt.materials.length });
dynamicMaterials.push(...interrupt.materials);

const materials = dedupeMaterials([...sourcePages, ...dynamicMaterials])
  .map(addCommonMetadata)
  .map((material) => ({ ...material, score: scoreMaterial(material) }))
  .sort((a, b) => scoreMaterial(b) - scoreMaterial(a) || a.title.localeCompare(b.title));

const referenceIndex = {
  generatedAt,
  accessDate,
  description: "Metadata-only source catalog for agent-harness talks, conferences, recordings, webinars, and presentation-method references.",
  licensePolicy: "Do not mirror raw slides, videos, or long page text without explicit reuse rights. Store links, metadata, tags, and short original summaries.",
  counts: {
    materials: materials.length,
    byCategory: categoryCounts(materials),
    bySource: sourceCounts(materials)
  },
  fetchLog,
  materials
};

ensureDirs();
writeFileSync(outputDataFile, JSON.stringify(referenceIndex, null, 2));
writeFileSync(outputReferenceFile, JSON.stringify(referenceIndex, null, 2));
writeFileSync(outputReportFile, renderReport(materials, fetchLog));
writeFileSync(outputCatalogFile, renderCatalog(materials));
writeFileSync(outputPlaybookFile, renderPlaybook(materials));

console.error(`conference presentation materials: ${materials.length}`);
console.error(`AI Engineer 2026 sessions: ${aiEngineer2026.materials.length}`);
console.error(`AI Engineer 2025 sessions: ${aiEngineer2025.materials.length}`);
console.error(`Interrupt recordings: ${interrupt.materials.length}`);
console.error(`wrote ${path.resolve(outputDataFile)}`);
