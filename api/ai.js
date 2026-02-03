
export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method not allowed' });
    }

    const { mode, character } = request.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return response.status(500).json({ error: 'Server AI Key missing' });
    }

    // Construct prompt based on mode
    let prompt = "";
    if (mode === 'backstory') {
        prompt = `Escribe un informe secreto breve (70 palabras) sobre cómo '${character.title}' llegó a la fiesta en casa de Rubén para el rodaje de The Gagarins el 21 de Febrero. Incluye algo sobre el reverb de la guitarra.`;
    } else if (mode === 'diy-props') {
        prompt = `Como oficial de atrezzo de The Gagarins, sugiere 3 soluciones RÁPIDAS y CUTRES para los props de '${character.title}' (${character.props.join(', ')}) usando basura doméstica o cosas cocina. Sé gracioso, directo y telegráfico (máx 15 palabras por punto).`;
    } else if (mode === 'dialogue') {
        prompt = `Dime 3 frases CORTAS y de serie B (máx 10 palabras) que '${character.title}' diría a cámara. Una menciona a The Gagarins, otra a Rubén y otra sobre morir surfeando.`;
    } else {
        return response.status(400).json({ error: 'Invalid mode' });
    }

    try {
        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        const geminiRes = await fetch(geminiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        const data = await geminiRes.json();

        if (!geminiRes.ok) {
            throw new Error(data.error?.message || 'Gemini API Error');
        }

        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "NO DATA";
        return response.status(200).json({ text });

    } catch (err) {
        console.error("AI Error:", err);
        const msg = err.message || "";
        // Check for specific Google API Quota errors
        if (msg.includes('429') || msg.includes('Resource exhausted') || msg.includes('quota')) {
            return response.status(503).json({ error: "Quota Exceeded. Please wait a moment." });
        }
        return response.status(500).json({ error: err.message });
    }
}
