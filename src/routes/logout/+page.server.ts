import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
export const load = async ({ locals: { supabase, getSession } }) => {
    const session = await getSession();

    if (session) {
        console.log("Session found")
        await supabase.auth.signOut();
        throw redirect(303, "/");
    }
    else {
        console.log("No session found")
        throw redirect(303, "/");
    }
    
}