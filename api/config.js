export default function handler(request, response) {
    // Only return public safe info
    return response.status(200).json({
        phone: process.env.CONTACT_PHONE || '669060021', // Fallback for local testing
        email: process.env.CONTACT_EMAIL || 'ritmoandblues@gmail.com',
        whatsapp: process.env.CONTACT_WHATSAPP || 'https://wa.me/34669060021'
    });
}
