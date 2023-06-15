import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';

const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

export const load = async ({ locals: {getSession} }) => {
  console.log("everywhere displayed");
  var loggedin = false;
  console.log(getSession());
  const session = await getSession();
  if(session){
    console.log("logged in")
    loggedin = true
  }
  else {
    console.log("not logged in")
    loggedin = false
  }
  console.log("success");
  return {loggedin};
};