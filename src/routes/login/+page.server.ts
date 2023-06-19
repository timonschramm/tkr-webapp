import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { AuthApiError,createClient  } from "@supabase/supabase-js";
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';

export const load = async ({ locals: { supabase, getSession } }) => {
    const session = await getSession();

    if (session) {
        throw redirect(303, "/");
    }
    else {
        console.log("Du bist hier richtig")
    }
    
}

export const actions = {
	login: async ({ request, locals: {supabase, getSession}, url }) => {
        const body = Object.fromEntries(await request.formData())

        const { data: loginData, error: err } = await supabase.auth.signInWithPassword({
			email: body.mail as string,
			password: body.password as string,
		})
        
        console.log("data", loginData)

    }
}