import "@mendable/firecrawl-js"
import { FireCrawlLoader } from "@langchain/community/document_loaders/web/firecrawl"

const URL = "https://docs.cursor.com/"
// import { API_SECRET_TOKEN } from "astro:env/server"

const loader = new FireCrawlLoader({
    url: URL,
    //apiKey: "...", // Optional, defaults to `FIRECRAWL_API_KEY` in your env.
    mode: "crawl", // The mode to run the crawler in. Can be "scrape" for single urls or "crawl" for all accessible subpages
    params: {
        // optional parameters based on Firecrawl API docs
        // For API documentation, visit https://docs.firecrawl.dev
    },
});

const docs = await loader.load();

console.log(docs)
