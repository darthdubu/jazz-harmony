import { supabase } from '@/lib/supabase/client';

export async function addToMailingList(email: string, source: string = 'login_page') {
    if (!supabase) return;

    try {
        const { error } = await supabase
            .from('subscribers')
            .upsert({
                email,
                source,
                subscribed_at: new Date().toISOString()
            }, { onConflict: 'email' });

        if (error) {
            console.error('Error adding to mailing list:', error);
        }
    } catch (err) {
        console.error('Unexpected error adding to mailing list:', err);
    }
}
