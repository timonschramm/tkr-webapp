import { redirect } from '@sveltejs/kit';

export const load = async ({ locals: { supabase, getSession}}) => {

    var loggedin = 0;
    const session = await getSession()
    if (session) {
        loggedin = 1;
    }
    else {
        loggedin = 0;
    }

    const {data:postDaten, error} = await supabase
    .from('ebay_posts')
    .select('id, titel, preis')
    if(error){
        console.log(error)
    }
    console.log(postDaten)
    console.log("success")
    return {postDaten, loggedin}
}
export const actions = {
    createPost : async ({request, locals: {supabase}}) => {
        console.log("erreicht")
        const body = Object.fromEntries(await request.formData())
        const {error} = await supabase
            .from('ebay_posts')
            .insert({titel: body.name, preis: body.price})
        
        if(error){
            console.log(error)
        }
        console.log("erfolgreicher upload")
    }
}