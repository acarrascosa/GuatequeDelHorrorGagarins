export default function handler(request, response) {
    // Only return public safe info
    return response.status(200).json({
        phone: process.env.CONTACT_PHONE,
        email: process.env.CONTACT_EMAIL,
        whatsapp: process.env.CONTACT_WHATSAPP
    });
}
