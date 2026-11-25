export default async function handler(request, response) {
    if (request.method !== "GET") {
        response.setHeader("Allow", "GET");
        return response.status(405).json({ message: "Method not allowed" });
    }

    const keyword = String(request.query.keyword ?? "").trim();
    if (!keyword || keyword.length > 100) {
        return response.status(400).json({ message: "Invalid search query" });
    }

    const apiKey = process.env.KINOPOISK_API_KEY;
    if (!apiKey) {
        return response.status(500).json({ message: "API key is not configured" });
    }

    const upstreamUrl = new URL(
        "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword"
    );
    upstreamUrl.searchParams.set("keyword", keyword);
    upstreamUrl.searchParams.set("page", "1");

    try {
        const upstream = await fetch(upstreamUrl, {
            headers: {
                Accept: "application/json",
                "X-API-KEY": apiKey,
            },
        });
        const data = await upstream.json();
        response.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
        return response.status(upstream.status).json(data);
    } catch {
        return response.status(502).json({ message: "Film API is unavailable" });
    }
}
