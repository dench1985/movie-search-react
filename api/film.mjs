export default async function handler(request, response) {
    if (request.method !== "GET") {
        response.setHeader("Allow", "GET");
        return response.status(405).json({ message: "Method not allowed" });
    }

    const id = String(request.query.id ?? "");
    if (!/^\d+$/.test(id)) {
        return response.status(400).json({ message: "Invalid film id" });
    }

    const apiKey = process.env.KINOPOISK_API_KEY;
    if (!apiKey) {
        return response.status(500).json({ message: "API key is not configured" });
    }

    try {
        const upstream = await fetch(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/${encodeURIComponent(id)}`,
            {
                headers: {
                    Accept: "application/json",
                    "X-API-KEY": apiKey,
                },
            }
        );
        const data = await upstream.json();
        response.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");
        return response.status(upstream.status).json(data);
    } catch {
        return response.status(502).json({ message: "Film API is unavailable" });
    }
}
