import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, phone, message, costume } = req.body;

    if (!name || (!email && !phone)) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"Soviet Protocol" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // Send to self
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
        };

        if (email) {
            mailOptions.replyTo = email;
        }

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Nodemailer Error:', error);
        return res.status(500).json({ error: error.message || 'Failed to send email' });
    }
}
