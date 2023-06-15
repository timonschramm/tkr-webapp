import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { AuthApiError,createClient  } from "@supabase/supabase-js";
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';

export const load = (async ({ locals: { supabase, getSession } }) => {
  
});

export const actions = {
	login: async ({ request, locals: {supabase, getSession}, url }) => {
        const body = Object.fromEntries(await request.formData())

        const { data: loginData, error: err } = await supabase.auth.signInWithPassword({
			email: body.mail as string,
			password: body.password as string,
		})
        
        console.log("data", loginData)

		if (err) {
			if (err instanceof AuthApiError && err.status === 400) {
				console.log("Invalid credentials")
				return fail(400, {
					error: "Leider sind deine Zugangsdaten falsch. Bitte überprüfe diese noch einmal.",
				})
			}
			return fail(500, {
				message: "Server error. Try again later.",
			})
		}
    }
}