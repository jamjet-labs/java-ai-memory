export type Support = 'yes' | 'no' | 'partial' | 'na';

export type MaintenanceStatus = 'active' | 'community' | 'abandoned' | 'does-not-exist';

export interface Library {
  id: string;
  name: string;
  tagline: string;
  category: 'Framework' | 'Memory Layer' | 'Chat History' | 'Managed Service' | 'DIY' | 'Does Not Exist';
  description: string;
  language: string;
  license: string;
  mavenCoordinates?: string;
  latestVersion?: string;
  githubUrl?: string;
  docsUrl?: string;
  mavenCentralUrl?: string;
  stars?: number;
  maintenance: MaintenanceStatus;
  features: {
    chatHistory: Support;
    factExtraction: Support;
    conflictDetection: Support;
    vectorSearch: Support;
    keywordSearch: Support;
    graphTraversal: Support;
    hybridRetrieval: Support;
    temporalReasoning: Support;
    tokenBudgeting: Support;
    decayConsolidation: Support;
    mcpServer: Support;
    zeroInfrastructure: Support;
  };
  strengths: string[];
  gaps: string[];
  codeExample?: string;
  notes?: string;
}

export const libraries: Library[] = [
  {
    id: 'langchain4j',
    name: 'LangChain4j ChatMemory',
    tagline: 'Message window persistence with a pluggable store',
    category: 'Chat History',
    description:
      'The most popular LLM library on the JVM. Ships a ChatMemory interface with MessageWindowChatMemory and TokenWindowChatMemory implementations. Persistence is bring-your-own via the ChatMemoryStore interface.',
    language: 'Java',
    license: 'Apache 2.0',
    mavenCoordinates: 'dev.langchain4j:langchain4j',
    latestVersion: '1.0.0',
    githubUrl: 'https://github.com/langchain4j/langchain4j',
    docsUrl: 'https://docs.langchain4j.dev/tutorials/chat-memory/',
    mavenCentralUrl: 'https://central.sonatype.com/artifact/dev.langchain4j/langchain4j',
    stars: 9000,
    maintenance: 'active',
    features: {
      chatHistory: 'yes',
      factExtraction: 'no',
      conflictDetection: 'no',
      vectorSearch: 'na',
      keywordSearch: 'no',
      graphTraversal: 'no',
      hybridRetrieval: 'no',
      temporalReasoning: 'no',
      tokenBudgeting: 'partial',
      decayConsolidation: 'no',
      mcpServer: 'no',
      zeroInfrastructure: 'partial',
    },
    strengths: [
      'Mature, well-documented, widely adopted',
      'Clean abstraction for message history',
      'Pluggable storage via ChatMemoryStore',
      'Token-aware window eviction',
    ],
    gaps: [
      'No fact extraction — it is a message container',
      'No semantic search built in (RAG is a separate subsystem)',
      'Every team implements their own knowledge layer on top',
    ],
    codeExample: `ChatMemory chatMemory = MessageWindowChatMemory.withMaxMessages(20);
chatMemory.add(UserMessage.from("I'm allergic to peanuts"));
chatMemory.add(AiMessage.from("Got it, I'll remember that."));
// Next session: chatMemory is empty unless ChatMemoryStore is implemented`,
  },
  {
    id: 'spring-ai',
    name: 'Spring AI ChatMemory',
    tagline: 'Message history with the broadest backend coverage',
    category: 'Chat History',
    description:
      "Spring AI's ChatMemory shipped GA in 2025 with JDBC (Postgres, MySQL, Oracle, SQL Server), Cassandra, Mongo, Neo4j, and Cosmos DB backends. Three advisors plug it into ChatClient. The VectorStoreChatMemoryAdvisor indexes raw messages in a VectorStore but does not extract facts.",
    language: 'Java',
    license: 'Apache 2.0',
    mavenCoordinates: 'org.springframework.ai:spring-ai-core',
    latestVersion: '1.0.5',
    githubUrl: 'https://github.com/spring-projects/spring-ai',
    docsUrl: 'https://docs.spring.io/spring-ai/reference/api/chat-memory.html',
    mavenCentralUrl:
      'https://central.sonatype.com/artifact/org.springframework.ai/spring-ai-core',
    stars: 6000,
    maintenance: 'active',
    features: {
      chatHistory: 'yes',
      factExtraction: 'no',
      conflictDetection: 'no',
      vectorSearch: 'partial',
      keywordSearch: 'no',
      graphTraversal: 'no',
      hybridRetrieval: 'no',
      temporalReasoning: 'no',
      tokenBudgeting: 'partial',
      decayConsolidation: 'no',
      mcpServer: 'no',
      zeroInfrastructure: 'no',
    },
    strengths: [
      'Broadest backend support of any JVM memory library',
      'Cassandra support includes TTL',
      'Tight Spring Boot integration',
      'VectorStoreChatMemoryAdvisor enables RAG-style message recall',
    ],
    gaps: [
      'Indexes raw messages, not extracted facts',
      'No entity model or relationship graph',
      'No conflict detection',
      'Community examples describe building fact extraction yourself with a "recorder advisor" pattern',
    ],
    codeExample: `ChatMemory chatMemory = MessageWindowChatMemory.builder()
    .chatMemoryRepository(new JdbcChatMemoryRepository(jdbcTemplate))
    .maxMessages(20)
    .build();

ChatClient client = ChatClient.builder(chatModel)
    .defaultAdvisors(MessageChatMemoryAdvisor.builder(chatMemory).build())
    .build();`,
  },
  {
    id: 'google-adk',
    name: 'Google ADK (Java)',
    tagline: 'Vertex AI Memory Bank or keyword matching',
    category: 'Framework',
    description:
      "Google's Agent Development Kit shipped 1.0.0 for Java in 2025 with a BaseMemoryService interface. Two implementations: InMemoryMemoryService (keyword matching only, for development) and VertexAiMemoryBankService (fully managed, Vertex AI only). Memory Bank does real fact extraction but is Google Cloud-locked.",
    language: 'Java',
    license: 'Apache 2.0',
    mavenCoordinates: 'com.google.adk:google-adk',
    latestVersion: '1.0.0',
    githubUrl: 'https://github.com/google/adk-java',
    docsUrl: 'https://google.github.io/adk-docs/sessions/memory/',
    mavenCentralUrl: 'https://central.sonatype.com/artifact/com.google.adk/google-adk',
    stars: 2000,
    maintenance: 'active',
    features: {
      chatHistory: 'yes',
      factExtraction: 'partial',
      conflictDetection: 'partial',
      vectorSearch: 'partial',
      keywordSearch: 'yes',
      graphTraversal: 'no',
      hybridRetrieval: 'no',
      temporalReasoning: 'no',
      tokenBudgeting: 'no',
      decayConsolidation: 'no',
      mcpServer: 'no',
      zeroInfrastructure: 'no',
    },
    strengths: [
      'Memory Bank is a real managed memory service with fact extraction',
      'Session services with Firestore and Vertex backends',
      'Native Gemini integration',
      'LangChain4j integration for other model providers',
    ],
    gaps: [
      'Semantic memory requires Vertex AI (vendor lock-in)',
      'OSS path (InMemoryMemoryService) is keyword matching over a HashMap',
      'No self-hosted option for real memory',
      'Pricing is per-API-call',
    ],
    notes: 'Memory Bank is genuinely good, but you pay for it in cloud lock-in.',
  },
  {
    id: 'koog',
    name: 'Koog AgentMemory',
    tagline: 'JetBrains fact store, Kotlin-first',
    category: 'Framework',
    description:
      "JetBrains' JVM agent framework with a dedicated AgentMemory feature that stores facts organized by Concept, Subject (user, product, organization), and Scope. The nodeSaveToMemoryAutoDetectFacts node uses an LLM to extract facts automatically. Closest competitor to Mem0/Zep on the JVM.",
    language: 'Kotlin',
    license: 'Apache 2.0',
    githubUrl: 'https://github.com/JetBrains/koog',
    docsUrl: 'https://docs.koog.ai/agent-memory/',
    stars: 1500,
    maintenance: 'active',
    features: {
      chatHistory: 'yes',
      factExtraction: 'yes',
      conflictDetection: 'no',
      vectorSearch: 'partial',
      keywordSearch: 'no',
      graphTraversal: 'no',
      hybridRetrieval: 'no',
      temporalReasoning: 'no',
      tokenBudgeting: 'no',
      decayConsolidation: 'no',
      mcpServer: 'no',
      zeroInfrastructure: 'partial',
    },
    strengths: [
      'Dedicated AgentMemory feature with Concept/Subject/Scope model',
      'LLM-based fact extraction out of the box',
      'Persistence providers for in-memory, file, and Postgres',
      'Active JetBrains maintenance',
    ],
    gaps: [
      'Kotlin-first — Java consumption is awkward',
      'Issue #1001: AgentMemory floods prompts as facts accumulate (no token budgeting)',
      'No conflict detection for updating/contradicting facts',
      'No temporal validity or decay',
    ],
    codeExample: `agent {
    memory {
        scope = MemoryScope.User("user_123")
    }
    nodeSaveToMemoryAutoDetectFacts {
        subjects = listOf(Subject.User, Subject.Product)
    }
}`,
    notes:
      'See JetBrains/koog#1001 for the known scaling issue with AgentMemory replay.',
  },
  {
    id: 'embabel',
    name: 'Embabel',
    tagline: 'Blackboard pattern, long-term memory is a non-goal',
    category: 'Framework',
    description:
      "Rod Johnson's (Spring creator) JVM agent framework. Uses Goal-Oriented Action Planning with a blackboard state container for domain objects passed between actions during an agent run. Per the maintainers, long-term conversational memory is explicitly out of scope.",
    language: 'Kotlin / Java',
    license: 'Apache 2.0',
    mavenCoordinates: 'com.embabel.agent:embabel-agent-starter',
    githubUrl: 'https://github.com/embabel/embabel-agent',
    docsUrl: 'https://docs.embabel.com/',
    stars: 3000,
    maintenance: 'active',
    features: {
      chatHistory: 'partial',
      factExtraction: 'no',
      conflictDetection: 'no',
      vectorSearch: 'no',
      keywordSearch: 'no',
      graphTraversal: 'no',
      hybridRetrieval: 'no',
      temporalReasoning: 'no',
      tokenBudgeting: 'no',
      decayConsolidation: 'no',
      mcpServer: 'no',
      zeroInfrastructure: 'yes',
    },
    strengths: [
      'Strong agent orchestration with goal-oriented planning',
      'Clean blackboard pattern for domain objects within a run',
      'Full Java interop from Kotlin core',
      'Spring-integrated',
    ],
    gaps: [
      'Per-run blackboard, not persistent across sessions',
      'Long-term memory is an explicit non-goal',
      'Use Embabel for orchestration, bring memory separately',
    ],
    notes:
      'Per maintainers: "in Embabel it\'s not about conversational memory so much as domain objects that are stored in the blackboard during the flow."',
  },
  {
    id: 'mem0-java',
    name: 'Mem0 Java (community wrapper)',
    tagline: 'Thin REST client, requires Python Mem0 server',
    category: 'Framework',
    description:
      'The top Google result for "Mem0 Java SDK" is me.pgthinker:mem0-client-java, a community REST wrapper. It is not an SDK in the meaningful sense — it requires running a Python Mem0 server alongside your JVM application, with its own Qdrant and graph database dependencies.',
    language: 'Java',
    license: 'MIT',
    mavenCoordinates: 'me.pgthinker:mem0-client-java',
    latestVersion: '0.1.3',
    githubUrl: 'https://github.com/ningning0111/mem0-java',
    stars: 9,
    maintenance: 'community',
    features: {
      chatHistory: 'yes',
      factExtraction: 'yes',
      conflictDetection: 'yes',
      vectorSearch: 'yes',
      keywordSearch: 'partial',
      graphTraversal: 'yes',
      hybridRetrieval: 'partial',
      temporalReasoning: 'no',
      tokenBudgeting: 'partial',
      decayConsolidation: 'no',
      mcpServer: 'no',
      zeroInfrastructure: 'no',
    },
    strengths: [
      'Wraps a real memory engine (Mem0) via HTTP',
      'Inherits Mem0 Python features through the sidecar',
    ],
    gaps: [
      '9 GitHub stars, 13 total commits, last updated ~9 months ago',
      'Not an official SDK — Mem0 ships Python and Node.js only',
      'Requires running Python Mem0 server alongside your JVM application',
      'Inherits Mem0 infrastructure dependencies (Qdrant + graph DB typically)',
      'No SLAs, no roadmap, unmaintained',
    ],
    notes:
      'Not a serious production option for JVM teams. If you want Mem0, either pay for Mem0 Cloud or accept the Python sidecar.',
  },
  {
    id: 'zep-java',
    name: 'Zep Java SDK',
    tagline: 'Does not exist',
    category: 'Does Not Exist',
    description:
      "Zep's official clients are Python, TypeScript, and Go. There is no Java SDK at any state of completeness. Java teams who want Zep's temporal knowledge graph must either consume Zep Cloud over HTTP or hand-roll a REST client.",
    language: '—',
    license: '—',
    maintenance: 'does-not-exist',
    features: {
      chatHistory: 'na',
      factExtraction: 'na',
      conflictDetection: 'na',
      vectorSearch: 'na',
      keywordSearch: 'na',
      graphTraversal: 'na',
      hybridRetrieval: 'na',
      temporalReasoning: 'na',
      tokenBudgeting: 'na',
      decayConsolidation: 'na',
      mcpServer: 'na',
      zeroInfrastructure: 'na',
    },
    strengths: [],
    gaps: [
      'No Java SDK exists',
      'Python, TypeScript, and Go only',
      'JVM teams must hand-roll HTTP clients',
    ],
    notes:
      'Graphiti (Zep\'s engine) scored 63.8% on LongMemEval-S in published results. Zep\'s earlier 84% LoCoMo claim was re-evaluated to 58.44% by independent testing (getzep/zep-papers#5). Neither number is reachable from Java without a sidecar.',
  },
  {
    id: 'diy',
    name: 'DIY (pgvector + custom)',
    tagline: 'The most common Java AI memory stack in production today',
    category: 'DIY',
    description:
      'Most Java teams that need real memory assemble their own: PostgreSQL with pgvector (or Qdrant) for embeddings, JdbcChatMemoryRepository for raw messages, a custom advisor that calls an LLM to extract facts, and a cron job for decay. Roughly 1,500–3,000 lines of bespoke Java per team.',
    language: 'Java',
    license: 'N/A',
    maintenance: 'active',
    features: {
      chatHistory: 'yes',
      factExtraction: 'yes',
      conflictDetection: 'partial',
      vectorSearch: 'yes',
      keywordSearch: 'partial',
      graphTraversal: 'partial',
      hybridRetrieval: 'partial',
      temporalReasoning: 'partial',
      tokenBudgeting: 'partial',
      decayConsolidation: 'partial',
      mcpServer: 'no',
      zeroInfrastructure: 'no',
    },
    strengths: [
      'Full control over every layer',
      'Uses well-known components (Postgres, pgvector, Jackson)',
      'No new vendor dependency',
      'Can be shaped to exact requirements',
    ],
    gaps: [
      '1,500–3,000 lines of custom code to maintain',
      'Quietly diverges between teams and projects',
      'Rarely gets temporal reasoning right',
      'Almost never gets consolidation right',
      'No common benchmark to validate against',
    ],
  },
  {
    id: 'engram',
    name: 'Engram (JamJet)',
    tagline: 'Fact extraction, hybrid retrieval, consolidation — in one dependency',
    category: 'Memory Layer',
    description:
      'A durable memory system for AI agents from the JamJet project. Does fact extraction with conflict detection, hybrid retrieval (vector + SQLite FTS5 keyword + graph walk), temporal knowledge graph, token-budgeted context assembly, and a 5-operation consolidation engine (decay, promote, dedup, summarize, reflect). Runs against SQLite by default.',
    language: 'Java / Rust',
    license: 'Apache 2.0',
    mavenCoordinates: 'dev.jamjet:jamjet-sdk',
    latestVersion: '0.4.3',
    githubUrl: 'https://github.com/jamjet-labs/jamjet',
    docsUrl: 'https://docs.jamjet.dev',
    mavenCentralUrl: 'https://central.sonatype.com/artifact/dev.jamjet/jamjet-sdk',
    stars: 5,
    maintenance: 'active',
    features: {
      chatHistory: 'yes',
      factExtraction: 'yes',
      conflictDetection: 'yes',
      vectorSearch: 'yes',
      keywordSearch: 'yes',
      graphTraversal: 'yes',
      hybridRetrieval: 'yes',
      temporalReasoning: 'yes',
      tokenBudgeting: 'yes',
      decayConsolidation: 'yes',
      mcpServer: 'yes',
      zeroInfrastructure: 'yes',
    },
    strengths: [
      'Only library on this list with fact extraction + hybrid retrieval + temporal graph + consolidation in one dependency',
      'Zero infrastructure — SQLite only, no Postgres, no Qdrant, no Neo4j, no Python sidecar',
      'Spring Boot starter with auto-configuration (engram-spring-boot-starter:0.1.1)',
      'MCP server option means the same store is reachable from non-JVM agents',
      'Published on Maven Central, Apache 2.0',
    ],
    gaps: [
      'Version 0.4.3 — new project, small community',
      'No JDBC backend yet (SQLite-first, Postgres planned for 0.5.x)',
      'No published LongMemEval or DMR benchmark scores yet',
      '5 GitHub stars — you will be an early adopter',
    ],
    codeExample: `try (var memory = new EngramClient(EngramConfig.defaults())) {
    memory.add(
        List.of(
            Map.of("role", "user",      "content", "I'm allergic to peanuts"),
            Map.of("role", "assistant", "content", "Got it.")
        ),
        "alice", null, null
    );

    var context = memory.context(
        "what should I cook for dinner",
        "alice", null, 1000, "system_prompt"
    );
    System.out.println(context.get("text"));
}`,
    notes:
      'This site is maintained by the JamJet team. Engram is their project. We have tried to present it with the same honesty we apply to every other library here — including the gaps. Pull requests correcting any inaccuracy are welcome.',
  },
];

export const features: Array<{ key: keyof Library['features']; label: string; description: string }> = [
  {
    key: 'chatHistory',
    label: 'Chat history',
    description: 'Persistent storage of conversation messages within or across sessions.',
  },
  {
    key: 'factExtraction',
    label: 'Fact extraction',
    description: 'LLM reads a conversation and produces discrete, atomic facts about the user or topic.',
  },
  {
    key: 'conflictDetection',
    label: 'Conflict detection',
    description:
      'When a new fact contradicts an old one, the system invalidates the old fact and links the supersession.',
  },
  {
    key: 'vectorSearch',
    label: 'Vector search',
    description: 'Semantic similarity search over fact or message embeddings.',
  },
  {
    key: 'keywordSearch',
    label: 'Keyword search',
    description: 'BM25 or full-text search over fact/message text for exact terms, proper nouns, and IDs.',
  },
  {
    key: 'graphTraversal',
    label: 'Graph traversal',
    description: 'Entity-relationship graph that can be walked to find structurally connected facts.',
  },
  {
    key: 'hybridRetrieval',
    label: 'Hybrid retrieval',
    description: 'Vector + keyword + graph signals fused with configurable weights.',
  },
  {
    key: 'temporalReasoning',
    label: 'Temporal reasoning',
    description: 'Facts have validity windows; point-in-time queries return what was true at a given moment.',
  },
  {
    key: 'tokenBudgeting',
    label: 'Token-budgeted context',
    description: 'Context assembly respects a strict token limit when building prompt injections.',
  },
  {
    key: 'decayConsolidation',
    label: 'Decay & consolidation',
    description:
      'Stale facts fade, frequent facts get promoted, duplicates merge, summaries and insights are generated.',
  },
  {
    key: 'mcpServer',
    label: 'MCP server',
    description: 'Exposes memory operations as MCP tools so non-JVM agents (Claude Code, Cursor) can use them.',
  },
  {
    key: 'zeroInfrastructure',
    label: 'Zero infrastructure',
    description:
      'Runs without a separate database, vector store, graph store, or Python sidecar.',
  },
];
