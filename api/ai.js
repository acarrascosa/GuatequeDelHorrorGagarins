export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method not allowed' });
    }

    const { mode, character } = request.body;

    // DEBUG: Check what envs are loaded
    console.log("Loaded Env Keys:", Object.keys(process.env));
    const apiKey = process.env.OPENROUTER_API_KEY;
    console.log(apiKey);

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
        const openRouterUrl = 'https://openrouter.ai/api/v1/chat/completions';

        const openRouterRes = await fetch(openRouterUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': 'https://guateque-del-horror-gagarins.vercel.app', // Site URL
                'X-Title': 'Guateque del Horror Protocol' // Site Title
            },
            body: JSON.stringify({
                "model": "liquid/lfm-2.5-1.2b-thinking:free",
                "messages": [
                    { "role": "user", "content": prompt }
                ]
            })
        });

        const data = await openRouterRes.json();

        if (!openRouterRes.ok) {
            console.error("OpenRouter Error:", data);
            throw new Error(data.error?.message || 'OpenRouter API Error');
        }

        const text = data.choices?.[0]?.message?.content || "NO DATA";
        return response.status(200).json({ text });

    } catch (err) {
        console.error("AI Error:", err);
        return response.status(500).json({ error: err.message });
    }
}
