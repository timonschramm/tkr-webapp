import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
export const load = async () => {
    const {data:postDaten, error} = await supabase
    .from('ebay_posts')
    .select('id, titel, preis')
    if(error){
        console.log(error)
    }
    console.log(postDaten)
    console.log("success")
    return {postDaten}
}
export const actions = {
    createPost : async ({request}) => {
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