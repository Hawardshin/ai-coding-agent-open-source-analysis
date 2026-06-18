import { existsSync, mkdirSync, writeFileSync } from "node:fs";

const generatedAt = new Date().toISOString();
const accessDate = generatedAt.slice(0, 10);
const periodStart = "2025-06-18";
const periodEnd = "2026-06-18";

const outputDataFile = "data/ai-usage-trend-conferences-6-12mo.json";
const outputReferenceFile = "data/reference-index/ai-usage-trend-conferences-6-12mo.json";
const outputReportFile = "reports/presentations/01-ai-usage-trends-bigtech-korea-6-12mo.md";
const outputCatalogFile = "reports/presentations/ai-usage-trend-source-catalog-6-12mo.md";

const materials = [
  {
    id: "aws-summit-ny-2025-agentcore-announcements",
    company: "Amazon/AWS",
    regionGroup: "global",
    country: "United States",
    event: "AWS Summit New York 2025",
    eventDate: "2025-07-16",
    title: "Top announcements of AWS Summit New York 2025",
    url: "https://aws.amazon.com/blogs/aws/top-announcements-of-the-aws-summit-in-new-york-2025/",
    source: "AWS Blog",
    materialType: "announcement-roundup",
    sourceType: "official",
    trendTags: ["agentic-ai", "enterprise-ai", "agent-platform", "memory", "identity", "tool-use"],
    summary: "AWS introduced Amazon Bedrock AgentCore as managed infrastructure to deploy and operate AI agents securely at scale."
  },
  {
    id: "aboutamazon-aws-summit-agentic-ai-2025",
    company: "Amazon/AWS",
    regionGroup: "global",
    country: "United States",
    event: "AWS Summit New York 2025",
    eventDate: "2025-07-16",
    title: "AWS announces new innovations for building AI agents at AWS Summit New York 2025",
    url: "https://www.aboutamazon.com/news/aws/aws-summit-agentic-ai-innovations-2025",
    source: "About Amazon",
    materialType: "news-announcement",
    sourceType: "official",
    trendTags: ["agentic-ai", "agent-platform", "enterprise-adoption", "marketplace", "investment"],
    summary: "Amazon positioned AgentCore, marketplace listings, and agentic AI investment as the next enterprise AI buildout."
  },
  {
    id: "aws-summit-ny-2025-keynote",
    company: "Amazon/AWS",
    regionGroup: "global",
    country: "United States",
    event: "AWS Summit New York 2025",
    eventDate: "2025-07-16",
    title: "AWS Summit New York City 2025 keynote",
    url: "https://www.youtube.com/watch?v=2890bEb61qQ",
    source: "AWS Events YouTube",
    materialType: "recording",
    sourceType: "official-video",
    trendTags: ["agentic-ai", "enterprise-ai", "developer-platform"],
    summary: "Keynote from AWS Agentic AI leadership, useful for tracking how AWS framed agents for builders and enterprises."
  },
  {
    id: "aws-reinvent-2025-ai-news",
    company: "Amazon/AWS",
    regionGroup: "global",
    country: "United States",
    event: "AWS re:Invent 2025",
    eventDate: "2025-12-04",
    title: "Frontier agents, Trainium chips, and Amazon Nova: key announcements from AWS re:Invent 2025",
    url: "https://www.aboutamazon.com/news/aws/aws-re-invent-2025-ai-news-updates",
    source: "About Amazon",
    materialType: "event-news-roundup",
    sourceType: "official",
    trendTags: ["frontier-agents", "ai-infrastructure", "custom-models", "agentcore", "trainium", "ai-factories"],
    summary: "AWS grouped re:Invent AI launches around agents, Nova models, Trainium infrastructure, AgentCore, and AI Factories."
  },
  {
    id: "aws-reinvent-2025-media-agentic-ai",
    company: "Amazon/AWS",
    regionGroup: "global",
    country: "United States",
    event: "AWS re:Invent 2025",
    eventDate: "2025-12-02",
    title: "Agentic AI headlines AWS re:Invent 2025 across media and entertainment",
    url: "https://aws.amazon.com/blogs/media/agentic-ai-headlines-aws-reinvent-2025-across-media-and-entertainment/",
    source: "AWS Media Blog",
    materialType: "industry-session-guide",
    sourceType: "official",
    trendTags: ["agentic-ai", "media", "human-feedback", "workflow-orchestration", "industry-ai"],
    summary: "AWS highlighted agentic media workflows, video highlights, human feedback loops, and GenAI analytics sessions."
  },
  {
    id: "aws-reinvent-2025-agentcore-deep-dive",
    company: "Amazon/AWS",
    regionGroup: "global",
    country: "United States",
    event: "AWS re:Invent 2025",
    eventDate: "2025-12-04",
    title: "Architecting scalable and secure agentic AI applications with Amazon Bedrock AgentCore",
    url: "https://www.youtube.com/watch?v=wqmeZOT6mmc",
    source: "AWS Events YouTube",
    materialType: "technical-session-recording",
    sourceType: "official-video",
    trendTags: ["agentic-ai", "security", "runtime", "agentcore", "production-architecture"],
    summary: "Technical session for AgentCore architecture, ReAct loops, runtime isolation, and production agent deployment."
  },
  {
    id: "aws-reinvent-2025-agentcore-memory",
    company: "Amazon/AWS",
    regionGroup: "global",
    country: "United States",
    event: "AWS re:Invent 2025",
    eventDate: "2025-12-04",
    title: "Make agents remember with Amazon Bedrock AgentCore Memory",
    url: "https://www.youtube.com/results?search_query=AWS+re%3AInvent+2025+Make+agents+remember+Amazon+Bedrock+AgentCore+Memory",
    source: "AWS Events YouTube",
    materialType: "session-search",
    sourceType: "official-video-index",
    trendTags: ["agentic-ai", "memory", "context", "personalization"],
    summary: "Agent memory became a first-class managed capability in AWS's agent infrastructure message."
  },
  {
    id: "aws-reinvent-2025-dev-track",
    company: "Amazon/AWS",
    regionGroup: "global",
    country: "United States",
    event: "AWS re:Invent 2025",
    eventDate: "2025-12-04",
    title: "Breakout Sessions and Code Talks from AWS re:Invent 2025",
    url: "https://dev.to/aws/dev-track-spotlight-breakout-sessions-code-talks-from-aws-reinvent-2025-3om7",
    source: "AWS Community Builders",
    materialType: "session-guide",
    sourceType: "technical-blog",
    trendTags: ["developer-tools", "coding-agents", "kiro", "amazon-q", "strands-agents", "security", "observability"],
    summary: "Developer track grouped GenAI and agentic AI with Kiro, Amazon Q Developer, multi-agent systems, and agent security."
  },
  {
    id: "aws-ai-data-conference-2026-agentic",
    company: "Amazon/AWS",
    regionGroup: "europe",
    country: "United Kingdom",
    event: "AWS AI and Data Conference 2026",
    eventDate: "2026-03-01",
    title: "AWS AI and Data Conference 2026",
    url: "https://aws.amazon.com/uki/cloud-services/aws-events/ai-and-data-conference-2026/",
    source: "AWS",
    materialType: "conference-page",
    sourceType: "official",
    trendTags: ["agentic-ai", "data-streaming", "messaging", "customer-experience", "enterprise-ai"],
    summary: "AWS framed streaming, messaging, and Amazon Connect as infrastructure for responsive agentic AI experiences."
  },
  {
    id: "aws-summit-seoul-2026",
    company: "Amazon/AWS",
    regionGroup: "korea",
    country: "South Korea",
    event: "AWS Summit Seoul 2026",
    eventDate: "2026-05-20",
    title: "AWS Summit Seoul 2026 kicks off with agentic AI and physical AI roadmap",
    url: "https://www.asiae.co.kr/en/article/IT/2026052007280509092",
    source: "Asia Economy",
    materialType: "event-report",
    sourceType: "news",
    trendTags: ["korea", "agentic-ai", "physical-ai", "enterprise-ai", "infrastructure"],
    summary: "Korean coverage says AWS Summit Seoul emphasized agentic AI, physical AI, and Korean enterprise infrastructure readiness."
  },
  {
    id: "aws-summit-ny-2026",
    company: "Amazon/AWS",
    regionGroup: "global",
    country: "United States",
    event: "AWS Summit New York City 2026",
    eventDate: "2026-06-17",
    title: "AWS Summit New York City 2026",
    url: "https://aws.amazon.com/events/summits/new-york/",
    source: "AWS",
    materialType: "conference-page",
    sourceType: "official",
    trendTags: ["agentic-ai", "hands-on", "enterprise-ai", "cloud-ai"],
    summary: "AWS Summit New York 2026 describes hands-on cloud and AI innovation from agentic AI to serverless computing."
  },
  {
    id: "microsoft-build-2026-official",
    company: "Microsoft",
    regionGroup: "global",
    country: "United States",
    event: "Microsoft Build 2026",
    eventDate: "2026-06-02",
    title: "Microsoft Build 2026",
    url: "https://news.microsoft.com/build-2026/",
    source: "Microsoft News",
    materialType: "event-hub",
    sourceType: "official",
    trendTags: ["agentic-ai", "foundry", "github-copilot", "agentic-development", "security", "model-lifecycle"],
    summary: "Build 2026 centered on Foundry updates, AI agent deployment, GitHub app for agentic development, and agentic SDLC security."
  },
  {
    id: "microsoft-build-2026-work-iq",
    company: "Microsoft",
    regionGroup: "global",
    country: "United States",
    event: "Microsoft Build 2026",
    eventDate: "2026-06-02",
    title: "Microsoft Build 2026: Be yourself at work",
    url: "https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work/",
    source: "Microsoft Blog",
    materialType: "keynote-analysis",
    sourceType: "official",
    trendTags: ["agentic-ai", "work-iq", "context-layer", "copilot-studio", "foundry", "enterprise-knowledge"],
    summary: "Microsoft introduced context layers such as Microsoft IQ and Work IQ to ground agents in enterprise work data."
  },
  {
    id: "microsoft-copilot-studio-may-2026",
    company: "Microsoft",
    regionGroup: "global",
    country: "United States",
    event: "Microsoft Build 2026",
    eventDate: "2026-05-31",
    title: "What's new in Copilot Studio",
    url: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new",
    source: "Microsoft Learn",
    materialType: "product-release-notes",
    sourceType: "official-doc",
    trendTags: ["computer-use", "agentic-ai", "copilot-studio", "workflow-automation", "governance"],
    summary: "Copilot Studio updates show computer use, prompt nodes, model selection, and workflow automation entering enterprise agent products."
  },
  {
    id: "microsoft-ai-tour-seoul-2026",
    company: "Microsoft",
    regionGroup: "korea",
    country: "South Korea",
    event: "Microsoft AI Tour Seoul 2026",
    eventDate: "2026-03-26",
    title: "Microsoft AI Tour in Seoul",
    url: "https://aitour.microsoft.com/flow/microsoft/seoul26/landingpage/page/cityhome",
    source: "Microsoft AI Tour",
    materialType: "event-page",
    sourceType: "official",
    trendTags: ["korea", "agentic-ai", "copilot", "azure-ai", "hands-on", "governance"],
    summary: "Seoul stop for Microsoft AI Tour focused on AI frontier strategy, Copilot, Azure AI, and practical enterprise adoption."
  },
  {
    id: "microsoft-ai-tour-seoul-thelec",
    company: "Microsoft",
    regionGroup: "korea",
    country: "South Korea",
    event: "Microsoft AI Tour Seoul 2026",
    eventDate: "2026-03-26",
    title: "Microsoft AI Tour resources",
    url: "https://adoption.microsoft.com/en-us/ai-tour/",
    source: "Microsoft Adoption",
    materialType: "event-resource-hub",
    sourceType: "official",
    trendTags: ["korea", "agentic-ai", "copilot", "azure-ai", "case-studies", "security-governance"],
    summary: "Microsoft AI Tour resource hub describes expert-led sessions, hands-on demos, and deep dives into Copilot and Azure AI for responsible organizational adoption."
  },
  {
    id: "microsoft-ai-tour-hong-kong-2026",
    company: "Microsoft",
    regionGroup: "asia",
    country: "Hong Kong",
    event: "Microsoft AI Tour Hong Kong 2026",
    eventDate: "2026-04-22",
    title: "From AI experiments to frontier success",
    url: "https://news.microsoft.com/source/asia/2026/04/22/from-ai-experiments-to-frontier-success-microsoft-brings-agentic-ai-to-hong-kong-organizations/",
    source: "Microsoft Source Asia",
    materialType: "event-recap",
    sourceType: "official",
    trendTags: ["agentic-ai", "business-value", "frontier-success", "customer-engagement", "process-automation"],
    summary: "Microsoft framed agentic AI adoption around measurable business value: employee experience, customer engagement, process reshaping, and innovation."
  },
  {
    id: "google-cloud-next-2026-welcome",
    company: "Google Cloud",
    regionGroup: "global",
    country: "United States",
    event: "Google Cloud Next 2026",
    eventDate: "2026-04-22",
    title: "Welcome to Google Cloud Next '26",
    url: "https://cloud.google.com/blog/topics/google-cloud-next/welcome-to-google-cloud-next26",
    source: "Google Cloud Blog",
    materialType: "event-announcement",
    sourceType: "official",
    trendTags: ["agentic-ai", "gemini-enterprise", "agentic-defense", "workspace", "customer-experience"],
    summary: "Google Cloud emphasized Agentic Taskforce, Agentic Defense, Gemini Enterprise, Workspace, and customer-experience AI."
  },
  {
    id: "google-cloud-next-2026-news",
    company: "Google Cloud",
    regionGroup: "global",
    country: "United States",
    event: "Google Cloud Next 2026",
    eventDate: "2026-04-22",
    title: "Google Cloud Next 2026: News and updates",
    url: "https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/next-2026/",
    source: "Google Blog",
    materialType: "event-news-roundup",
    sourceType: "official",
    trendTags: ["agentic-enterprise", "gemini-enterprise-agent-platform", "tpu", "ai-infrastructure"],
    summary: "Google positioned the agentic enterprise as a roadmap across Gemini Enterprise Agent Platform and AI infrastructure."
  },
  {
    id: "google-cloud-next-2026-agentic-ai-track",
    company: "Google Cloud",
    regionGroup: "global",
    country: "United States",
    event: "Google Cloud Next 2026",
    eventDate: "2026-04-22",
    title: "Agentic AI: Google Cloud Next 2026",
    url: "https://www.googlecloudevents.com/next-vegas/agentic-ai",
    source: "Google Cloud Events",
    materialType: "conference-track",
    sourceType: "official",
    trendTags: ["agentic-ai", "gemini-enterprise", "custom-agents", "workplace-ai"],
    summary: "Track page focuses on creating, sharing, and running custom AI agents through Gemini Enterprise."
  },
  {
    id: "google-cloud-next-2026-keynote",
    company: "Google Cloud",
    regionGroup: "global",
    country: "United States",
    event: "Google Cloud Next 2026",
    eventDate: "2026-04-22",
    title: "Google Cloud Next '26 Keynote: Building the Agentic Enterprise",
    url: "https://www.youtube.com/watch?v=lsqPct4NnNs",
    source: "Google Cloud YouTube",
    materialType: "keynote-recording",
    sourceType: "official-video",
    trendTags: ["agentic-enterprise", "gemini", "enterprise-ai", "ai-transformation"],
    summary: "Official keynote recording framed the end of AI experimentation and the start of agentic transformation."
  },
  {
    id: "google-workspace-next-2026",
    company: "Google Cloud",
    regionGroup: "global",
    country: "United States",
    event: "Google Cloud Next 2026",
    eventDate: "2026-04-23",
    title: "10 more announcements from Google Workspace at Cloud Next '26",
    url: "https://workspace.google.com/blog/product-announcements/10-more-announcements-workspace-at-next-2026",
    source: "Google Workspace Blog",
    materialType: "product-announcement",
    sourceType: "official",
    trendTags: ["workspace", "agentic-skills", "data-visualization", "productivity-ai"],
    summary: "Workspace announcements show AI moving into everyday work surfaces, including skills and interactive data capabilities."
  },
  {
    id: "google-io-2026-developer-keynote-news",
    company: "Google",
    regionGroup: "global",
    country: "United States",
    event: "Google I/O 2026",
    eventDate: "2026-05-20",
    title: "All the news from the Google I/O 2026 Developer keynote",
    url: "https://developers.googleblog.com/all-the-news-from-the-google-io-2026-developer-keynote/",
    source: "Google Developers Blog",
    materialType: "developer-keynote-roundup",
    sourceType: "official",
    trendTags: ["developer-tools", "agents", "gemini", "antigravity", "agent-platform", "workflow-automation"],
    summary: "Google described a shift from AI assistants to agents that navigate complex workflows, with Gemini 3.5 and Antigravity 2.0."
  },
  {
    id: "google-io-2026-announcements",
    company: "Google",
    regionGroup: "global",
    country: "United States",
    event: "Google I/O 2026",
    eventDate: "2026-05-20",
    title: "100 things we announced at I/O 2026",
    url: "https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/",
    source: "Google Blog",
    materialType: "announcement-list",
    sourceType: "official",
    trendTags: ["gemini", "agents", "consumer-ai", "developer-tools", "search", "creation"],
    summary: "Google's I/O list centered on new models, agents, and tools for building, search, creation, discovery, shopping, and productivity."
  },
  {
    id: "google-io-2026-developer-keynote-video",
    company: "Google",
    regionGroup: "global",
    country: "United States",
    event: "Google I/O 2026",
    eventDate: "2026-05-20",
    title: "Developer Keynote at Google I/O 2026",
    url: "https://www.youtube.com/watch?v=aqmpZocmR8o",
    source: "Google Developers YouTube",
    materialType: "keynote-recording",
    sourceType: "official-video",
    trendTags: ["developer-tools", "building-agents", "antigravity", "gemini-api"],
    summary: "Developer keynote includes building agents and Antigravity sections, useful for developer workflow trend analysis."
  },
  {
    id: "nvidia-gtc-2026",
    company: "NVIDIA",
    regionGroup: "global",
    country: "United States",
    event: "NVIDIA GTC 2026",
    eventDate: "2026-03-19",
    title: "Best of NVIDIA GTC 2026",
    url: "https://www.nvidia.com/gtc/",
    source: "NVIDIA",
    materialType: "conference-hub",
    sourceType: "official",
    trendTags: ["agentic-ai", "physical-ai", "robotics", "ai-factories", "inference", "open-models"],
    summary: "GTC 2026 highlights agentic AI, inference, physical AI, robotics, AI factories, and open models."
  },
  {
    id: "nvidia-gtc-2026-live-updates",
    company: "NVIDIA",
    regionGroup: "global",
    country: "United States",
    event: "NVIDIA GTC 2026",
    eventDate: "2026-03-19",
    title: "NVIDIA GTC 2026: Live updates on what's next in AI",
    url: "https://blogs.nvidia.com/blog/gtc-2026-news/",
    source: "NVIDIA Blog",
    materialType: "event-news",
    sourceType: "official",
    trendTags: ["ai-infrastructure", "physical-ai", "robotics", "simulation", "enterprise-ai"],
    summary: "NVIDIA's live updates track keynote news, demos, and breakout themes around accelerated AI and physical AI."
  },
  {
    id: "nvidia-gtc-2026-robotics-digital-twins",
    company: "NVIDIA",
    regionGroup: "global",
    country: "United States",
    event: "NVIDIA GTC 2026",
    eventDate: "2026-03-19",
    title: "AI Agents, Robotics, and Digital Twins",
    url: "https://www.nvidia.com/en-us/on-demand/session/gtc26-s81674/",
    source: "NVIDIA On-Demand",
    materialType: "session-page",
    sourceType: "official",
    trendTags: ["physical-ai", "robotics", "digital-twins", "manufacturing", "autonomous-systems"],
    summary: "Session connects AI agents, robotics, and digital twins into a manufacturing and autonomous-system stack."
  },
  {
    id: "nvidia-gtc-2026-ai-factories",
    company: "NVIDIA",
    regionGroup: "global",
    country: "United States",
    event: "NVIDIA GTC 2026",
    eventDate: "2026-03-19",
    title: "Building and Scaling AI Factories with Digital Twins and Robotics",
    url: "https://www.nvidia.com/en-us/on-demand/session/gtc26-s81508/",
    source: "NVIDIA On-Demand",
    materialType: "session-page",
    sourceType: "official",
    trendTags: ["ai-factories", "digital-twins", "robotics", "manufacturing-ai", "physical-ai"],
    summary: "GTC session shows AI factories as a production-grade pattern combining simulation, robotics, and data-center scale AI."
  },
  {
    id: "meta-connect-2025-keynote",
    company: "Meta",
    regionGroup: "global",
    country: "United States",
    event: "Meta Connect 2025",
    eventDate: "2025-09-17",
    title: "Meta Connect 2025 opening keynote",
    url: "https://www.youtube.com/watch?v=80s0chTOsK0",
    source: "Meta YouTube",
    materialType: "keynote-recording",
    sourceType: "official-video",
    trendTags: ["ai-wearables", "ai-glasses", "consumer-ai", "multimodal-ai", "metaverse"],
    summary: "Meta Connect 2025 is useful as a signal that consumer AI is moving into glasses and embodied personal assistants."
  },
  {
    id: "apple-wwdc-2026-keynote",
    company: "Apple",
    regionGroup: "global",
    country: "United States",
    event: "WWDC 2026",
    eventDate: "2026-06-08",
    title: "WWDC 2026 keynote introducing Siri AI",
    url: "https://www.youtube.com/watch?v=hF8swzNR1-o",
    source: "Apple YouTube",
    materialType: "keynote-recording",
    sourceType: "official-video",
    trendTags: ["consumer-ai", "on-device-ai", "private-cloud-compute", "siri", "personal-context", "multimodal-ai"],
    summary: "Apple's WWDC26 AI signal is privacy-first personal context, on-device models, Private Cloud Compute, and Siri as an AI interface."
  },
  {
    id: "apple-wwdc26-dub-dub-daily",
    company: "Apple",
    regionGroup: "global",
    country: "United States",
    event: "WWDC 2026",
    eventDate: "2026-06-09",
    title: "Dub Dub Daily: Day 2 - WWDC26",
    url: "https://developer.apple.com/videos/play/wwdc2026/397/",
    source: "Apple Developer",
    materialType: "developer-video",
    sourceType: "official",
    trendTags: ["developer-tools", "apple-intelligence", "on-device-ai", "platform-ai"],
    summary: "Apple Developer session index helps track how Apple translates AI announcements into developer guidance."
  },
  {
    id: "salesforce-dreamforce-2025-agentforce-keynote",
    company: "Salesforce",
    regionGroup: "global",
    country: "United States",
    event: "Dreamforce 2025",
    eventDate: "2025-10-15",
    title: "Agentforce Keynote: Become an Agentic Enterprise",
    url: "https://www.salesforce.com/plus/experience/dreamforce_2025/series/agentforce_at_dreamforce_2025/episode/episode-s1e3",
    source: "Salesforce+",
    materialType: "keynote-recording",
    sourceType: "official",
    trendTags: ["agentic-enterprise", "agentforce", "customer-success", "enterprise-agents", "crm"],
    summary: "Dreamforce framed AI agents as a customer-success operating model, not only a chatbot feature."
  },
  {
    id: "salesforce-dreamforce-2025-takeaways",
    company: "Salesforce",
    regionGroup: "global",
    country: "United States",
    event: "Dreamforce 2025",
    eventDate: "2025-10-15",
    title: "The biggest news from Dreamforce to you",
    url: "https://www.salesforce.com/news/stories/the-biggest-news-of-dreamforce-to-you/",
    source: "Salesforce News",
    materialType: "event-news-hub",
    sourceType: "official",
    trendTags: ["agentforce-360", "data-360", "voice-agents", "context", "enterprise-ai", "gemini-enterprise"],
    summary: "Salesforce's Dreamforce news hub links the 2025 Agentforce 360, Data 360 context, Google Gemini integration, and enterprise agent announcements."
  },
  {
    id: "salesforce-agentforce-360-updates",
    company: "Salesforce",
    regionGroup: "global",
    country: "United States",
    event: "Dreamforce 2025 and Agentforce 360",
    eventDate: "2025-10-15",
    title: "Agentforce 360 announcements",
    url: "https://www.salesforce.com/agentforce/what-is-new/",
    source: "Salesforce",
    materialType: "product-announcement",
    sourceType: "official",
    trendTags: ["agent-builder", "voice-agents", "multi-agent-orchestration", "data-360", "low-code"],
    summary: "Agentforce 360 updates show enterprise agents moving toward low-code builders, voice, multimodal document extraction, and multi-agent teams."
  },
  {
    id: "openai-devday-2025",
    company: "OpenAI",
    regionGroup: "global",
    country: "United States",
    event: "OpenAI DevDay 2025",
    eventDate: "2025-10-06",
    title: "OpenAI DevDay 2025",
    url: "https://openai.com/devday/",
    source: "OpenAI",
    materialType: "conference-page",
    sourceType: "official",
    trendTags: ["developer-platform", "agentkit", "codex", "realtime", "apps"],
    summary: "OpenAI DevDay is a key signal for agent/app developer platforms, Codex workflows, and production demos."
  },
  {
    id: "openai-codex-at-devday-2025",
    company: "OpenAI",
    regionGroup: "global",
    country: "United States",
    event: "OpenAI DevDay 2025",
    eventDate: "2025-10-06",
    title: "How Codex ran OpenAI DevDay 2025",
    url: "https://developers.openai.com/blog/codex-at-devday",
    source: "OpenAI Developers",
    materialType: "technical-blog",
    sourceType: "official",
    trendTags: ["coding-agents", "developer-tools", "parallel-work", "demo-production", "docs-automation"],
    summary: "OpenAI's case study shows Codex used for demos, booth apps, docs, code review, and parallel event execution."
  },
  {
    id: "anthropic-code-with-claude",
    company: "Anthropic",
    regionGroup: "global",
    country: "United States",
    event: "Code with Claude",
    eventDate: "2026-05-06",
    title: "Code with Claude developer conference",
    url: "https://claude.com/code-with-claude",
    source: "Anthropic",
    materialType: "conference-page",
    sourceType: "official",
    trendTags: ["coding-agents", "claude-code", "hands-on-workshops", "developer-tools", "live-demo"],
    summary: "Anthropic's developer conference format emphasizes hands-on Claude Code workshops, live demos, and builder deep-dives."
  },
  {
    id: "github-universe-2025-schedule",
    company: "GitHub",
    regionGroup: "global",
    country: "United States",
    event: "GitHub Universe 2025",
    eventDate: "2025-10-28",
    title: "Your guide to GitHub Universe 2025: The schedule just launched",
    url: "https://github.blog/news-insights/company-news/your-guide-to-github-universe-2025-the-schedule-just-launched/",
    source: "GitHub Blog",
    materialType: "schedule-announcement",
    sourceType: "official",
    trendTags: ["coding-agents", "vibe-coding", "automation", "ai-security", "developer-tools"],
    summary: "Universe 2025 schedule highlighted vibe coding, automation at scale, and AI-driven security."
  },
  {
    id: "github-agent-hq-2025",
    company: "GitHub",
    regionGroup: "global",
    country: "United States",
    event: "GitHub Universe 2025",
    eventDate: "2025-10-28",
    title: "Welcome home, agents",
    url: "https://github.blog/news-insights/company-news/welcome-home-agents/",
    source: "GitHub Blog",
    materialType: "announcement",
    sourceType: "official",
    trendTags: ["agent-orchestration", "coding-agents", "multi-agent", "developer-workflow", "github"],
    summary: "GitHub positioned Agent HQ as a place to orchestrate coding agents across developer workflows."
  },
  {
    id: "naver-dan25-sessions",
    company: "NAVER",
    regionGroup: "korea",
    country: "South Korea",
    event: "DAN25",
    eventDate: "2025-11-06",
    title: "DAN25 sessions",
    url: "https://dan.naver.com/25/sessions",
    source: "NAVER",
    materialType: "conference-schedule",
    sourceType: "official",
    trendTags: ["korea", "service-ai", "ai-agents", "search", "commerce", "llm", "vlm"],
    summary: "NAVER's DAN25 session catalog is a primary source for On-Service AI, AI agents, search/recommendation, and ecosystem AI."
  },
  {
    id: "naver-dan25-clova-highlights",
    company: "NAVER",
    regionGroup: "korea",
    country: "South Korea",
    event: "DAN25",
    eventDate: "2025-11-06",
    title: "NAVER Cloud's DAN25 highlights: AI, a shared endeavor for all",
    url: "https://clova.ai/en/tech-blog/naver-clouds-dan25-highlights-ai-a-shared-endeavor-for-all",
    source: "NAVER Cloud / CLOVA",
    materialType: "event-recap",
    sourceType: "official-blog",
    trendTags: ["korea", "on-service-ai", "ai-agents", "enterprise-ai", "ecosystem"],
    summary: "NAVER reported DAN25 attendance and framed AI as an ecosystem-wide service transformation."
  },
  {
    id: "naver-dan25-agent-n-koreatimes",
    company: "NAVER",
    regionGroup: "korea",
    country: "South Korea",
    event: "DAN25",
    eventDate: "2025-11-06",
    title: "Naver to debut agentic AI service Agent N next year",
    url: "https://www.koreatimes.co.kr/business/tech-science/20251106/naver-to-debut-agentic-ai-service-agent-n-next-year",
    source: "The Korea Times",
    materialType: "event-report",
    sourceType: "news",
    trendTags: ["korea", "agentic-ai", "search", "super-app", "consumer-ai"],
    summary: "Korean coverage says NAVER used DAN25 to present Agent N and agentic AI direction for services."
  },
  {
    id: "naver-dan25-business-agents",
    company: "NAVER",
    regionGroup: "korea",
    country: "South Korea",
    event: "DAN25",
    eventDate: "2025-11-06",
    title: "Beyond Tools, Toward a Trusted Partner: The New Era of Business Agents",
    url: "https://www.youtube.com/watch?v=1B4J4ZAV-hA",
    source: "TEAM NAVER YouTube",
    materialType: "session-recording",
    sourceType: "official-video",
    trendTags: ["korea", "business-agents", "enterprise-ai", "agentic-ai"],
    summary: "NAVER session title is a strong signal that business agents are being framed as trusted work partners."
  },
  {
    id: "samsung-ai-forum-2025-open",
    company: "Samsung",
    regionGroup: "korea",
    country: "South Korea",
    event: "Samsung AI Forum 2025",
    eventDate: "2025-09-15",
    title: "Samsung Electronics opens Samsung AI Forum 2025",
    url: "https://news.samsung.com/global/samsung-electronics-opens-samsung-ai-forum-2025",
    source: "Samsung Newsroom",
    materialType: "event-announcement",
    sourceType: "official",
    trendTags: ["korea", "agentic-ai", "on-device-ai", "semiconductor-ai", "generative-ai"],
    summary: "Samsung AI Forum 2025 gathered research and industry speakers around breakthroughs in AI and future research directions."
  },
  {
    id: "samsung-ai-forum-2025-youtube-sessions",
    company: "Samsung",
    regionGroup: "korea",
    country: "South Korea",
    event: "Samsung AI Forum 2025",
    eventDate: "2025-09-16",
    title: "13 online sessions from Samsung AI Forum 2025 are now available",
    url: "https://developer.samsung.com/sdp/news/en/2025/10/16/catch-13-insightful-sessions-from-samsung-ai-forum-2025-on-youtube",
    source: "Samsung Developer",
    materialType: "recording-index",
    sourceType: "official",
    trendTags: ["korea", "generative-to-agentic-ai", "on-device-ai", "productivity", "ai-agent"],
    summary: "Samsung described the online forum theme as Generative to Agentic AI, with on-device AI and productivity-oriented agents."
  },
  {
    id: "samsung-research-saif-2025",
    company: "Samsung",
    regionGroup: "korea",
    country: "South Korea",
    event: "Samsung AI Forum 2025",
    eventDate: "2025-09-16",
    title: "Samsung AI Forum 2025",
    url: "https://research.samsung.com/saif",
    source: "Samsung Research",
    materialType: "conference-page",
    sourceType: "official",
    trendTags: ["korea", "knowledge-graph", "diffusion-language-models", "generative-ai-safety", "productivity-evals"],
    summary: "Samsung Research agenda includes knowledge graphs, diffusion language models, adversarial safety, and productivity benchmarks."
  },
  {
    id: "sk-ai-summit-2025-official",
    company: "SK",
    regionGroup: "korea",
    country: "South Korea",
    event: "SK AI Summit 2025",
    eventDate: "2025-11-03",
    title: "SK hosts SK AI Summit 2025",
    url: "https://eng.sk.com/news/sk-hosts-sk-ai-summit-2025-with-vision-to-solve-ai-challenges-through-memory-infrastructure-and-advanced-ai-solutions",
    source: "SK",
    materialType: "event-news",
    sourceType: "official",
    trendTags: ["korea", "ai-infrastructure", "memory", "advanced-ai-solutions", "ai-economy"],
    summary: "SK framed the summit around AI Now & Next, memory infrastructure, and advanced AI solutions."
  },
  {
    id: "sk-ai-summit-2025-recap",
    company: "SK Telecom / SK",
    regionGroup: "korea",
    country: "South Korea",
    event: "SK AI Summit 2025",
    eventDate: "2025-11-04",
    title: "The SK AI Summit 2025 concluded with strong industry participation",
    url: "https://www.sktelecom.com/en/feature/feature_detail.do?currentPage=1&idx=40&keyword=&type=",
    source: "SK Telecom",
    materialType: "event-recap",
    sourceType: "official",
    trendTags: ["korea", "global-ai-ecosystem", "nvidia", "anthropic", "crusoe", "ai-economy"],
    summary: "SKT recap emphasizes global ecosystem speakers and the future of the AI-driven economy."
  },
  {
    id: "sk-ai-summit-2025-agentic-youtube",
    company: "SK",
    regionGroup: "korea",
    country: "South Korea",
    event: "SK AI Summit 2025",
    eventDate: "2025-11-04",
    title: "First Steps to Agentic AI: Industry-Specific Opportunities and Practical Guide",
    url: "https://www.youtube.com/watch?v=gn0pXvZdg6o",
    source: "SK AI Summit YouTube",
    materialType: "session-recording",
    sourceType: "official-video",
    trendTags: ["korea", "agentic-ai", "industry-use-cases", "practical-guide"],
    summary: "SK AI Summit session title directly addresses industry-specific opportunities and practical agentic AI adoption."
  },
  {
    id: "ai-summit-seoul-2025-technode",
    company: "AI Summit Seoul",
    regionGroup: "korea",
    country: "South Korea",
    event: "AI Summit Seoul & Expo 2025",
    eventDate: "2025-11-10",
    title: "Global AI Conference: The 8th AI Summit Seoul & EXPO 2025",
    url: "https://technode.global/event/global-ai-conference-the-8th-ai-summit-seoul-expo-2025/",
    source: "TechNode Global",
    materialType: "event-listing",
    sourceType: "event-listing",
    trendTags: ["korea", "industrial-ai", "ai-agents", "agentic-ai", "ax"],
    summary: "Listing frames the event from industrial AI and AX to AI agents and agentic AI."
  },
  {
    id: "ai-summit-seoul-2026-official",
    company: "AI Summit Seoul",
    regionGroup: "korea",
    country: "South Korea",
    event: "AI Summit Seoul & Expo 2026",
    eventDate: "2026-08-19",
    title: "AI Summit Seoul & EXPO 2026",
    url: "https://www.aisummitseoul.com/",
    source: "AI Summit Seoul",
    materialType: "conference-page",
    sourceType: "official",
    trendTags: ["korea", "agentic-ai", "enterprise-ai", "ai-infrastructure", "industry-applications"],
    summary: "Although the 2026 event is slightly outside the cutoff, the active CFP page reflects Korea's current agentic/enterprise/infrastructure AI agenda."
  },
  {
    id: "semicon-korea-ai-summit-2026",
    company: "SEMICON Korea",
    regionGroup: "korea",
    country: "South Korea",
    event: "SEMICON Korea AI Summit 2026",
    eventDate: "2026-02-11",
    title: "AI Summit - SEMICON Korea",
    url: "https://www.semiconkorea.org/en/conference/technology/ai-summit",
    source: "SEMICON Korea",
    materialType: "conference-track",
    sourceType: "official",
    trendTags: ["korea", "semiconductor-ai", "ai-infrastructure", "edge-ai", "manufacturing"],
    summary: "SEMICON Korea's AI Summit is a useful Korean signal for AI in semiconductor and manufacturing ecosystems."
  },
  {
    id: "agentcon-seoul-2026",
    company: "Global AI Community Seoul",
    regionGroup: "korea",
    country: "South Korea",
    event: "AgentCon Seoul 2026",
    eventDate: "2026-04-16",
    title: "AgentCon Seoul",
    url: "https://www.communitydays.org/event/2026-04-16/agentcon-seoul",
    source: "Community Days / Global AI Community",
    materialType: "developer-conference-page",
    sourceType: "community-event",
    trendTags: ["korea", "ai-agents", "developer-community", "agent-builders"],
    summary: "AgentCon Seoul is part of the AI Agents World Tour and signals Korean developer interest in building agents."
  },
  {
    id: "icml-2026-seoul",
    company: "ICML",
    regionGroup: "korea",
    country: "South Korea",
    event: "ICML 2026",
    eventDate: "2026-07-06",
    title: "ICML 2026 Seoul",
    url: "https://icml.cc/",
    source: "ICML",
    materialType: "research-conference-page",
    sourceType: "official",
    trendTags: ["korea", "research", "machine-learning", "foundation-models", "agents"],
    summary: "ICML 2026 is just outside the period but matters because Seoul becomes a global ML research hub in the immediate next cycle."
  },
  {
    id: "aaai-summer-symposium-seoul-2026",
    company: "AAAI",
    regionGroup: "korea",
    country: "South Korea",
    event: "AAAI 2026 Summer Symposium Series",
    eventDate: "2026-06-22",
    title: "AAAI 2026 Summer Symposium Series in Seoul",
    url: "https://aaai.org/conference/summer-symposia/suss26/",
    source: "AAAI",
    materialType: "research-symposium-page",
    sourceType: "official",
    trendTags: ["korea", "research", "ai-community", "symposium"],
    summary: "The AAAI Summer Symposium in Seoul is just after the cutoff and adds a near-term research-community signal."
  },
  {
    id: "naver-kakao-agentic-ai-2026-koreatimes",
    company: "NAVER / Kakao",
    regionGroup: "korea",
    country: "South Korea",
    event: "Korea platform AI trend",
    eventDate: "2026-01-02",
    title: "Naver, Kakao gear up for agentic AI era in 2026",
    url: "https://www.koreatimes.co.kr/business/tech-science/20260102/naver-kakao-gear-up-for-agentic-ai-era-in-2026",
    source: "The Korea Times",
    materialType: "trend-report",
    sourceType: "news",
    trendTags: ["korea", "agentic-ai", "search", "messaging", "super-app", "consumer-ai"],
    summary: "Korean platform trend coverage says NAVER and Kakao are moving search and messaging toward agentic AI in 2026."
  },
  {
    id: "naver-kakao-agents-koreatechtoday",
    company: "NAVER / Kakao",
    regionGroup: "korea",
    country: "South Korea",
    event: "Korea platform AI trend",
    eventDate: "2026-01-01",
    title: "From LLMs to Agents: Naver and Kakao enter next phase of AI competition",
    url: "https://koreatechtoday.com/from-llms-to-agents-naver-and-kakao-enter-next-phase-of-ai-competition/",
    source: "KoreaTechToday",
    materialType: "trend-report",
    sourceType: "news-analysis",
    trendTags: ["korea", "agentic-ai", "platforms", "consumer-ai", "service-rollout"],
    summary: "Trend analysis describes Korea's major internet companies moving from LLMs toward agents that plan and execute tasks."
  }
];

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

function slug(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

function inPeriod(date) {
  return date >= periodStart && date <= periodEnd;
}

function scoreMaterial(material) {
  let score = 0;
  if (material.sourceType?.includes("official")) score += 30;
  if (material.regionGroup === "korea") score += 15;
  if (material.company === "Amazon/AWS") score += 10;
  if (safeArray(material.trendTags).some((tag) => /agentic|agent|copilot|agentforce|agentcore|gemini-enterprise/i.test(tag))) score += 25;
  if (safeArray(material.trendTags).some((tag) => /infrastructure|physical|on-device|security|governance|memory|context|data/i.test(tag))) score += 15;
  if (inPeriod(material.eventDate)) score += 20;
  return score;
}

function addMetadata(material) {
  return {
    ...material,
    id: material.id || `${slug(material.company)}-${slug(material.title)}`,
    accessDate,
    periodStart,
    periodEnd,
    inRequestedWindow: inPeriod(material.eventDate),
    evidenceRole: material.sourceType?.includes("official") ? "primary-or-organizer-source" : "secondary-trend-context",
    licenseStatus: "metadata-only; public source link captured; reuse rights not assumed",
    downloadEligibility: "metadata-only unless the source explicitly grants reuse",
    conversionPath: "index URL, metadata, trend tags, and short summary; do not mirror raw slides or recordings",
    score: scoreMaterial(material)
  };
}

function countBy(items, keyFn) {
  return items.reduce((acc, item) => {
    const key = keyFn(item) || "unknown";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

function tagCounts(items) {
  return items.reduce((acc, item) => {
    for (const tag of safeArray(item.trendTags)) acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});
}

function top(items, limit = 16) {
  return [...items]
    .sort((a, b) => b.score - a.score || a.eventDate.localeCompare(b.eventDate) || a.title.localeCompare(b.title))
    .slice(0, limit);
}

async function checkSources(items) {
  const checked = [];
  for (const item of items) {
    try {
      let res = await fetch(item.url, {
        method: "HEAD",
        headers: { "User-Agent": "ai-coding-research-browser" }
      });
      if ([403, 405].includes(res.status) || res.status >= 500) {
        res = await fetch(item.url, { headers: { "User-Agent": "ai-coding-research-browser" } });
      }
      checked.push({ id: item.id, url: item.url, status: res.status, ok: res.ok || [403, 405, 429].includes(res.status) });
    } catch (error) {
      checked.push({ id: item.id, url: item.url, status: 0, ok: false, error: String(error?.message || error).slice(0, 160) });
    }
  }
  return checked;
}

function link(item) {
  return item.url ? `[${item.title}](${item.url})` : item.title;
}

function renderReport(items, sourceChecks) {
  const windowItems = items.filter((item) => item.inRequestedWindow);
  const outsideWindow = items.filter((item) => !item.inRequestedWindow);
  const byCompany = countBy(items, (item) => item.company);
  const byRegion = countBy(items, (item) => item.regionGroup);
  const byTag = tagCounts(items);
  const failed = sourceChecks.filter((check) => !check.ok);

  const trendLines = [
    {
      title: "Agentic AI is now the default enterprise framing",
      body: "AWS AgentCore, Microsoft Foundry/Copilot Studio, Google Gemini Enterprise Agent Platform, Salesforce Agentforce, NAVER Agent N, and SK/Samsung sessions all frame AI as systems that plan, call tools, remember context, and execute business tasks."
    },
    {
      title: "Context, memory, and data layers are becoming product features",
      body: "Microsoft IQ/Work IQ, AWS AgentCore Memory, Salesforce Data 360, Google Gemini Enterprise, NAVER On-Service AI, and Samsung knowledge-graph sessions show a shift from model demos to managed context infrastructure."
    },
    {
      title: "Governance and security moved into the keynote layer",
      body: "AWS AgentCore Identity/Gateway, Microsoft agentic SDLC security, Google Agentic Defense, Samsung safety sessions, and OpenSSF/Korea security-adjacent events show that production AI adoption is gated by identity, auditability, sandboxing, and policy."
    },
    {
      title: "Developer workflows are being rebuilt around agents",
      body: "OpenAI DevDay/Codex, Anthropic Code with Claude, Google Antigravity, GitHub Agent HQ, Amazon Q/Kiro, and Microsoft Build all treat coding agents as a first-class developer surface."
    },
    {
      title: "Physical AI and AI infrastructure are converging",
      body: "NVIDIA GTC, AWS re:Invent, SEMICON Korea, and SK AI Summit connect AI factories, chips, memory, robotics, digital twins, and edge/on-device AI as the next infrastructure wave."
    },
    {
      title: "Korea's pattern is service AI plus industrial infrastructure",
      body: "NAVER and Kakao emphasize search, messaging, commerce, and super-app agents; Samsung emphasizes on-device/productivity AI and semiconductor AI; SK and SEMICON emphasize memory, infrastructure, and manufacturing; AWS/Microsoft Seoul events show enterprise case-study pull."
    }
  ];

  return `# AI Usage Trend Conferences: Big Tech, Amazon/AWS, Global and Korea

Generated: ${generatedAt}

## Scope

- Requested window: ${periodStart} to ${periodEnd}
- Indexed sources: ${items.length}
- In requested date window: ${windowItems.length}
- Near-term context just outside window: ${outsideWindow.length}
- Source policy: metadata-only. Raw slides, videos, and copied page text are not mirrored without explicit reuse rights.

## Source Mix

### By Company

${Object.entries(byCompany).sort((a, b) => b[1] - a[1]).map(([company, count]) => `- ${company}: ${count}`).join("\n")}

### By Region

${Object.entries(byRegion).sort((a, b) => b[1] - a[1]).map(([region, count]) => `- ${region}: ${count}`).join("\n")}

### Top Tags

${Object.entries(byTag).sort((a, b) => b[1] - a[1]).slice(0, 24).map(([tag, count]) => `- ${tag}: ${count}`).join("\n")}

## Key Trends

${trendLines.map((trend, index) => `${index + 1}. **${trend.title}.** ${trend.body}`).join("\n")}

## Highest-Signal References

${top(items, 24).map((item) => `- ${item.eventDate} · ${item.company} · ${link(item)} — ${safeArray(item.trendTags).slice(0, 6).join(", ")}`).join("\n")}

## Amazon/AWS Readout

- AWS moved the conversation from generative AI demos to managed agent infrastructure: AgentCore runtime, memory, identity, gateway/tool integration, code interpreter, browser, observability, and production operations.
- re:Invent added the second layer: Nova/frontier models, Trainium, AI Factories, Amazon Q/Kiro, and vertical examples such as media, contact center, and container modernization.
- AWS Summit Seoul 2026 is important for Korea because the message is no longer only cloud migration; it is agentic AI plus physical AI on top of strong Korean networks, industrial ecosystems, and enterprise IT.

## Global Big-Tech Readout

- Microsoft: agents need enterprise context and governance. Build 2026's strongest signal is Microsoft IQ/Work IQ plus Foundry and Copilot Studio.
- Google: Gemini Enterprise and Antigravity push both workplace agents and developer agents; Cloud Next and I/O align around the agentic enterprise and agentic developer workflow.
- NVIDIA: physical AI, robotics, inference, AI factories, and digital twins are now discussed as one production stack.
- Apple and Meta: consumer AI is moving into personal-context surfaces and wearables, with privacy/on-device architecture on Apple's side and AI glasses on Meta's side.
- Salesforce: CRM/customer-success AI is moving from copilots to multi-agent, voice, low-code, and Data 360-backed enterprise agents.

## Korea Readout

- NAVER: DAN25 shows On-Service AI, Agent N, business agents, search/recommendation, and platform-scale AI service integration.
- Samsung: Samsung AI Forum 2025 uses a "Generative to Agentic AI" frame, with on-device AI, productivity agents, knowledge graphs, and semiconductor/design AI.
- SK: SK AI Summit 2025 links AI adoption to memory infrastructure, advanced AI solutions, global ecosystem partners, and industry-specific agentic AI.
- Microsoft/AWS Seoul events show foreign big-tech AI adoption is being localized through Korean enterprise case studies rather than only product announcements.
- AgentCon Seoul, AI Summit Seoul, SEMICON Korea, ICML Seoul, and AAAI Seoul show Seoul is becoming both an applied AI and research-conference hub.

## Watch List

- Whether AgentCore, Copilot Studio, Gemini Enterprise, Agentforce, and NAVER Agent N publish comparable eval, security, and ROI metrics.
- Whether Korea's AI-agent adoption first scales in platform search/messaging, enterprise AIOps, customer service, semiconductor/manufacturing, or finance.
- Whether AI factories and physical AI become standard enterprise budget items or stay inside hyperscaler/semiconductor narratives.
- How pricing shifts from seats to usage, tasks, or outcomes as agents run long workflows and call tools repeatedly.

## Source Health

${sourceChecks.map((check) => `- ${check.status || "ERR"} ${check.url}`).join("\n")}

${failed.length ? `\nFetch issues retained for manual review: ${failed.length}\n` : ""}
`;
}

function renderCatalog(items) {
  return `# AI Usage Trend Conference Source Catalog

Generated: ${generatedAt}

Requested window: ${periodStart} to ${periodEnd}

| Date | Region | Company | Event | Source | Trends |
| --- | --- | --- | --- | --- | --- |
${items
  .sort((a, b) => b.eventDate.localeCompare(a.eventDate) || a.company.localeCompare(b.company))
  .map((item) => `| ${item.eventDate} | ${item.regionGroup} | ${item.company} | ${item.event} | ${link(item)} | ${safeArray(item.trendTags).join(", ")} |`)
  .join("\n")}
`;
}

function ensureDirs() {
  for (const dir of ["data", "data/reference-index", "reports/presentations"]) {
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  }
}

const enriched = materials.map(addMetadata).sort((a, b) => b.score - a.score || b.eventDate.localeCompare(a.eventDate));
const sourceChecks = await checkSources(enriched);

const referenceIndex = {
  generatedAt,
  accessDate,
  periodStart,
  periodEnd,
  description: "Recent 6-12 month conference and presentation source catalog for AI usage trends across Amazon/AWS, global big tech, and Korea.",
  licensePolicy: "Metadata-only. Do not mirror raw decks, recordings, or long excerpts without explicit rights.",
  counts: {
    materials: enriched.length,
    inRequestedWindow: enriched.filter((item) => item.inRequestedWindow).length,
    nearTermContext: enriched.filter((item) => !item.inRequestedWindow).length,
    byCompany: countBy(enriched, (item) => item.company),
    byRegion: countBy(enriched, (item) => item.regionGroup),
    byTag: tagCounts(enriched)
  },
  sourceChecks,
  materials: enriched
};

ensureDirs();
writeFileSync(outputDataFile, JSON.stringify(referenceIndex, null, 2));
writeFileSync(outputReferenceFile, JSON.stringify(referenceIndex, null, 2));
writeFileSync(outputReportFile, renderReport(enriched, sourceChecks));
writeFileSync(outputCatalogFile, renderCatalog(enriched));

console.error(`ai usage trend conference sources: ${enriched.length}`);
console.error(`in requested window: ${referenceIndex.counts.inRequestedWindow}`);
console.error(`near-term context: ${referenceIndex.counts.nearTermContext}`);
console.error(`source check issues: ${sourceChecks.filter((check) => !check.ok).length}`);
