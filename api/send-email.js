import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, phone, message, costume } = request.body;

        // Basic validation
        if (!name || (!email && !phone)) {
            return response.status(400).json({ error: 'Missing required fields' });
        }

        const { data, error } = await resend.emails.send({
            from: 'Soviet Protocol <onboarding@resend.dev>', // Default testing domain
            to: ['ritmoandblues@gmail.com'],
            subject: `ASIGNACIÓN VESTIDOR: ${costume.toUpperCase()} - ${name}`,
            html: `
        <h1>🚀 Nueva Solicitud de Asignación</h1>
        <p><strong>Agente:</strong> ${name}</p>
        <p><strong>Personaje:</strong> ${costume}</p>
        <hr />
        <h3>Datos de Contacto</h3>
        <ul>
            <li><strong>Email:</strong> ${email || 'N/A'}</li>
            <li><strong>Teléfono:</strong> ${phone || 'N/A'}</li>
        </ul>
        <hr />
        <h3>Mensaje Adicional</h3>
        <p>${message}</p>
        <br />
        <p><em>Glory to the Gagarins!</em></p>
      `,
        });

        if (error) {
            console.error("Resend Error:", error);
            return response.status(500).json({ error: error.message });
        }

        return response.status(200).json({ message: 'Email sent successfully', id: data.id });
    } catch (err) {
        console.error("Server Error:", err);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
}
