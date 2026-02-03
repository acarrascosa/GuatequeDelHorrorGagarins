export default async function handler(request, response) {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return response.status(500).json({ error: "No API Key found" });
    }

    try {
        // List models available for this API key
        const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
        const res = await fetch(url);
        const data = await res.json();

        // Filter for generateContent supported models
        const available = data.models
            ?.filter(m => m.supportedGenerationMethods.includes("generateContent"))
            .map(m => m.name);

        return response.status(200).json({
            available_models: available || [],
            full_response: data
        });

    } catch (e) {
        return response.status(500).json({ error: e.message });
    }
}
