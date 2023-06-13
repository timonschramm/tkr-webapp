//import type {}



import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

export const actions = {
    register: async ({ request }) => {
        console.log("register wurde aufgerufen!")
        //console.log(PUBLIC_SUPABASE_ANON_KEY)

        const body = Object.fromEntries(await request.formData());
        
        //console.log(body)
        console.log(body.mail)
        console.log(body.password)

        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
			email: body.mail as string,
			password: body.password as string,
		});
        if(signUpError){
            console.log(signUpError)
        }
        else {
            console.log("anmeldung erfolgreich")
        }
    }
}