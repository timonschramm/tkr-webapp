import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
export const load = (async ({ locals: { supabase, getSession } }) => {
    const session = await getSession();
   
    if (session) {
        await supabase.auth.signOut();
        console.log("logging out")
        
        throw redirect(303, '/');
    }
    else {
        console.log("not logged in before")
        throw redirect(303, '/');
    }

}) satisfies PageServerLoad;
