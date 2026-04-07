# java-ai-memory.dev

> A neutral comparison of agent memory libraries for Java and the JVM.

[java-ai-memory.dev](https://java-ai-memory.dev) is a single-page reference site covering every option Java developers have for adding persistent memory to AI agents — from LangChain4j ChatMemory and Spring AI ChatMemory to Koog AgentMemory, Google ADK Memory Bank, Embabel's blackboard, the community Mem0 wrapper, and Engram.

## Why this exists

Because searching "Java AI agent memory" in April 2026 returns three kinds of results:

1. Tutorials on how to store chat messages in Postgres
2. Marketing pages for Mem0 and Zep — Python only
3. GitHub issues asking why there's no Java SDK

This site tries to be the answer to that search — an honest landscape view, feature matrix, Maven coordinates, and code examples for every option, without the marketing.

## What's covered

- **Chat history libraries:** LangChain4j ChatMemory, Spring AI ChatMemory
- **Agent frameworks with memory features:** Google ADK, Koog, Embabel
- **Real memory layers:** Engram, the community Mem0 Java wrapper
- **Does-not-exist entries:** Zep Java SDK
- **DIY baseline:** pgvector + custom Spring code

For each: features, maintenance status, Maven coordinates, strengths, gaps, code examples.

## How it's maintained

The site is maintained by the [JamJet](https://jamjet.dev) team. Engram, the last library in the comparison, is our project. We are not a neutral third party — but we are transparent about that, and we present Engram with the same candor we apply to every other library, including explicit disclosure of the gaps in Engram (no Spring Boot starter yet, no JDBC backend yet, no published LongMemEval scores yet).

## Contributing

Corrections and additions are welcome. If you maintain one of these libraries and disagree with a rating, or if we've missed a library that belongs on the list:

1. Fork this repo
2. Edit `src/data/libraries.ts` — one TypeScript object per library with a clear schema
3. Open a PR

We will treat corrections from maintainers of other libraries as a priority. PRs adding genuinely new libraries that fit the scope are welcome.

## Scope guidelines

A library is in scope if it:

- Targets the JVM (Java, Kotlin, Scala)
- Provides some form of persistent memory for AI agents
- Has a public GitHub repo or Maven Central artifact

Out of scope:

- General-purpose vector database clients (Qdrant, Pinecone, Weaviate Java clients) — they're infrastructure, not memory layers
- Pure chat-history UIs (ChatWithMessages, etc.) — they don't persist beyond the session
- Python libraries, no matter how relevant — wrong ecosystem

## Running locally

```bash
npm install
npm run dev
# Opens at http://localhost:4321
```

```bash
npm run build
# Output in ./dist/
```

## Tech stack

- [Astro](https://astro.build) — static site generator
- Source Serif 4 + Inter + JetBrains Mono typography
- ~36KB single HTML file, no JavaScript bundle
- Deployed via Cloudflare Pages

## License

Apache 2.0 — the content (library descriptions, feature ratings) and the code that generates the site.
