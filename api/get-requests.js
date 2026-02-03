import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
    // Only allow GET
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { SUPABASE_URL, SUPABASE_PRIVATE_KEY, SUPABASE_PUBLIC_KEY } = process.env;
    const key = SUPABASE_PRIVATE_KEY || SUPABASE_PUBLIC_KEY;

    if (!SUPABASE_URL || !key) {
        return res.status(500).json({ error: 'Supabase credentials missing' });
    }

    try {
        const supabase = createClient(SUPABASE_URL, key);

        // Fetch all requests, newest first
        const { data, error } = await supabase
            .from('requests')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        return res.status(200).json(data);

    } catch (err) {
        console.error("Supabase Fetch Error:", err);
        return res.status(500).json({ error: err.message });
    }
}
