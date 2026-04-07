import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  return rss({
    title: 'Java AI Memory — updates',
    description:
      'Changes and updates to the java-ai-memory.dev comparison of agent memory libraries for Java and the JVM.',
    site: context.site!,
    items: [
      {
        title: 'Initial release: 9 Java AI memory libraries compared',
        description:
          'Launched java-ai-memory.dev with feature matrix, code samples, and honest gap analysis for LangChain4j ChatMemory, Spring AI ChatMemory, Koog AgentMemory, Google ADK, Embabel, Mem0 Java wrapper, Zep, DIY pgvector stack, and Engram.',
        pubDate: new Date('2026-04-07'),
        link: '/#libraries',
      },
    ],
    customData: `<language>en-us</language><lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`,
    stylesheet: false,
  });
}
