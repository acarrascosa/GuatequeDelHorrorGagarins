
export default function handler(request, response) {
    // Only return public safe info
    return response.status(200).json({
        phone: process.env.CONTACT_PHONE || '', // Fallback empty if not set
        email: process.env.CONTACT_EMAIL || '',
        whatsapp: process.env.CONTACT_WHATSAPP || '' // Should be full URL like https://wa.me/34...
    });
}
