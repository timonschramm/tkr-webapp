import { redirect } from '@sveltejs/kit'
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
    register: async ({ request, locals: { supabase, getSession }, url }) => {
    
        const body = Object.fromEntries(await request.formData())
        
        if (body.confirm_password == body.password) {
            const { data: signUpData, error: signUpError} = await supabase.auth.signUp({
                email: body.email as string,
                password: body.password as string
            })
            if(signUpError){
                console.log(signUpError)
            }
            else{
                console.log("Registration success")
                throw redirect(303, '/')
            }
        }
        else {
            console.log("password are not equal")
        }
}
}
